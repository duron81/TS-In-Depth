/* eslint-disable no-redeclare */

import { Book, TOptions } from './interfaces';
import { Category } from './enums';
import { BookProperties, BookOrUndefined } from './types';
import RefBook from './classes/encyclopedia';



/* type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}; */


export function getAllBooks(): readonly Book[] {
    const books = <const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available:
        false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author:
        'Andrea Chiarelli', available: true }
    ];
    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(books.length);
    console.log(books.find(item => item.available === true).title);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles = books
        .filter(item => item.category === category)
        .map(item => item.title);
    return titles;
}

export function logBookTitles(titles: string[]): void {
    console.log(titles);
}

export function getBookAuthorByIndex(index: number): [title:string, author:string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    // const title = getAllBooks()[index].title;
    // const name = getAllBooks()[index].author;
    return [ title, author ];
}

export function calcTotalPages(): void {
    const books2 = <const> [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    console.log(books2.reduce((accum: bigint, element) => {
        return accum + BigInt(element.books) * BigInt(element.avgPagesPerBook);
    }, 0n));
}

export function createCustomerID (name: string, id: number): string {
    return `${name}/${id}`;
}

// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${name}/${id}`;
// console.log(idGenerator('Mark', 10));


export function createCustomer (name: string, age?: number, city?: string): void {
    console.log('name is' + name);
    if (age) {
        console.log(`age is ${age}`);
    }
    if (city) {
        console.log(`city is ${city}`);
    }
}

export function getBookByID(id: Book['id']): BookOrUndefined {
    return getAllBooks().find(item => item.id === id);
}

export function checkoutBooks(customer: string, ...booksIDs: number[]): string[] {
    console.log(`The customer is ${customer}`);
    const titles =  booksIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);

    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();
    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        return books.filter(book => book.id === args[0]).filter(book => book.available === args[1]).map(book => book.title);
    }
}

export function assertStringValue(param: any): asserts param is string {
    if (typeof param !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
    // return title.toUpperCase();
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];

    return typeof value === 'function' ? value.name : value;
};

export function setDefaultConfig(options: TOptions) {
    options.duration ??= 100;
    options.speed ??= 60;
    return options;
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
};