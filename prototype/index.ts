abstract class Shape {
    public x: number;
    public y: number;
    public color: string;

    protected constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    public abstract clone(): Shape;
}

class Rectangle extends Shape {
    public width: number;
    public height: number;

    constructor(s: { x: number; y: number; color: string }) {
        super(s.x, s.y, s.color);

        this.width = s.x;
        this.height = s.y;
    }

    public clone(): Rectangle {
        return new Rectangle(this);
    }
}

class Application {
    constructor() {
        const rect = new Rectangle({x: 25, y: 50, color: 'red'});
        const anotherRect = rect.clone();
    }
}

let clientApplication = (new Application());
clientApplication;
