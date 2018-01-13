import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductsFilterPipe} from '../../pipes/products-filter.pipe';

@Component({
    selector: 'app-products-component',
    templateUrl: './products-component.component.html',
    styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

    public products;
    productFilter = '';

    constructor(private _productsService: ProductsService) {
        this.products = this._productsService.getProducts();
    }

    ngOnInit() {
    }

}
