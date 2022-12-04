/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

/* type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}; */

type BookProperties = keyof Book;




interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface DamageLogger {
    (reason: string): void;
}

enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular
}

function getAllBooks(): readonly Book[] {
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

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(books.length);
    console.log(books.find(item => item.available === true).title);
}

function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles = books
        .filter(item => item.category === category)
        .map(item => item.title);
    return titles;
}

function logBookTitles(titles: string[]): void {
    console.log(titles);
}

function getBookAuthorByIndex(index: number): [title:string, author:string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    // const title = getAllBooks()[index].title;
    // const name = getAllBooks()[index].author;
    return [ title, author ];
}

function calcTotalPages(): void {
    const books2 = <const> [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];
    console.log(books2.reduce((accum: bigint, element) => {
        return accum + BigInt(element.books) * BigInt(element.avgPagesPerBook);
    }, 0n));
}

function createCustomerID (name: string, id: number): string {
    return `${name}/${id}`;
}

// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${name}/${id}`;
// console.log(idGenerator('Mark', 10));


function createCustomer (name: string, age?: number, city?: string): void {
    console.log('name is' + name);
    if (age) {
        console.log(`age is ${age}`);
    }
    if (city) {
        console.log(`city is ${city}`);
    }
}

function getBookByID(id: Book['id']): Book | undefined {
    return getAllBooks().find(item => item.id === id);
}

function checkoutBooks(customer: string, ...booksIDs: number[]): string[] {
    console.log(`The customer is ${customer}`);
    const titles =  booksIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);

    return titles;
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
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

function assertStringValue(param: any): asserts param is string {
    if (typeof param !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
    // return title.toUpperCase();
}

function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

// createCustomer('sdsdds', 45, 'dfsfs');

// console.log(getBookTitlesByCategory());

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// console.log(logFirstAvailable());

// console.log(getBookByID(3));

// console.log(checkoutBooks('Andrey',1,2,3,4));

// console.log(getTitles(true));

// console.log(bookTitleTransform('hello'));

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3,
    pages: 200,
    markDamaged: (reason: string) => {
        console.log(`damaged ${reason}`);
    }
};

// printBook(myBook);

// const logDamage: DamageLogger = (reason: string) => {
//     console.log(reason);
// };
// logDamage('here');

// const favoriteAuthor: Author = {
//     numBooksPublished: 20,
//     name: 'John Smith',
//     email: 'example@net'
// };

// const favoriteLibrarian: Librarian = {
//     department: 'main',
//     name: 'John Smith',
//     email: 'example@net',
//     assistCustomer(custName, bookTitle) {
//         console.log(custName + bookTitle);
//     },
// };

// const offer: any = {
//     book: {
//         title: 'Essential Typescript',
//     },
// };

// console.log(offer.book?.getTitle?.());
// console.log(offer.book.authors?.[0]);

console.log(getProperty(myBook, 'available'));
// console.log(getProperty(myBook, 'isbn'));