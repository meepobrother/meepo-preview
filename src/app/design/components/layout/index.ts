export * from './weui-divider/weui-divider.component';
export * from './weui-grid/weui-grid.component';
export * from './weui-header/weui-header.component';
export * from './weui-scroller/weui-scroller.component';
export * from './weui-sticky/weui-sticky.component';
export * from './weui-view-box/weui-view-box.component';

import { WeuiDividerComponent } from './weui-divider/weui-divider.component';
import { WeuiGridComponent } from './weui-grid/weui-grid.component';
import { WeuiHeaderComponent } from './weui-header/weui-header.component';
import { WeuiScrollerComponent } from './weui-scroller/weui-scroller.component';
import { WeuiStickyComponent } from './weui-sticky/weui-sticky.component';
import { WeuiViewBoxComponent } from './weui-view-box/weui-view-box.component';

export const LayoutComponents = [
    WeuiDividerComponent,
    WeuiGridComponent,
    WeuiHeaderComponent,
    WeuiScrollerComponent,
    WeuiStickyComponent,
    WeuiViewBoxComponent
];


export const LayoutViews = {
    'weui-divider': WeuiDividerComponent,
    'weui-grid': WeuiGridComponent,
    'weui-header': WeuiHeaderComponent,
    'weui-scroller': WeuiScrollerComponent,
    'weui-sticky': WeuiStickyComponent,
    'weui-view-box': WeuiViewBoxComponent
};
