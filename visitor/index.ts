interface IShape {
    move();
    draw();
    accept(v: IVisitor);
}

interface IVisitor {
    visitD(d: Dot);
    visitC(c: Circle);
}

class Dot implements IShape {
    public accept(v: IVisitor) {
        v.visitD(this);
    }

    public draw() {
    }

    public move() {
    }

}

class Circle implements IShape {
    public accept(v: IVisitor) {
        v.visitC(this);
    }

    public draw() {
    }

    public move() {
    }

}

class ConcreteVisitor implements IVisitor {

    public visitD(d: Dot) {
        console.log('visit Dot');
    }

    public visitC(c: Circle) {
        console.log('visit Circle');
    }

}

class Application {
    public shapes: IShape[] = [];

    constructor() {

        const visitor = new ConcreteVisitor();

        this.shapes.push(new Circle(), new Dot());


        const size = this.shapes.length;
        for (let i = 0; i < size; i++) {
            this.shapes[i].accept(visitor);
        }

    }
}

let clientApplication = (new Application());
clientApplication;
