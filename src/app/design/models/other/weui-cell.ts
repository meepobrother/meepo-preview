
import { WeuiTextDefault } from './weui-text';
import { uuid } from '../../../libs';
export class WeuiCellDefault {
    header: any[] = [];
    body: any[] = [];
    footer: any[] = [];

    type: string;
    name: string;

    code: string;

    isAccess: boolean;

    constructor() {
        this.type = 'weui-cell';
        this.name = 'cell';
        this.isAccess = true;
        this.header = [
            new WeuiTextDefault()
        ];
        this.body = [
            new WeuiTextDefault()
        ];
        this.footer = [
            new WeuiTextDefault()
        ];

        this.code = uuid();
    }
}
