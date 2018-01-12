import {Injectable} from '@angular/core';

@Injectable()
export class BuyersServiceService {

    private buyers;

    constructor() {
        this.buyers = [
            {
                id: 1,
                firstName: 'Nemanja',
                lastName: 'Bojanic',
                email: 'nemanja@gmail.com',
                products: [
                    {name: 'Miker'},
                    {name: 'Saxo'}
                ]
            },
            {
                id: 2,
                firstName: 'Branko',
                lastName: 'Bisacki',
                email: 'branko@gmail.com',
                products: [
                    {name: 'Alfa'},
                    {name: 'Omen'}
                ]
            },
            {
                id: 3,
                firstName: 'Nemanja',
                lastName: 'Pantos',
                email: 'pantos@gmail.com',
                products: [
                    {name: 'Slusalice'},
                    {name: 'Hyundai'}
                ]
            }
        ];
    }

    public getBuyers() {
       return this.buyers;
    }


}