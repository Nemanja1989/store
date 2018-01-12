import {Products} from './products';

export class Buyers {
    // no need for this but lets stay for now
    id;
    firstName;
    lastName;
    email;
    products;

    constructor(id: number, firstName: string, lastName: string, email: string, products?: Products  ) {
        // no need for this but lets stay for now
        this.id        = id;
        this.firstName = firstName;
        this.lastName  = lastName;
        this.email     = email;
        this.products  = products;
    }
}
