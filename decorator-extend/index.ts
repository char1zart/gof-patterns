interface IProduct {
    getPrice(): number;
}

class Product implements IProduct {
    private readonly price: number;

    constructor(price: number) {
        this.price = price;
    }

    public getPrice(): number {
        return this.price;
    }
}

class Products implements IProduct {
    public products: IProduct[] = [];
    public price = 0;

    public addProduct(p: IProduct) {
        this.products.push(p);
    }

    public getPrice(): number {

        const size = this.products.length;
        for (let i = 0; i < size; i++) {
            this.price += this.products[i].getPrice();
        }
        return this.price;
    }
}

class ProductUkrainePercent {
    public price;

    constructor(p: number) {
        this.price = p;
    }

    public getPrice(): number {
        return this.price * 2;
    }
}

class Application {
    constructor() {

        const potato = new Product(10);

        const products = new Products();
        products.addProduct(potato);
        products.addProduct(potato);

        const price = products.getPrice();

        console.log(price);

        const ukrainePrice = new ProductUkrainePercent(price);

        console.log(ukrainePrice.getPrice());
    }
}

let clientApplication = (new Application());
clientApplication;
