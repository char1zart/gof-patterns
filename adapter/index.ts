class RoundHole {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadious() {
        return this.radius;
    }

    public fits(p: RoundPeg) {
        console.log(this.getRadious() >= p.radius);
        return this.getRadious() >= p.radius;
    }
}

class RoundPeg {
    public radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getRadious() {
        return this.radius;
    }
}

class SquarePeg {
    public width: number;

    constructor(width: number) {
        this.width = width;
    }

    public getWidth() {
        return this.width;
    }
}

class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg;

    constructor(p: SquarePeg) {
        super(p.getWidth());
        this.peg = p;
    }

    public getRadious(): number {
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    }
}

class Application {
    constructor() {
        const hole = new RoundHole(5);
        const rpeg = new RoundPeg(5);

        hole.fits(rpeg);

        const smallSqpreg = new SquarePeg(5);
        const largeSqpreg = new SquarePeg(25);

        // ts не даст такого сделать
        /*try {
            hole.fits(smallSqpreg);
        } catch (e) {
            console.error(e);
        }*/

        const smallSqpregAdapter = new SquarePegAdapter(smallSqpreg);
        const largeSqpregAdapter = new SquarePegAdapter(largeSqpreg);

        hole.fits(smallSqpregAdapter);
        hole.fits(largeSqpregAdapter);

    }
}

let clientApplication = (new Application());
clientApplication;
