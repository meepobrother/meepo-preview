export class WeuiAddressDefault {
    type: string;
    title: string;
    placeholder: string;
    name: string;
    field_name: string;
    value: string;
    constructor() {
        this.type = 'weui-address';
        this.title = '地址';
        this.placeholder = '请选择地址';
        this.name = '选择地址';
        this.field_name = 'address';
        this.value = '';
    }
}
