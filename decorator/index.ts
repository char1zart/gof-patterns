interface IDataSource {
    readData(): string;
}

class FileDataSource implements IDataSource {
    private readonly initData: string;

    constructor(initData: string) {
        this.initData = initData;
    }

    public readData(): string {
        return this.initData;
    }
}

class DataSourceDecorator implements IDataSource {
    protected wraper: IDataSource;

    constructor(s: IDataSource) {
        this.wraper = s;
    }

    public readData(): string {
        return this.wraper.readData();
    }
}

class EnctyptionDecorator extends DataSourceDecorator {
    public wraper: IDataSource;

    constructor(s: IDataSource) {
        super(s);
        const encrypted = `NOW IT ENCRYPTED = ${s.readData()}`;
        this.wraper = new FileDataSource(encrypted);
    }

    public readData(): string {
        return this.wraper.readData();
    }
}

class DectyptionDecorator extends DataSourceDecorator {
    public wraper: IDataSource;

    constructor(s: IDataSource) {
        super(s);
        const decryption = `NOW IT DECRIPTED = ${s.readData()}`;
        this.wraper = new FileDataSource(decryption);
    }

    public readData(): string {
        return this.wraper.readData();
    }
}

class ReplacerDecorator extends DataSourceDecorator {
    public wraper: IDataSource;

    constructor(s: IDataSource) {
        super(s);
        const data = s.readData();
        this.wraper = new FileDataSource(data.italics());
    }

    public readData(): string {
        return this.wraper.readData();
    }
}

class Application {
    constructor() {

        const source = new FileDataSource('ndn.txt');
        console.log(source.readData());

        const encrypWrapper = new EnctyptionDecorator(source);
        console.log(encrypWrapper.readData());

        const decrypWrapper = new DectyptionDecorator(source);
        console.log(decrypWrapper.readData());

        const replacerWrapper = new ReplacerDecorator(source);
        console.log(replacerWrapper.readData());
    }
}

let clientApplication = (new Application());
clientApplication;
