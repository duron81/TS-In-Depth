/* eslint-disable no-underscore-dangle */
import * as Interfaces from './../interfaces';


abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor (newTitle: string, newYear: number) {
    //     this.title = newTitle;
    //     this.year = newYear;
    //     console.log('Creating a new ReferenceItem ...');
    // }

    private _publisher: string;
    #id: number;
    static department: string = 'Research Dep.';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    getID(): number {
        return this.#id;
    }

    constructor(
        public title: string,
        protected year: number,
        id: number
    ) {
        this.#id = id;
        console.log('Creating a new ReferenceItem ...');
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(Object.getPrototypeOf(this).constructor.department);
    }

    abstract printCitation(): void;
}

export { ReferenceItem };