import { ActionID as ActionIdProto } from '/wotlk/core/proto/common.js';
import { ResourceType } from '/wotlk/core/proto/api.js';
import { OtherAction } from '/wotlk/core/proto/common.js';
import { getWowheadItemId } from '/wotlk/core/proto_utils/equipped_item.js';
import { NO_TARGET } from '/wotlk/core/proto_utils/utils.js';
// If true uses wotlkdb.com, else uses wowhead.com.
export const USE_WOTLK_DB = false;
// Uniquely identifies a specific item / spell / thing in WoW. This object is immutable.
export class ActionId {
    constructor(itemId, spellId, otherId, tag, baseName, name, iconUrl) {
        this.itemId = itemId;
        this.spellId = spellId;
        this.otherId = otherId;
        this.tag = tag;
        switch (otherId) {
            case OtherAction.OtherActionNone:
                break;
            case OtherAction.OtherActionWait:
                baseName = 'Wait';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_pocketwatch_01.jpg';
                break;
            case OtherAction.OtherActionManaRegen:
                name = 'Mana Tick';
                iconUrl = resourceTypeToIcon[ResourceType.ResourceTypeMana];
                if (tag == 1) {
                    name += ' (Casting)';
                }
                else if (tag == 2) {
                    name += ' (Not Casting)';
                }
                break;
            case OtherAction.OtherActionEnergyRegen:
                baseName = 'Energy Tick';
                iconUrl = resourceTypeToIcon[ResourceType.ResourceTypeEnergy];
                break;
            case OtherAction.OtherActionFocusRegen:
                baseName = 'Focus Tick';
                iconUrl = resourceTypeToIcon[ResourceType.ResourceTypeFocus];
                break;
            case OtherAction.OtherActionManaGain:
                baseName = 'Mana Gain';
                iconUrl = resourceTypeToIcon[ResourceType.ResourceTypeMana];
                break;
            case OtherAction.OtherActionRageGain:
                baseName = 'Rage Gain';
                iconUrl = resourceTypeToIcon[ResourceType.ResourceTypeRage];
                break;
            case OtherAction.OtherActionAttack:
                name = 'Attack';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_04.jpg';
                if (tag == 1) {
                    name += ' (Main Hand)';
                }
                else if (tag == 2) {
                    name += ' (Off Hand)';
                }
                break;
            case OtherAction.OtherActionShoot:
                name = 'Shoot';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/large/ability_marksmanship.jpg';
                break;
            case OtherAction.OtherActionPet:
                break;
            case OtherAction.OtherActionRefund:
                baseName = 'Refund';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_coin_01.jpg';
                break;
            case OtherAction.OtherActionDamageTaken:
                baseName = 'Damage Taken';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_04.jpg';
                break;
            case OtherAction.OtherActionHealingModel:
                baseName = 'Incoming HPS';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_renew.jpg';
                break;
            case OtherAction.OtherActionBloodRuneGain:
                baseName = 'Blood Rune Gain';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_deathstrike.jpg';
                break;
            case OtherAction.OtherActionFrostRuneGain:
                baseName = 'Frost Rune Gain';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_deathstrike2.jpg';
                break;
            case OtherAction.OtherActionUnholyRuneGain:
                baseName = 'Unholy Rune Gain';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_empowerruneblade.jpg';
                break;
            case OtherAction.OtherActionDeathRuneGain:
                baseName = 'Death Rune Gain';
                iconUrl = 'https://wow.zamimg.com/images/wow/icons/medium/spell_deathknight_empowerruneblade.jpg';
                break;
        }
        this.baseName = baseName;
        this.name = name || baseName;
        this.iconUrl = iconUrl;
    }
    anyId() {
        return this.itemId || this.spellId || this.otherId;
    }
    equals(other) {
        return this.equalsIgnoringTag(other) && this.tag == other.tag;
    }
    equalsIgnoringTag(other) {
        return (this.itemId == other.itemId
            && this.spellId == other.spellId
            && this.otherId == other.otherId);
    }
    setBackground(elem) {
        if (this.iconUrl) {
            elem.style.backgroundImage = `url('${this.iconUrl}')`;
        }
    }
    static makeItemUrl(id) {
        if (USE_WOTLK_DB) {
            return 'https://wotlkdb.com/?item=' + id;
        }
        else {
            return 'https://wowhead.com/wotlk/item=' + id;
        }
    }
    static makeSpellUrl(id) {
        if (USE_WOTLK_DB) {
            return 'https://wotlkdb.com/?spell=' + id;
        }
        else {
            return 'https://wowhead.com/wotlk/spell=' + id;
        }
    }
    setWowheadHref(elem) {
        if (this.itemId) {
            elem.href = ActionId.makeItemUrl(this.itemId);
        }
        else if (this.spellId) {
            elem.href = ActionId.makeSpellUrl(this.spellId);
        }
    }
    setBackgroundAndHref(elem) {
        this.setBackground(elem);
        this.setWowheadHref(elem);
    }
    async fillAndSet(elem, setHref, setBackground) {
        const filled = await this.fill();
        if (setHref) {
            filled.setWowheadHref(elem);
        }
        if (setBackground) {
            filled.setBackground(elem);
        }
        return filled;
    }
    // Returns an ActionId with the name and iconUrl fields filled.
    // playerIndex is the optional index of the player to whom this ID corresponds.
    async fill(playerIndex) {
        if (this.name || this.iconUrl) {
            return this;
        }
        if (this.otherId) {
            return this;
        }
        const tooltipData = await ActionId.getTooltipData(this);
        const baseName = tooltipData['name'];
        let name = baseName;
        switch (baseName) {
            case 'Arcane Blast':
                if (this.tag == 1) {
                    name += ' (No Stacks)';
                }
                else if (this.tag == 2) {
                    name += ` (1 Stack)`;
                }
                else if (this.tag > 2) {
                    name += ` (${this.tag - 1} Stacks)`;
                }
                break;
            case 'Fireball':
            case 'Flamestrike':
            case 'Pyroblast':
                if (this.tag)
                    name += ' (DoT)';
                break;
            case 'Mind Flay':
                if (this.tag == 1) {
                    name += ' (1 Tick)';
                }
                else if (this.tag == 2) {
                    name += ' (2 Tick)';
                }
                else if (this.tag == 3) {
                    name += ' (3 Tick)';
                }
                break;
            case 'Envenom':
            case 'Eviscerate':
            case 'Expose Armor':
            case 'Rupture':
            case 'Slice and Dice':
                if (this.tag)
                    name += ` (${this.tag} CP)`;
                break;
            case 'Chain Lightning':
            case 'Lightning Bolt':
                if (this.tag)
                    name += ' (LO)';
                break;
            case 'Holy Vengeance':
                if (this.tag == 1) {
                    name += ' (Swing Roll)';
                }
                else if (this.tag == 2) {
                    name += ' (DoT)';
                }
                break;
            case 'Holy Shield':
                if (this.tag == 1) {
                    name += ' (Proc)';
                }
                break;
            // For targetted buffs, tag is the source player's raid index or -1 if none.
            case 'Bloodlust':
            case 'Ferocious Inspiration':
            case 'Innervate':
            case 'Mana Tide Totem':
            case 'Power Infusion':
                if (this.tag != NO_TARGET) {
                    if (this.tag === playerIndex) {
                        name += ` (self)`;
                    }
                    else {
                        name += ` (from #${this.tag + 1})`;
                    }
                }
                break;
            case 'Darkmoon Card: Crusade':
                if (this.tag == 1) {
                    name += ' (Melee)';
                }
                else if (this.tag == 2) {
                    name += ' (Spell)';
                }
                break;
            case 'Scourge Strike':
                if (this.tag == 1) {
                    name += ' (Physical)';
                }
                else if (this.tag == 2) {
                    name += ' (Shadow)';
                }
                break;
            case 'Frost Strike':
            case 'Plague Strike':
            case 'Blood Strike':
            case 'Obliterate':
            case 'Blood-Caked Strike':
            case 'Lightning Speed':
            case 'Windfury Weapon':
                if (this.tag == 1) {
                    name += ' (Main Hand)';
                }
                else if (this.tag == 2) {
                    name += ' (Off Hand)';
                }
                break;
            case 'Battle Shout':
                if (this.tag == 1) {
                    name += ' (Snapshot)';
                }
                break;
            case 'Seed of Corruption':
                if (this.tag == 0) {
                    name += ' (DoT)';
                }
                else if (this.tag == 1) {
                    name += ' (Explosion)';
                }
                break;
            case 'Thunderfury':
                if (this.tag == 1) {
                    name += ' (ST)';
                }
                else if (this.tag == 2) {
                    name += ' (MT)';
                }
                break;
            default:
                if (this.tag) {
                    name += ' (??)';
                }
                break;
        }
        const idString = this.toProtoString();
        const iconOverrideId = idOverrides[idString] || null;
        let iconUrl = ActionId.makeIconUrl(tooltipData['icon']);
        if (iconOverrideId) {
            const overrideTooltipData = await ActionId.getTooltipData(iconOverrideId);
            iconUrl = ActionId.makeIconUrl(overrideTooltipData['icon']);
        }
        return new ActionId(this.itemId, this.spellId, this.otherId, this.tag, baseName, name, iconUrl);
    }
    toString() {
        return this.toStringIgnoringTag() + (this.tag ? ('-' + this.tag) : '');
    }
    toStringIgnoringTag() {
        if (this.itemId) {
            return 'item-' + this.itemId;
        }
        else if (this.spellId) {
            return 'spell-' + this.spellId;
        }
        else if (this.otherId) {
            return 'other-' + this.otherId;
        }
        else {
            throw new Error('Empty action id!');
        }
    }
    toProto() {
        const protoId = ActionIdProto.create({
            tag: this.tag,
        });
        if (this.itemId) {
            protoId.rawId = {
                oneofKind: 'itemId',
                itemId: this.itemId,
            };
        }
        else if (this.spellId) {
            protoId.rawId = {
                oneofKind: 'spellId',
                spellId: this.spellId,
            };
        }
        else if (this.otherId) {
            protoId.rawId = {
                oneofKind: 'otherId',
                otherId: this.otherId,
            };
        }
        return protoId;
    }
    toProtoString() {
        return ActionIdProto.toJsonString(this.toProto());
    }
    withoutTag() {
        return new ActionId(this.itemId, this.spellId, this.otherId, 0, this.baseName, this.baseName, this.iconUrl);
    }
    static fromEmpty() {
        return new ActionId(0, 0, OtherAction.OtherActionNone, 0, '', '', '');
    }
    static fromItemId(itemId, tag) {
        return new ActionId(itemId, 0, OtherAction.OtherActionNone, tag || 0, '', '', '');
    }
    static fromSpellId(spellId, tag) {
        return new ActionId(0, spellId, OtherAction.OtherActionNone, tag || 0, '', '', '');
    }
    static fromOtherId(otherId, tag) {
        return new ActionId(0, 0, otherId, tag || 0, '', '', '');
    }
    static fromPetName(petName) {
        return petNameToActionId[petName] || new ActionId(0, 0, OtherAction.OtherActionPet, 0, petName, petName, petNameToIcon[petName] || '');
    }
    static fromItem(item) {
        return ActionId.fromItemId(getWowheadItemId(item));
    }
    static fromProto(protoId) {
        if (protoId.rawId.oneofKind == 'spellId') {
            return ActionId.fromSpellId(protoId.rawId.spellId, protoId.tag);
        }
        else if (protoId.rawId.oneofKind == 'itemId') {
            return ActionId.fromItemId(protoId.rawId.itemId, protoId.tag);
        }
        else if (protoId.rawId.oneofKind == 'otherId') {
            return ActionId.fromOtherId(protoId.rawId.otherId, protoId.tag);
        }
        else {
            return ActionId.fromEmpty();
        }
    }
    static fromLogString(str) {
        const match = str.match(/{((SpellID)|(ItemID)|(OtherID)): (\d+)(, Tag: (-?\d+))?}/);
        if (match) {
            const idType = match[1];
            const id = parseInt(match[5]);
            return new ActionId(idType == 'ItemID' ? id : 0, idType == 'SpellID' ? id : 0, idType == 'OtherID' ? id : 0, match[7] ? parseInt(match[7]) : 0, '', '', '');
        }
        else {
            console.warn('Failed to parse action id from log: ' + str);
            return ActionId.fromEmpty();
        }
    }
    static makeIconUrl(iconLabel) {
        if (USE_WOTLK_DB) {
            return `https://wotlkdb.com/static/images/wow/icons/large/${iconLabel}.jpg`;
        }
        else {
            return `https://wow.zamimg.com/images/wow/icons/large/${iconLabel}.jpg`;
        }
    }
    static async getDb(url) {
        if (!ActionId.dbCache.has(url)) {
            ActionId.dbCache.set(url, fetch(url)
                .then(response => response.json())
                .then(responseJson => {
                const db = {};
                responseJson.forEach(item => {
                    db[item.ID] = item;
                });
                return db;
            }));
        }
        return ActionId.dbCache.get(url);
    }
    static async getDbTooltipDataHelper(id, dbUrl) {
        const db = await ActionId.getDb(dbUrl);
        return db[id] ? {
            name: db[id].Name,
            icon: db[id].Icon,
        } : {
            name: '',
            icon: '',
        };
    }
    static async getWowheadTooltipDataHelper(id, tooltipPostfix, cache) {
        if (!cache.has(id)) {
            const url = `https://wowhead.com/wotlk/tooltip/${tooltipPostfix}/${id}`;
            try {
                const response = await fetch(url);
                cache.set(id, response.json());
            }
            catch (e) {
                console.error('Error while fetching url: ' + url + '\n\n' + e);
                cache.set(id, Promise.resolve({
                    name: '',
                    icon: '',
                    tooltip: '',
                }));
            }
        }
        return cache.get(id);
    }
    static async getWotlkdbTooltipDataHelper(id, tooltipPostfix, cache) {
        if (!cache.has(id)) {
            const url = `https://wotlkdb.com/?${tooltipPostfix}=${id}&power`;
            try {
                const response = await fetch(url);
                const data = await response.text();
                const nameMatch = data.match(/name_enus: '(.*?)'/g);
                const iconMatch = data.match(/icon: '(.*?)'/g);
                const tooltipMatch = data.match(/tooltip_enus: '(.*?)'/g);
                cache.set(id, Promise.resolve({
                    name: nameMatch ? nameMatch[1] : '',
                    icon: iconMatch ? iconMatch[1] : '',
                    tooltip: tooltipMatch ? tooltipMatch[1] : '',
                }));
            }
            catch (e) {
                console.error('Error while fetching url: ' + url + '\n\n' + e);
                cache.set(id, Promise.resolve({
                    name: '',
                    icon: '',
                    tooltip: '',
                }));
            }
        }
        return cache.get(id);
    }
    static async getItemTooltipData(id) {
        return await ActionId.getDbTooltipDataHelper(id, '/wotlk/assets/item_data/all_items_db.json');
        //if (USE_WOTLK_DB) {
        //	return await ActionId.getWotlkdbTooltipDataHelper(id, 'item', itemToTooltipDataCache);
        //} else {
        //	return await ActionId.getWowheadTooltipDataHelper(id, 'item', itemToTooltipDataCache);
        //}
    }
    static async getSpellTooltipData(id) {
        return await ActionId.getDbTooltipDataHelper(id, '/wotlk/assets/spell_data/all_spells_db.json');
        //if (USE_WOTLK_DB) {
        //	return await ActionId.getWotlkdbTooltipDataHelper(id, 'spell', spellToTooltipDataCache);
        //} else {
        //	return await ActionId.getWowheadTooltipDataHelper(id, 'spell', spellToTooltipDataCache);
        //}
    }
    static async getTooltipData(actionId) {
        if (actionId.itemId) {
            return await ActionId.getItemTooltipData(actionId.itemId);
        }
        else {
            return await ActionId.getSpellTooltipData(actionId.spellId);
        }
    }
}
ActionId.dbCache = new Map();
const itemToTooltipDataCache = new Map();
const spellToTooltipDataCache = new Map();
// Some items/spells have weird icons, so use this to show a different icon instead.
const idOverrides = {};
idOverrides[ActionId.fromSpellId(37212).toProtoString()] = ActionId.fromItemId(29035); // Improved Wrath of Air Totem
idOverrides[ActionId.fromSpellId(37223).toProtoString()] = ActionId.fromItemId(29040); // Improved Strength of Earth Totem
idOverrides[ActionId.fromSpellId(37447).toProtoString()] = ActionId.fromItemId(30720); // Serpent-Coil Braid
idOverrides[ActionId.fromSpellId(37443).toProtoString()] = ActionId.fromItemId(30196); // Robes of Tirisfal (4pc bonus)
export const defaultTargetIcon = 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_metamorphosis.jpg';
const petNameToActionId = {
    'Gnomish Flame Turret': ActionId.fromItemId(23841),
    'Water Elemental': ActionId.fromSpellId(31687),
    'Spirit Wolf 1': ActionId.fromSpellId(51533),
    'Spirit Wolf 2': ActionId.fromSpellId(51533)
};
// https://wowhead.com/wotlk/hunter-pets
const petNameToIcon = {
    'Bat': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_bat.jpg',
    'Bear': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_bear.jpg',
    'Bird of Prey': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_owl.jpg',
    'Boar': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_boar.jpg',
    'Carrion Bird': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_vulture.jpg',
    'Cat': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_cat.jpg',
    'Chimaera': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_chimera.jpg',
    'Core Hound': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_corehound.jpg',
    'Crab': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_crab.jpg',
    'Crocolisk': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_crocolisk.jpg',
    'Devilsaur': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_devilsaur.jpg',
    'Dragonhawk': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_dragonhawk.jpg',
    'Felguard': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_summonfelguard.jpg',
    'Felhunter': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_summonfelhunter.jpg',
    'Gargoyle': 'https://wow.zamimg.com/images/wow/icons/large/ability_hunter_pet_bat.jpg',
    'Ghoul': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_raisedead.jpg',
    'Army of the Dead': 'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_armyofthedead.jpg',
    'Gorilla': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_gorilla.jpg',
    'Hyena': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_hyena.jpg',
    'Imp': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_summonimp.jpg',
    'Moth': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_moth.jpg',
    'Nether Ray': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_netherray.jpg',
    'Owl': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_owl.jpg',
    'Raptor': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_raptor.jpg',
    'Ravager': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_ravager.jpg',
    'Rhino': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_rhino.jpg',
    'Scorpid': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_scorpid.jpg',
    'Serpent': 'https://wow.zamimg.com/images/wow/icons/medium/spell_nature_guardianward.jpg',
    'Silithid': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_silithid.jpg',
    'Spider': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_spider.jpg',
    'Spirit Beast': 'https://wow.zamimg.com/images/wow/icons/medium/ability_druid_primalprecision.jpg',
    'Spore Bat': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_sporebat.jpg',
    'Succubus': 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_summonsuccubus.jpg',
    'Tallstrider': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_tallstrider.jpg',
    'Turtle': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_turtle.jpg',
    'Warp Stalker': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_warpstalker.jpg',
    'Wasp': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_wasp.jpg',
    'Wind Serpent': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_windserpent.jpg',
    'Wolf': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_wolf.jpg',
    'Worm': 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_pet_worm.jpg',
};
export const resourceTypeToIcon = {
    [ResourceType.ResourceTypeNone]: '',
    [ResourceType.ResourceTypeHealth]: 'https://wow.zamimg.com/images/wow/icons/medium/inv_elemental_mote_life01.jpg',
    [ResourceType.ResourceTypeMana]: 'https://wow.zamimg.com/images/wow/icons/medium/inv_elemental_mote_mana.jpg',
    [ResourceType.ResourceTypeEnergy]: 'https://wow.zamimg.com/images/wow/icons/medium/spell_shadow_shadowworddominate.jpg',
    [ResourceType.ResourceTypeRage]: 'https://wow.zamimg.com/images/wow/icons/medium/spell_misc_emotionangry.jpg',
    [ResourceType.ResourceTypeComboPoints]: 'https://wow.zamimg.com/images/wow/icons/medium/inv_mace_2h_pvp410_c_01.jpg',
    [ResourceType.ResourceTypeFocus]: 'https://wow.zamimg.com/images/wow/icons/medium/ability_hunter_focusfire.jpg',
    [ResourceType.ResourceTypeRunicPower]: 'https://wow.zamimg.com/images/wow/icons/medium/inv_sword_62.jpg',
    [ResourceType.ResourceTypeBloodRune]: '/wotlk/assets/img/blood_rune.png',
    [ResourceType.ResourceTypeFrostRune]: '/wotlk/assets/img/frost_rune.png',
    [ResourceType.ResourceTypeUnholyRune]: '/wotlk/assets/img/unholy_rune.png',
    [ResourceType.ResourceTypeDeathRune]: '/wotlk/assets/img/death_rune.png',
};
