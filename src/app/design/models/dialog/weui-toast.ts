
export class WeuiToastDefault {
    type: string;
    name: string;
    title: string;
    shown: boolean;
    constructor() {
        this.type = 'weui-toast';
        this.name = '轻提示';
        this.title = '轻提示';

        this.shown = false;
    }
}

