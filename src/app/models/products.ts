export class Products {
    id;
    productName;
    quantity;

    constructor(id: number, productName: string, quantity: number ) {
        this.id        = id;
        this.productName = productName;
        this.quantity  = quantity;
    }


}
