interface IThirdPartyYoutubeLib {
    listVideos();
    getVideoInfo(id: number);
    downloadVideo(id: number);
}

class ThirdPartyYoutubeClass  {
    public listVideos() {
        console.log('list of videos');
    }
    public getVideoInfo(id: number) {
        console.log(`video ${id} info`);
    }
    public downloadVideo(id: number) {
        console.log(`start download video ${id}`);
    }
}

class CachedYoutubeClass implements IThirdPartyYoutubeLib {

    public needReset = true;
    private service: ThirdPartyYoutubeClass;
    private listCache;
    private videoCache;
    private isDownloaded = false;

    constructor(service: ThirdPartyYoutubeClass) {
        this.service = service;
    }

    public downloadVideo(id: number) {
        if (this.isDownloaded) {
            console.log('use cache');
        } else {
            this.service.downloadVideo(id);
        }
    }

    public getVideoInfo(id: number) {
        if (this.videoCache === null || this.needReset) {
            this.videoCache = this.service.getVideoInfo(id);
        } else {
            console.log('use cache');
        }
    }

    public listVideos() {
        if (this.listCache === null || this.needReset) {
            this.listCache = this.service.listVideos();
        } else {
            console.log('use cache');
        }
    }

}

class YoutubeManager {
    protected service: IThirdPartyYoutubeLib;

    constructor(s: IThirdPartyYoutubeLib) {
        this.service = s;
    }

    public renderVideoPage() {
        this.service.getVideoInfo(5);
    }

    public renderListPanel() {
        this.service.listVideos();
    }

    public reactOnUserAction() {
        this.renderVideoPage();
        this.renderListPanel();
    }
}

class Application {
    constructor() {
        const youtubeService = new ThirdPartyYoutubeClass();
        const proxy = new CachedYoutubeClass(youtubeService);
        const manager = new YoutubeManager(proxy);

        manager.reactOnUserAction();
    }
}

let clientApplication = (new Application());
clientApplication;
