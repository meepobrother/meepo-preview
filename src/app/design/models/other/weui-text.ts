import { uuid } from '../../../libs';

export class WeuiTextDefault {
    type: string;
    name: string;

    title: string;

    code: string;

    constructor() {
        this.type = 'weui-text';
        this.name = '文本';
        this.title = '我是一个文本';
        this.code = uuid();
    }
}
