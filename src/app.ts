import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { createCustomer, getBookTitlesByCategory, printRefBook, getAllBooks, purge, getProperty, getObjectProperty } from './functions';
import { Book, Librarian, Logger, Magazine, ShelfItem } from './interfaces';
import { Library } from './classes/library';
import { Category } from './enums';

// showHello('greeting', 'TypeScript');

// function showHello(divName: string, name: string) {
//     const elt = document.getElementById(divName);
//     elt.innerText = `Hello from ${name}`;
// }

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

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     markDamaged: (reason: string) => {
//         console.log(`damaged ${reason}`);
//     }
// };

// printBook(myBook);

// const logDamage: Logger = (reason: string) => {
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

// console.log(getProperty(myBook, 'available'));
// console.log(getProperty(myBook, 'markDamaged'));

// const ref = new ReferenceItem('some title', 2022, 1);
// console.log(ref);
// console.log(ref.getID());

// ref.printItem();
// ref.publisher = 'dfdf';
// console.log(ref.publisher);

// const refBook = new RefBook(888, 2 ,'newnewnew', 778);
// printRefBook(refBook);

// const universityLib = new UL.UniversityLibrarian();
// universityLib.name = 'sdsd';
// printRefBook(universityLib);

// refBook.printItem();
// refBook.printCitation();

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'John';
// console.log(favoriteLibrarian.assistCustomer('Mike','TS'));

// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     email: 'anna@example.com',
//     id: 7,
//     title: 'some title',
//     category: Category.Angular
// };

// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         })
//         .catch(e => console.log(e));
// }

// if (flag) {
//     const o = await import('./classes');
//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);
//     console.log(reader);
// }

// Task 06.06
// const library: Library = {
//     Id: 34,
//     name: 'df',
//     address: 'asdd'
// };

// let library2 = new Library();

// console.log(library, library2);

// Task 07.01

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software},
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const inventory2: number[] = [2,5,5,6,9,8];

// const result = purge(inventory);

// console.log(result);
// console.log(purge(inventory2));

// Task 07.02, 07.03

// const bookShelf = new Shelf<Book>();
// for (const iterator of inventory) {
//     bookShelf.add(iterator);
// }

// const firstBook = bookShelf.getFirst();
// console.log(firstBook.title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

// const magazineShelf = new Shelf<Magazine>();

// magazines.forEach(element => magazineShelf.add(element));

// console.log(magazineShelf.getFirst());

// magazineShelf.printTitiles();
// console.log(magazineShelf.find('Five Points'));
console.log(getObjectProperty(magazines[0], 'publisher'));
