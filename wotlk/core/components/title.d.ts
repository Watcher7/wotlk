import { Component } from '/wotlk/core/components/component.js';
import { Spec } from '/wotlk/core/proto/common.js';
export interface SimLinkOption {
    iconUrl: string;
    href: string;
    text: string;
    color: string;
}
export declare class Title extends Component {
    private readonly buttonElem;
    constructor(parent: HTMLElement, currentSpec: Spec | null);
    private makeOptionData;
    private makeOption;
    static makeOptionElem(data: SimLinkOption): HTMLElement;
}
