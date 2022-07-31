import { Component } from '/wotlk/core/components/component.js';
import { Input } from '/wotlk/core/components/input.js';
import { ActionId } from '/wotlk/core/proto_utils/action_id.js';
import { TypedEvent } from '/wotlk/core/typed_event.js';
import { isRightClick } from '/wotlk/core/utils.js';
import { sum } from '/wotlk/core/utils.js';
export class TalentsPicker extends Input {
    constructor(parent, modObject, config) {
        super(parent, 'talents-picker-root', modObject, config);
        this.pointsPerRow = config.pointsPerRow;
        this.maxPoints = config.maxPoints;
        this.numRows = Math.max(...config.trees.map(treeConfig => treeConfig.talents.map(talentConfig => talentConfig.location.rowIdx).flat()).flat()) + 1;
        this.trees = config.trees.map(treeConfig => new TalentTreePicker(this.rootElem, treeConfig, this));
        this.trees.forEach(tree => tree.talents.forEach(talent => talent.setPoints(0, false)));
        this.init();
    }
    getInputElem() {
        return this.rootElem;
    }
    getInputValue() {
        return this.trees.map(tree => tree.getTalentsString()).join('-').replace(/-+$/g, '');
    }
    setInputValue(newValue) {
        const parts = newValue.split('-');
        this.trees.forEach((tree, idx) => tree.setTalentsString(parts[idx] || ''));
        this.updateTrees();
    }
    updateTrees() {
        if (this.isFull()) {
            this.rootElem.classList.add('talents-full');
        }
        else {
            this.rootElem.classList.remove('talents-full');
        }
        this.trees.forEach(tree => tree.update());
    }
    get numPoints() {
        return sum(this.trees.map(tree => tree.numPoints));
    }
    isFull() {
        return this.numPoints >= this.maxPoints;
    }
    setMaxPoints(newMaxPoints) {
        if (newMaxPoints != this.maxPoints) {
            this.maxPoints = newMaxPoints;
            this.updateTrees();
        }
    }
}
class TalentTreePicker extends Component {
    constructor(parent, config, picker) {
        super(parent, 'talent-tree-picker-root');
        this.config = config;
        this.numPoints = 0;
        this.picker = picker;
        this.rootElem.innerHTML = `
    <div class="talent-tree-header">
      <span class="talent-tree-title"></span>
      <span class="talent-tree-reset fa fa-times"></span>
    </div>
    <div class="talent-tree-main">
    </div>
    `;
        this.title = this.rootElem.getElementsByClassName('talent-tree-title')[0];
        const main = this.rootElem.getElementsByClassName('talent-tree-main')[0];
        main.style.backgroundImage = `url('${config.backgroundUrl}')`;
        main.style.gridTemplateRows = `repeat(${this.picker.numRows}, 1fr)`;
        const iconSize = Math.min(70 / this.picker.numRows, 10);
        main.style.height = `${iconSize * this.picker.numRows}vh`;
        main.style.width = `${iconSize * 4}vh`;
        this.talents = config.talents.map(talent => new TalentPicker(main, talent, this));
        this.talents.forEach(talent => {
            if (talent.config.prereqLocation) {
                this.getTalent(talent.config.prereqLocation).config.prereqOfLocation = talent.config.location;
            }
        });
        const reset = this.rootElem.getElementsByClassName('talent-tree-reset')[0];
        reset.addEventListener('click', event => {
            this.talents.forEach(talent => talent.setPoints(0, false));
            this.picker.inputChanged(TypedEvent.nextEventID());
        });
    }
    update() {
        this.title.textContent = this.config.name + ' (' + this.numPoints + ')';
        this.talents.forEach(talent => talent.update());
    }
    getTalent(location) {
        const talent = this.talents.find(talent => talent.getRow() == location.rowIdx && talent.getCol() == location.colIdx);
        if (!talent)
            throw new Error('No talent found with location: ' + location);
        return talent;
    }
    getTalentsString() {
        return this.talents.map(talent => String(talent.getPoints())).join('').replace(/0+$/g, '');
    }
    setTalentsString(str) {
        this.talents.forEach((talent, idx) => talent.setPoints(Number(str.charAt(idx)), false));
    }
}
class TalentPicker extends Component {
    constructor(parent, config, tree) {
        super(parent, 'talent-picker-root', document.createElement('a'));
        this.config = config;
        this.tree = tree;
        this.rootElem.style.gridRow = String(this.config.location.rowIdx + 1);
        this.rootElem.style.gridColumn = String(this.config.location.colIdx + 1);
        this.rootElem.dataset.maxPoints = String(this.config.maxPoints);
        this.rootElem.dataset.wowhead = 'noimage';
        this.pointsDisplay = document.createElement('span');
        this.pointsDisplay.classList.add('talent-picker-points');
        this.rootElem.appendChild(this.pointsDisplay);
        this.rootElem.addEventListener('click', event => {
            event.preventDefault();
        });
        this.rootElem.addEventListener('contextmenu', event => {
            event.preventDefault();
        });
        this.rootElem.addEventListener('touchstart', event => {
            event.preventDefault();
            this.longTouchTimer = setTimeout(() => {
                this.setPoints(0, true);
                this.tree.picker.inputChanged(TypedEvent.nextEventID());
                this.longTouchTimer = undefined;
            }, 750);
        });
        this.rootElem.addEventListener('touchend', event => {
            event.preventDefault();
            if (this.longTouchTimer != undefined) {
                clearTimeout(this.longTouchTimer);
                this.longTouchTimer = undefined;
            }
            else {
                return;
            }
            var newPoints = this.getPoints() + 1;
            if (this.config.maxPoints < newPoints) {
                newPoints = 0;
            }
            this.setPoints(newPoints, true);
            this.tree.picker.inputChanged(TypedEvent.nextEventID());
        });
        this.rootElem.addEventListener('mousedown', event => {
            const rightClick = isRightClick(event);
            if (rightClick) {
                this.setPoints(this.getPoints() - 1, true);
            }
            else {
                this.setPoints(this.getPoints() + 1, true);
            }
            this.tree.picker.inputChanged(TypedEvent.nextEventID());
        });
    }
    getRow() {
        return this.config.location.rowIdx;
    }
    getCol() {
        return this.config.location.colIdx;
    }
    getPoints() {
        const pts = Number(this.rootElem.dataset.points);
        return isNaN(pts) ? 0 : pts;
    }
    isFull() {
        return this.getPoints() >= this.config.maxPoints;
    }
    // Returns whether setting the points to newPoints would be a valid talent tree.
    canSetPoints(newPoints) {
        const oldPoints = this.getPoints();
        if (newPoints > oldPoints) {
            const additionalPoints = newPoints - oldPoints;
            if (this.tree.picker.numPoints + additionalPoints > this.tree.picker.maxPoints) {
                return false;
            }
            if (this.tree.numPoints < this.getRow() * this.tree.picker.pointsPerRow) {
                return false;
            }
            if (this.config.prereqLocation) {
                if (!this.tree.getTalent(this.config.prereqLocation).isFull())
                    return false;
            }
        }
        else {
            const removedPoints = oldPoints - newPoints;
            // Figure out whether any lower talents would have the row requirement
            // broken by subtracting points.
            const pointTotalsByRow = [...Array(this.tree.picker.numRows).keys()]
                .map(rowIdx => this.tree.talents.filter(talent => talent.getRow() == rowIdx))
                .map(talentsInRow => sum(talentsInRow.map(talent => talent.getPoints())));
            pointTotalsByRow[this.getRow()] -= removedPoints;
            const cumulativeTotalsByRow = pointTotalsByRow.map((_, rowIdx) => sum(pointTotalsByRow.slice(0, rowIdx + 1)));
            if (!this.tree.talents.every(talent => talent.getPoints() == 0
                || talent.getRow() == 0
                || cumulativeTotalsByRow[talent.getRow() - 1] >= talent.getRow() * this.tree.picker.pointsPerRow)) {
                return false;
            }
            if (this.config.prereqOfLocation) {
                if (this.tree.getTalent(this.config.prereqOfLocation).getPoints() > 0)
                    return false;
            }
        }
        return true;
    }
    setPoints(newPoints, checkValidity) {
        const oldPoints = this.getPoints();
        newPoints = Math.max(0, newPoints);
        newPoints = Math.min(this.config.maxPoints, newPoints);
        if (checkValidity && !this.canSetPoints(newPoints))
            return;
        this.tree.numPoints += newPoints - oldPoints;
        this.rootElem.dataset.points = String(newPoints);
        this.pointsDisplay.textContent = newPoints + '/' + this.config.maxPoints;
        if (this.isFull()) {
            this.rootElem.classList.add('talent-full');
        }
        else {
            this.rootElem.classList.remove('talent-full');
        }
        const spellId = this.getSpellIdForPoints(newPoints);
        ActionId.fromSpellId(spellId).fill().then(actionId => {
            actionId.setWowheadHref(this.rootElem);
            this.rootElem.style.backgroundImage = `url('${actionId.iconUrl}')`;
        });
    }
    getSpellIdForPoints(numPoints) {
        // 0-indexed rank of talent
        const rank = Math.max(0, numPoints - 1);
        if (this.config.spellIds[rank]) {
            return this.config.spellIds[rank];
        }
        else {
            throw new Error('No rank ' + numPoints + ' for talent ' + this.config.fieldName);
        }
    }
    update() {
        if (this.canSetPoints(this.getPoints() + 1)) {
            this.rootElem.classList.add('talent-picker-can-add');
        }
        else {
            this.rootElem.classList.remove('talent-picker-can-add');
        }
    }
}
export function newTalentsConfig(talents) {
    talents.forEach(tree => {
        tree.talents.forEach((talent, i) => {
            // Validate that talents are given in the correct order (left-to-right top-to-bottom).
            if (i != 0) {
                const prevTalent = tree.talents[i - 1];
                if (talent.location.rowIdx < prevTalent.location.rowIdx || (talent.location.rowIdx == prevTalent.location.rowIdx && talent.location.colIdx <= prevTalent.location.colIdx)) {
                    throw new Error('Out-of-order talent: ' + talent.fieldName);
                }
            }
            // Infer omitted spell IDs.
            if (talent.spellIds.length < talent.maxPoints) {
                let curSpellId = talent.spellIds[talent.spellIds.length - 1];
                for (let pointIdx = talent.spellIds.length; pointIdx < talent.maxPoints; pointIdx++) {
                    curSpellId++;
                    talent.spellIds.push(curSpellId);
                }
            }
        });
    });
    return talents;
}
