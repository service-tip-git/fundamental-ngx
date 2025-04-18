import { DynamicComponentConfig, Nullable } from '@fundamental-ngx/cdk/utils';

import { ContentDensityMode } from '@fundamental-ngx/core/content-density';
import { DialogPosition } from '../utils/dialog-position.class';

export class DialogConfigBase<T> implements DynamicComponentConfig {
    /** Id for the dialog component. If omitted, a unique one is generated. */
    id?: string;

    /** Width of the dialog. */
    width?: string | number;

    /** Height of the dialog. */
    height?: string | number;

    /** Minimum width of the dialog. */
    minWidth?: string | number;

    /** Minimum height of the dialog. */
    minHeight?: string | number;

    /** Maximum width of the dialog. */
    maxWidth?: string | number;

    /** Maximum height of the dialog. */
    maxHeight?: string | number;

    /** Position of the dialog. */
    position?: DialogPosition;

    /** Aria Modal for the dialog component element */
    ariaModal?: boolean = false;

    /** Aria label for the dialog component element. */
    ariaLabel?: Nullable<string>;

    /** Id of the element that labels the dialog. */
    ariaLabelledBy?: Nullable<string>;

    /** Id of the element that describes the dialog. */
    ariaDescribedBy?: Nullable<string>;

    /** Whether the dialog should have a backdrop. */
    hasBackdrop?: boolean = true;

    /** Whether clicking on the backdrop should close the dialog. Only works if hasBackdrop is true. */
    backdropClickCloseable?: boolean = false;

    /** Global classes to apply to the backdrop. */
    backdropClass?: string;

    /** Classes to apply to the `fd-dialog-container`  */
    containerClass?: string;

    /** Global classes to apply to the dialog panel. */
    dialogPanelClass?: string;

    /** Whether the escape key should close the dialog. */
    escKeyCloseable?: boolean = true;

    /** Whether the dialog should be focus trapped. */
    focusTrapped?: boolean = true;

    /** The container that the dialog is appended to. By default, it is appended to the body. */
    container?: HTMLElement | 'body' = 'body';

    /** Data to pass along to the content through the DialogRef. */
    data?: T;

    /** Whether the dialog should be displayed in mobile mode. */
    mobile?: boolean;

    /** Whether the dialog in mobile mode should have outer space. */
    mobileOuterSpacing?: boolean;

    /** Whether the dialog should have vertical padding. */
    verticalPadding?: boolean = true;

    /** Whether the dialog should have horizontal padding. */
    horizontalPadding?: boolean = true;

    /** Whether to completely disable dialog body paddings. */
    disablePaddings?: boolean = false;

    /** Whether the dialog is a Settings dialog. */
    settings?: boolean;

    /** Workaround for IE11, as `flex-grow: 1` on dialog body won't work when 'min-height' for dialog set
     * There is another way to get dialog of wanted height by setting `min-height` for dialog body.
     */
    bodyMinHeight?: string;

    /** Whether the dialog should have responsive horizontal padding changing with Dialogs window width.
     * max-width: 599px                         - .fd-dialog__content--s
     * min-width: 600px and max-width: 1023px   - .fd-dialog__content--m
     * min-width: 1024px and max-width: 1439px  - .fd-dialog__content--l
     * min-width: 1440px                        - .fd-dialog__content--xl
     * */
    responsivePadding?: boolean = false;

    /** Whether to close the dialog on router navigation start. */
    closeOnNavigation?: boolean = true;

    /** Content density mode for the dialog. */
    contentDensity?: ContentDensityMode;
}
