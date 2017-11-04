export class WeuiInputDefault {
    type: string;
    name: string;
    placeholder: string;
    title: string;
    
    field_name: string;
    field_type: string;

    constructor() {
        this.type = 'weui-input';
        this.name = '输入框';
        this.field_type = 'text';
        this.placeholder = '请输入';
        this.title = '输入框';
    }
}
