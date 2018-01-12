import {Component, OnInit} from '@angular/core';
import {BuyersServiceService} from '../../services/buyers-service.service';

@Component({
    selector: 'app-buyers-component',
    templateUrl: './buyers-component.component.html',
    styleUrls: ['./buyers-component.component.css']
})
export class BuyersComponentComponent implements OnInit {

    buyers;

    constructor(private _buyersService: BuyersServiceService) {
        this.buyers = this._buyersService.getBuyers();
    }


    removeBuyer(buyer) {
        const index = this.buyers.indexOf(buyer);
        this.buyers.splice(index, 1);
    }

    ngOnInit() {
    }

}
