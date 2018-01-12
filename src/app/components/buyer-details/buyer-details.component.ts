import {Component, OnInit} from '@angular/core';
import {BuyersServiceService} from '../../services/buyers-service.service';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-buyer-details',
    templateUrl: './buyer-details.component.html',
    styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent implements OnInit {

    buyer;

    constructor(private _buyersService: BuyersServiceService, private _route: ActivatedRoute) {
        const id = parseInt(this._route.snapshot.paramMap.get('id'));

        this.buyer = this._buyersService.getBuyer(id);
    }

    ngOnInit() {
    }

}
