class DoFirst {

}

class DoSecond {

}

class DoThird {

}

class Dodo {

}

class DoConverter {
    public convert() {
        const doFirst = new DoFirst();
        const doSecond = new DoSecond();
        const doThird = new DoThird();
        const doDo = new Dodo();

        console.log('Complite');
    }
}

class Application {
    constructor() {

        new DoConverter().convert();
    }
}

let clientApplication = (new Application());
clientApplication;
