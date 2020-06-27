// Общий интерфейс для кнопок

interface IButton {
    paint();
}

class WinButton implements IButton {
    public paint() {
        console.log('Отрисовать кнопку в стиле виндовс');
    }
}

class MacButton implements IButton {
    public paint() {
        console.log('Отрисовать кнопку в стиле Mac');
    }
}

interface ICheckBox {
    paint();
}

class WinCheckBox implements ICheckBox {
    public paint() {
        console.log('Отрисовать CheckBox в стиле виндовс');
    }
}

class MacCheckBox implements ICheckBox {
    public paint() {
        console.log('Отрисовать CheckBox в стиле Mac');
    }
}

interface IGUIFactory {
    createButton(): IButton;
    createCheckBox(): ICheckBox;
}

class WinFactory implements IGUIFactory {
   public createButton(): IButton {
       return new WinButton();
   }

   public createCheckBox(): ICheckBox {
        return new WinCheckBox();
    }
}

class MacFactory implements IGUIFactory {
    public createButton(): IButton {
        return new MacButton();
    }

    public createCheckBox(): ICheckBox {
        return new MacCheckBox();
    }
}

class ClientApplication {
    private button: IButton;
    private factory: IGUIFactory;
    private checkbox: ICheckBox;

    constructor(f: IGUIFactory) {
        this.factory = f;
        this.createUI();
        this.paint();
    }

    public createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckBox();
    }

    public paint() {
        this.button.paint();
        this.checkbox.paint();
    }
}

let clientApplication = (new ClientApplication(new MacFactory()));
clientApplication;
