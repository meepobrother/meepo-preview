export * from './weui-action-sheet/weui-action-sheet.component';
export * from './weui-alert/weui-alert.component';
export * from './weui-confirm/weui-confirm.component';
export * from './weui-dialog/weui-dialog.component';
export * from './weui-loading/weui-loading.component';
export * from './weui-popup/weui-popup.component';
export * from './weui-toast/weui-toast.component';


import { WeuiActionSheetComponent } from './weui-action-sheet/weui-action-sheet.component';
import { WeuiAlertComponent } from './weui-alert/weui-alert.component';
import { WeuiConfirmComponent } from './weui-confirm/weui-confirm.component';
import { WeuiDialogComponent } from './weui-dialog/weui-dialog.component';
import { WeuiLoadingComponent } from './weui-loading/weui-loading.component';
import { WeuiPopupComponent } from './weui-popup/weui-popup.component';
import { WeuiToastComponent } from './weui-toast/weui-toast.component';

export const DialogComponents = [
    WeuiActionSheetComponent,
    WeuiAlertComponent,
    WeuiConfirmComponent,
    WeuiDialogComponent,
    WeuiLoadingComponent,
    WeuiPopupComponent,
    WeuiToastComponent
];


export const DialogViews = {
    'weui-action-sheet': WeuiActionSheetComponent,
    'weui-alert': WeuiAlertComponent,
    'weui-confirm': WeuiConfirmComponent,
    'weui-dialog': WeuiDialogComponent,
    'weui-loading': WeuiLoadingComponent,
    'weui-popup': WeuiPopupComponent,
    'weui-toast': WeuiToastComponent
};
