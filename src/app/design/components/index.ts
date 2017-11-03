export * from './class';
export * from './dialog';
export * from './forms';
export * from './layout';
export * from './other';

import { ClassComponents, ClassViews } from './class';
import { DialogComponents, DialogViews } from './dialog';
import { FormsComponents, FormsViews } from './forms';
import { LayoutComponents, LayoutViews } from './layout';
import { OtherComponents, OtherViews } from './other';

export const Components = [
    ...ClassComponents,
    ...DialogComponents,
    ...FormsComponents,
    ...LayoutComponents,
    ...OtherComponents
];


export const VIEWSCOMPONENTS = {
    ...ClassViews,
    ...DialogViews,
    ...FormsViews,
    ...LayoutViews,
    ...OtherViews
};

