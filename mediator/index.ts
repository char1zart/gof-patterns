interface IMediator {
    notify(sender: Component, event: string);
}

class Component {
    protected mediator: IMediator;

    constructor(mediator: IMediator) {
        this.mediator = mediator;
    }

    public notify(message: string) {
        this.mediator.notify(this, message);
    }
}

class ConcreteComponent1 extends Component {
    constructor(mediator: IMediator) {
        super(mediator);
    }

    public notify(message: string) {
        console.log('Colleague1 gets message: ' + message);
    }
}

class ConcreteComponent2 extends Component {
    constructor(mediator: IMediator) {
        super(mediator);
    }

    public notify(message: string) {
        console.log('Colleague2 gets message: ' + message);
    }
}

class ConcreteMediator implements  IMediator {

    public notify(sender: Component, event: string) {
        if (event === 'col1') {
            sender.notify('are you ok?');
        }

        if (event === 'col2') {
            sender.notify('im fine');
        }
    }
}

class Application {
    constructor() {
        const mediator = new ConcreteMediator();
        const con1 = new ConcreteComponent1(mediator);
        const con2 = new ConcreteComponent2(mediator);

        mediator.notify(con2, 'col1');
        mediator.notify(con1, 'col2');

    }
}

let clientApplication = (new Application());
clientApplication;