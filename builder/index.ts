class Car {
    private seats;
    private engine;
    private tripComputer;
    private gps;

    constructor(seats?: number, engine?: string, tripComputer?: boolean, gps?: boolean) {
        this.seats = seats;
        this.engine = engine;
        this.gps = gps;
        this.tripComputer = tripComputer;
    }
}

interface  IBuilder {
    setSeats(n: number);
    setEngine(engine: string);
    setTripComputer(value: boolean);
    setGPS(value: boolean);
}

class CarBuilder implements IBuilder {

    private seats;
    private engine;
    private tripComputer;
    private gps;

    public setEngine(engine: string) {
        this.engine = engine;

    }

    public setGPS(value: boolean) {
        this.gps = value;

    }

    public setSeats(n: number) {
        this.seats = n;

    }

    public setTripComputer(value: boolean) {
        this.tripComputer = value;

    }

    public getResult(): Car {
        return new Car(
            this.seats,
            this.engine,
            this.gps,
            this.tripComputer);
    }
}

class Application {
    constructor() {
        const builder = new CarBuilder();
        builder.setSeats(4);
        builder.setEngine('new powerful');
        builder.setGPS(true);
        builder.setTripComputer(false);
        builder.getResult();

    }
}

let clientApplication = (new Application());
clientApplication;