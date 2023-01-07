/* eslint-disable no-underscore-dangle */
import { positiveInteger } from './decorators';
import { ReferenceItem } from './reference-item';


export default class Encyclopedia extends ReferenceItem {
    [x: string]: any;
    private _copies: number;

    @positiveInteger
    get copies(): number {
        return this._copies;
    }

    set copies(value: number) {
        this._copies = value;
    }

    constructor(
        public edition: number,
        id: number,
        title: string,
        year: number
    ) {
        super(title, year, id);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} + ${this.year}`);
    }

}
