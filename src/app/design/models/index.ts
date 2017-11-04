import {
    WeuiAddressDefault,
    WeuiBtnDefault,
    WeuiCheckListDefault,
    WeuiCheckerDefault,
    WeuiInlineCalendarDefault,
    WeuiInputDefault,
    WeuiPopupRadioDefault,
    WeuiSlideDefault
} from './forms';

import {
    WeuiPopupDefault,
    WeuiLoadingDefault,
    WeuiToastDefault
} from './dialog';

import {
    WeuiCellDefault,
    WeuiTextDefault
} from './other';

export const MODELS = {
    // forms
    'weui-address': WeuiAddressDefault,
    'weui-btn': WeuiBtnDefault,
    'weui-check-list': WeuiCheckListDefault,
    'weui-checker': WeuiCheckerDefault,
    'weui-inline-calendar': WeuiInlineCalendarDefault,
    'weui-input': WeuiInputDefault,
    'weui-popup-radio': WeuiPopupRadioDefault,
    'weui-slide': WeuiSlideDefault,

    // other
    'weui-cell': WeuiCellDefault,
    'weui-text': WeuiTextDefault,

    // loading
    'weui-popup': WeuiPopupDefault,
    'weui-loading': WeuiLoadingDefault,
    'weui-toast': WeuiToastDefault,
};


export * from './forms';
export * from './dialog';
export * from './other';

