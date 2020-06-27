// Общий интерфейс для кнопок

interface IButton {
    render();
    onClick();
}

class WindowButton implements IButton {
    public render() {
        console.log('Отрисовать кнопку в стиле виндовс');
    }
    public onClick() {
        console.log('Оброботчик в стик виндовс');
    }
}

class HTMLButton implements IButton {
    public render() {
        console.log('Отрисовать кнопку в стиле html');
    }
    public onClick() {
        console.log('Оброботчик в стик html');
    }
}

abstract class Dialog {
    protected constructor() {
       const button = this.createButton();
       this.renderWindow(button);
    }

    public renderWindow(button: IButton) {
       button.onClick();
       button.render();
    }

    public abstract createButton(): IButton;
}

class WindowsDialog extends Dialog {
    constructor() {
        super();
    }

    public createButton(): IButton {
        return new WindowButton();
    }
}

class WebDialog extends Dialog {
    constructor() {
        super();
    }

    public createButton(): IButton {
        return new HTMLButton();
    }
}

class ClientApplication {
    public dialog: Dialog;

    constructor() {
        this.initialize();
    }

    public initialize() {
        const config = {
            OS: 'Web'
        };

        if (config.OS === 'Windows') {
            this.dialog = new WindowsDialog();
        }
        if (config.OS === 'Web') {
            this.dialog = new WebDialog();
        }
    }
}

let clientApplication = (new ClientApplication());
clientApplication;
