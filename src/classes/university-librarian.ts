import * as Interfaces from './../interfaces';
import { format, logger, logMethod, logParameter, sealed, writable } from './decorators';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
    [x: string]: any;
    @format()
    name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer (@logParameter custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }

    // @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }

}

export { UniversityLibrarian };