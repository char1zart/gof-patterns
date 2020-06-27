abstract class State {
    protected player: Player;

    constructor(player: Player) {
        this.player = player;
    }

    public abstract clickLock();

    public abstract clickPlay();

    public abstract clickNext();

    public abstract clickPrevious();
}

class LockedState extends State {
    public clickLock(): void {
        console.log('unlock and ready state');
        this.player.changeState(new ReadState(this.player));
    }

    public clickNext(): void {
        console.log('you cannot click next while lock state');
    }

    public clickPlay(): void {
        console.log('you cannot click play while lock state');
    }

    public clickPrevious(): void {
        console.log('you cannot click previous while lock state');
    }

}

class ReadState extends State {
    public clickLock(): void {
        console.log('we use lock state');
        this.player.changeState(new LockedState(this.player));
    }

    public clickNext(): void {
        console.log('next sound');
        this.player.changeState(new PlayingState(this.player));
    }

    public clickPlay(): void {
        console.log('we start play music');
    }

    public clickPrevious(): void {
        console.log('we start play previous music');
    }

}

class PlayingState extends State {
    public clickLock(): void {
        console.log('we start lock ');
        this.player.changeState(new LockedState(this.player));
    }

    public clickNext(): void {
        console.log('we start play next music');
    }

    public clickPlay(): void {
        console.log('we stop play music');
        this.player.changeState(new ReadState(this.player));
    }

    public clickPrevious(): void {
        console.log('we start play previous music');
    }

}

class Player {
    public state: State;

    constructor() {
       this.state = new ReadState(this);
       this.state.clickPlay();
       this.state.clickNext();
       this.state.clickLock();
       this.state.clickPlay();
       this.state.clickLock();
       this.state.clickNext();
       this.state.clickPlay();
    }

    public changeState(state: State) {
        this.state = state;
    }
}

let clientApplication = (new Player());
clientApplication;
