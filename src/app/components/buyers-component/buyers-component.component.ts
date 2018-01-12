import {Component, OnInit} from '@angular/core';
import {BuyersServiceService} from '../../services/buyers-service.service';
import {Buyers} from '../../models/buyers';
import {Products} from '../../models/products';


@Component({
    selector: 'app-buyers-component',
    templateUrl: './buyers-component.component.html',
    styleUrls: ['./buyers-component.component.css']
})
export class BuyersComponentComponent implements OnInit {

    buyers;

    // form part
    firstName: string;
    lastName: string;
    email: string;
    product: Products;

    constructor(private _buyersService: BuyersServiceService) {
        this.buyers = this._buyersService.getBuyers();
    }


    removeBuyer(buyer) {
        const index = this.buyers.indexOf(buyer);
        this.buyers.splice(index, 1);
    }

    addBuyer() {
        // get biggest ID
        let bigestId = 0;
        for ( let i = 0; i < this.buyers.length; i++) {
            if (this.buyers[i]['id'] > bigestId) {
                bigestId = this.buyers[i]['id'];
            }
        }
        const finalid = bigestId + 1;

        this._buyersService.addBuyer(finalid, this.firstName, this.lastName, this.email, this.product);

        // clear from
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }

    ngOnInit() {
    }

}
