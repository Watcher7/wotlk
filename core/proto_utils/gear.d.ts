import { Enchant } from '/wotlk/core/proto/common.js';
import { EquipmentSpec } from '/wotlk/core/proto/common.js';
import { Gem } from '/wotlk/core/proto/common.js';
import { GemColor } from '/wotlk/core/proto/common.js';
import { Item } from '/wotlk/core/proto/common.js';
import { ItemSlot } from '/wotlk/core/proto/common.js';
import { Profession } from '/wotlk/core/proto/common.js';
import { EquippedItem } from './equipped_item.js';
declare type InternalGear = Record<ItemSlot, EquippedItem | null>;
/**
 * Represents a full gear set, including items/enchants/gems for every slot.
 *
 * This is an immutable type.
 */
export declare class Gear {
    private readonly gear;
    constructor(gear: Partial<InternalGear>);
    equals(other: Gear): boolean;
    /**
     * Returns a new Gear set with the item equipped.
     *
     * Checks for validity and removes/exchanges items/gems as needed.
     */
    withEquippedItem(newSlot: ItemSlot, newItem: EquippedItem | null): Gear;
    getEquippedItem(slot: ItemSlot): EquippedItem | null;
    getTrinkets(): Array<EquippedItem | null>;
    hasTrinket(itemId: number): boolean;
    asMap(): InternalGear;
    asArray(): Array<EquippedItem | null>;
    asSpec(): EquipmentSpec;
    getAllGems(): Array<Gem>;
    getGemsOfColor(color: GemColor): Array<Gem>;
    getJCGems(): Array<Gem>;
    getMetaGem(): Gem | null;
    hasActiveMetaGem(): boolean;
    hasInactiveMetaGem(): boolean;
    withoutMetaGem(): Gear;
    withoutBlacksmithSockets(): Gear;
    hasBluntMHWeapon(): boolean;
    hasSharpMHWeapon(): boolean;
    hasBluntOHWeapon(): boolean;
    hasSharpOHWeapon(): boolean;
    getFailedProfessionRequirements(professions: Array<Profession>): Array<Item | Gem | Enchant>;
}
export {};
