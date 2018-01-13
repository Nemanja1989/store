import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';

@Component({
    selector: 'app-products-component',
    templateUrl: './products-component.component.html',
    styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

    private products;

    constructor(private _productsService: ProductsService) {
        this.products = this._productsService.getProducts();
    }

    ngOnInit() {
    }

}
