import { Component } from './component.js';
import { IconPicker } from './icon_picker.js';
// Icon-based UI for a dropdown with multiple icon pickers.
// ModObject is the object being modified (Sim, Player, or Target).
export class MultiIconPicker extends Component {
    constructor(parent, modObj, config, simUI) {
        super(parent, 'multi-icon-picker-root');
        this.config = config;
        this.currentValue = null;
        this.rootElem.innerHTML = `
			<span class="multi-icon-picker-label"></span>
			<div class="dropdown-root multi-icon-picker-dropdown-root">
				<a class="dropdown-button multi-icon-picker-button"></a>
				<div class="dropdown-panel multi-icon-picker-dropdown"></div>
			</div>
    `;
        this.dropdownRootElem = this.rootElem.getElementsByClassName('multi-icon-picker-dropdown-root')[0];
        const labelElem = this.rootElem.getElementsByClassName('multi-icon-picker-label')[0];
        if (config.label) {
            labelElem.textContent = config.label;
        }
        else {
            labelElem.remove();
        }
        this.buttonElem = this.rootElem.getElementsByClassName('multi-icon-picker-button')[0];
        const dropdownElem = this.rootElem.getElementsByClassName('multi-icon-picker-dropdown')[0];
        this.buttonElem.addEventListener('click', event => {
            event.preventDefault();
        });
        this.buttonElem.addEventListener('touchstart', event => {
            if (dropdownElem.style.display == "block") {
                dropdownElem.style.display = "none";
            }
            else {
                dropdownElem.style.display = "block";
            }
            event.preventDefault();
        });
        this.buttonElem.addEventListener('touchend', event => {
            event.preventDefault();
        });
        dropdownElem.style.gridTemplateColumns = `repeat(${this.config.numColumns}, 1fr)`;
        this.pickers = config.inputs.map((pickerConfig, i) => {
            const optionContainer = document.createElement('div');
            optionContainer.classList.add('dropdown-option-container');
            optionContainer.classList.add('multi-icon-dropdown-container');
            dropdownElem.appendChild(optionContainer);
            const option = document.createElement('a');
            option.classList.add('dropdown-option', 'multi-icon-picker-option');
            optionContainer.appendChild(option);
            return new IconPicker(option, modObj, pickerConfig);
        });
        simUI.sim.waitForInit().then(() => this.updateButtonImage());
        simUI.changeEmitter.on(() => this.updateButtonImage());
    }
    updateButtonImage() {
        this.currentValue = this.getMaxValue();
        if (this.currentValue) {
            this.dropdownRootElem.classList.add('active');
            this.currentValue.fillAndSet(this.buttonElem, false, true);
        }
        else {
            this.dropdownRootElem.classList.remove('active');
            this.buttonElem.style.backgroundImage = '';
            this.buttonElem.style.backgroundColor = this.config.emptyColor;
            this.buttonElem.removeAttribute("href");
        }
    }
    getMaxValue() {
        return this.pickers.map(picker => picker.getActionId()).filter(id => id != null)[0] || null;
    }
}
