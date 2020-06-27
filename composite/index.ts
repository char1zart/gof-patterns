interface IComponent {
    getMoney(): number;
}

interface IProduct extends IComponent {
    getMoney(): number;
}

interface IBox extends IComponent {
    children: IComponent [];
    add(leaf: IComponent);
    remove(leaf: IComponent);
}

class Product implements IProduct {
    private readonly money: number;

    constructor(money: number) {
        this.money = money;
    }

    public getMoney(): number {
        return this.money;
    }
}

class Box implements IBox {
    public allMoney: number;
    public children: IComponent[];

    constructor(money: number) {
        this.children = [];
        this.allMoney = money;
    }

    public add(component: IComponent) {
        this.children.push(component);
    }

    public getMoney(): number {
        const size = this.children.length;

        if (size > 0) {
            for (let i = 0; i < size; i++) {
                this.allMoney += this.children[i].getMoney();
            }
        }
        return this.allMoney;
    }

    public remove(leaf: IComponent) {
        this.children.pop();
    }
}

class Application {
    constructor() {

        const product = new Product(25);
        const box = new Box(5);
        const boxes = new Box(5)

        box.add(product);
        box.add(product);
        box.add(product);

        boxes.add(box);
        boxes.add(box);

        console.log('Sum of all products: ', boxes.getMoney());
    }
}

let clientApplication = (new Application());
clientApplication;
