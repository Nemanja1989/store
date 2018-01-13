import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

    transform(array: any[], productFilter?: any): any {

        productFilter = productFilter.toLowerCase();

        // not good solution because you can't delete after this
        return array.filter(function (item) {
            return item.name.toLowerCase().includes(productFilter);
        });

    }

}
