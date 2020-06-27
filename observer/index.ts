class EventManager {
    private listeners: User [] = [];

    public subscribe(listener) {
        this.listeners.push(listener);
    }

    public unsubscribe(listener: User) {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
        }
    }

    public notify(data) {
        for (let i = 0; i < this.listeners.length; i++) {
            this.listeners[i].update(data);
        }
    }
}

class User implements IEventListener {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public update(message: string) {
        console.log(`user ${this.name} get message: ${message}`);
    }
}

interface IEventListener {
    update(message: string);
}

class Application {
    constructor() {
        const user = new User('Ivan');
        const user1 = new User('Vlad');
        const user2 = new User('Max');

        const eventManager = new EventManager();

        eventManager.subscribe(user);
        eventManager.subscribe(user1);

        eventManager.notify('vi vse govno');
        eventManager.subscribe(user2);

        eventManager.unsubscribe(user1);

        eventManager.notify('best of the best of the best');
    }
}

let clientApplication = (new Application());
clientApplication;
