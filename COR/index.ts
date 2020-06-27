interface IHandler {
    handle(c: Car);
    canNext(): boolean;
}

class Car {
    public km: number;
    public fuel: number;
    public oil: number;

    constructor(fuel, km, oil) {
        this.fuel = fuel;
        this.km = km;
        this.oil = oil;
    }
}

class FuelHandler implements IHandler {
    private can: boolean;

    public handle(car: Car) {
        if (car.fuel < 10) {
            this.can = false;
            console.log('added fuel');
        } else {
            console.log('lets go');
            this.can = true;
        }
    }

    public canNext(): boolean {
       return this.can;
    }
}

class KMHandler implements IHandler {
    private can: boolean;

    public handle(c: Car) {
        if (c.km < 100) {
            this.can = true;
            console.log('you are ok');
        } else {
            this.can = false;
            console.log('you have some problems');
        }
    }

    public canNext(): boolean {
        return this.can;
    }
}

class OilHandler implements IHandler {
    private can: boolean;

    public handle(c: Car) {
        if (c.oil < 10) {
            this.can = true;
            console.log('added oil');
        } else {
            this.can = false;
            console.log('you dont need oil');
        }
    }

    public canNext(): boolean {
        return this.can;
    }
}

class Checker {
    private isValid: boolean;
    public car: Car;
    private handlers: IHandler[] = [];

    constructor(c: Car) {
        this.car = c;
        this.isValid = false;
    }

    public addHandler(handler: IHandler) {
        this.handlers.push(handler);
    }

    public handle(): boolean {
        for (let i = 0; i < this.handlers.length; i++) {

            this.handlers[i].handle(this.car);
            if (!this.handlers[i].canNext()) {
                return this.isValid = false;
            }
        }

        return this.isValid = true;
    }
}

class Application {
    constructor() {
        const car = new Car(10, 105, 1);

        const checker = new Checker(car);

        checker.addHandler(new FuelHandler());

        console.log(checker.handle());
    }
}

let clientApplication = (new Application());
clientApplication;
