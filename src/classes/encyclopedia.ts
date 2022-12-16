import { ReferenceItem } from './reference-item';


export default class Encyclopedia extends ReferenceItem {
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
