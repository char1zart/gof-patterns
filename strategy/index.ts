interface IStrategy {
    execute(data);
}

class StrategyA implements IStrategy {
    public execute(data) {
        console.log(`strategy A : ${data}`);
    }
}

class StrategyB implements IStrategy {
    public execute(data) {
        console.log(`strategy B : ${data}`);
    }
}

class StrategyC implements IStrategy {
    public execute(data) {
        console.log(`strategy C : ${data}`);
    }
}


class Application {
    public state: IStrategy;
    public action: string;

    constructor() {

        this.action = 'b';

        if (this.action === 'a') {
            this.setStrategy(new StrategyA());
        }

        if (this.action === 'b') {
            this.setStrategy(new StrategyB());
        }

        if (this.action === 'c') {
            this.setStrategy(new StrategyC());
        }

        this.executeStrategy('data');
    }

    public setStrategy(state: IStrategy) {
        this.state = state;
    }

    public executeStrategy(data) {
        return this.state.execute(data);
    }
}

let clientApplication = (new Application());
clientApplication;
