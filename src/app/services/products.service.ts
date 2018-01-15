import {Injectable} from '@angular/core';

@Injectable()
export class ProductsService {

    private products;

    constructor() {
        this.products = [
            {
                id: 1,
                name: 'Computer',
                quantity: 8,
            },
            {
                id: 2,
                name: 'Telephone',
                quantity: 27,
            },
            {
                id: 3,
                name: 'Car',
                quantity: 3,
            },
            {
                id: 4,
                name: 'Game',
                quantity: 123,
            }
        ];
    }

    public getProducts() {
        return this.products;
    }

    public addNewProductOnLager(product) {
        const index = this.products.indexOf(product);
        const lagerCount = this.products[index]['quantity'];

        this.products[index]['quantity']++;
    }

    public removeProductFromLager(product) {
        const index = this.products.indexOf(product);
        const lagerCount = this.products[index]['quantity'];

        // can't go to minus
        if (lagerCount === 0) {
            return false;
        }

        this.products[index]['quantity']--;
    }

}
