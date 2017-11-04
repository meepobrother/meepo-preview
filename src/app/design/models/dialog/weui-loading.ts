
export class WeuiLoadingDefault {
    title: string;
    type: string;
    name: string;

    shown: boolean;
    constructor() {
        this.type = 'weui-loading';
        this.name = '加载';
        this.title = 'loading';
        this.shown = false;
    }
}

