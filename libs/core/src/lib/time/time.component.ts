import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    QueryList,
    SimpleChanges,
    ViewChildren,
    ViewEncapsulation,
    forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { KeyUtil, RtlService } from '@fundamental-ngx/cdk/utils';
import { DatetimeAdapter } from '@fundamental-ngx/core/datetime';

import { AsyncPipe, NgIf } from '@angular/common';
import { ContentDensityObserver, contentDensityObserverProviders } from '@fundamental-ngx/core/content-density';
import { FdTranslatePipe } from '@fundamental-ngx/i18n';
import { createMissingDateImplementationError } from './errors';
import { Meridian, SelectableViewItem } from './models';
import { TimeColumnComponent } from './time-column/time-column.component';

export type FdTimeActiveView = 'hour' | 'minute' | 'second' | 'meridian';

type HourViewItem = SelectableViewItem<number>;
type MinuteViewItem = SelectableViewItem<number>;
type SecondViewItem = SelectableViewItem<number>;
type MeridianViewItem = SelectableViewItem<Meridian>;

@Component({
    selector: 'fd-time',
    templateUrl: './time.component.html',
    styleUrls: ['./time.component.scss'],
    host: {
        '(focusout)': '_focusOut($event)',
        '(blur)': 'onTouched()'
    },
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimeComponent),
            multi: true
        },
        contentDensityObserverProviders()
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [TimeColumnComponent, NgIf, AsyncPipe, FdTranslatePipe]
})
export class TimeComponent<D> implements OnInit, OnChanges, OnDestroy, AfterViewInit, ControlValueAccessor {
    /**
     * @Input When set to false, uses the 24 hour clock (hours ranging from 0 to 23)
     * and does not display a period control.
     */
    @Input()
    meridian = false;

    /**
     *  @Input When set to false, does not set the input field to invalid state on invalid entry.
     */
    @Input()
    validate = true;

    /**
     * @Input when set to true, time inputs won't allow to have 1 digit
     * for example 9 will become 09
     * but 12 will be kept as 12.
     */
    @Input()
    keepTwoDigits = false;

    /**
     * @Input Disables the component.
     */
    @Input()
    disabled: boolean;

    /**
     * @Input When set to false, hides the input for seconds.
     */
    @Input()
    displaySeconds = true;

    /** @Input When set to false, hides the input for minutes. */
    @Input()
    displayMinutes = true;

    /**
     * When set to false, hides the input for hours
     */
    @Input()
    displayHours = true;

    /** @Input Defines if time component should be used in tablet mode */
    @Input()
    tablet = false;

    /** @Input Defines quantity of the elements, that are visible at the same time. Should be odd number */
    @Input()
    elementsAtOnce = 7;

    /**
     * @Input An object that contains datetime representation
     */
    @Input()
    time: D;

    /** @Input Whether to show spinner buttons */
    @Input()
    spinnerButtons = true;

    /** @hidden */
    @ViewChildren(TimeColumnComponent)
    columns: QueryList<TimeColumnComponent<number, SelectableViewItem<number>>>;

    /** Active column view to iterate with */
    activeView: FdTimeActiveView = 'hour';

    /** Offset */
    get offset(): number {
        return Math.floor(this.elementsAtOnce / 2);
    }

    /**
     * @hidden
     * container for [0 - 23] hours
     */
    hourViewItems: HourViewItem[] = [];
    /**
     * @hidden
     * reference to currently selected hourViewItems element
     */
    activeHourViewItem?: HourViewItem;

    /**
     * @hidden
     * container for [0 - 59] minutes
     */
    minuteViewItems: MinuteViewItem[] = [];
    /**
     * @hidden
     * reference to currently selected minuteViewItems element
     */
    activeMinuteViewItem?: MinuteViewItem;

    /**
     * @hidden
     * container for [0 - 59] seconds
     */
    secondViewItems: SecondViewItem[] = [];
    /**
     * @hidden
     * reference to currently selected secondViewItems element
     */
    activeSecondViewItem?: SecondViewItem;

    /**
     * @hidden
     * container for [am, pm] meridian values
     */
    meridianViewItems: MeridianViewItem[] = [];
    /**
     * @hidden
     * reference to currently selected meridianViewItems element
     */
    activeMeridianViewItem?: MeridianViewItem;

    /** @hidden */
    private readonly _onDestroy$: Subject<void> = new Subject<void>();

    /** @hidden */
    private _subscriptions = new Subscription();

    /** @hidden */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _elementRef: ElementRef,
        // Use @Optional to avoid angular injection error message and throw our own which is more precise one
        @Optional() private _dateTimeAdapter: DatetimeAdapter<D>,
        readonly _contentDensityObserver: ContentDensityObserver,
        @Optional() private _rtlService: RtlService
    ) {
        if (!_dateTimeAdapter) {
            throw createMissingDateImplementationError('DateTimeAdapter');
        }

        this.time = this._getDefaultValue();
    }

    /** @hidden */
    ngOnInit(): void {
        this._dateTimeAdapter.localeChanges.pipe(takeUntil(this._onDestroy$)).subscribe(() => {
            this._setUpViewGrid();
            this._changeDetectorRef.detectChanges();
        });

        this._setUpViewGrid();
    }

    /** @hidden
     * Reacts only when there is meridian or time input change
     */
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.meridian || changes.time) {
            this._setUpViewGrid();
        }
        if (changes.elementsAtOnce && changes.elementsAtOnce.currentValue % 2 === 0) {
            throw new Error('[elementsAtOnce] should be odd number');
        }
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }

    /** @hidden */
    ngAfterViewInit(): void {
        this.refreshColumns();
    }

    /** @hidden */
    onChange: (value: D) => void = () => {};

    /** @hidden */
    onTouched = (): void => {};

    /** @hidden */
    registerOnChange(fn: (time: D) => void): void {
        this.onChange = fn;
    }

    /** @hidden */
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    /** @hidden */
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
        this._changeDetectorRef.detectChanges();
    }

    /** @hidden */
    refreshColumns(): void {
        this.columns.forEach((column) => column.setValueOfActive());
    }

    /**
     * @hidden
     * Handles meridian change.
     * This implicitly changes hours by +/- 12
     */
    handleMeridianChange(meridian: Meridian): void {
        let hourOffset: number = meridian === Meridian.AM ? -12 : 12;
        let currentHour = this._getModelHour();

        if (currentHour > 12 && meridian === Meridian.PM) {
            currentHour -= 12;
        } else if (currentHour === 12) {
            currentHour = 0;
        } else if (currentHour < 12 && meridian === Meridian.AM) {
            hourOffset = 0;
        }

        const newHour = Math.max(0, Math.min(23, currentHour + hourOffset));

        this.handleHourChange(newHour);
    }

    /** @hidden */
    handleSecondChange(second: number): void {
        this.time = this._dateTimeAdapter.setSeconds(this.time, second);
        this._calculateActiveSecondViewItem();
        this.onChange(this.time);
    }

    /** @hidden */
    handleMinuteChange(minute: number): void {
        this.time = this._dateTimeAdapter.setMinutes(this.time, minute);
        this._calculateActiveMinuteViewItem();
        this.onChange(this.time);
    }

    /**
     * @hidden
     * Handles changes of displayed hour value from template.
     */
    handleHourChange(hour: number): void {
        this.time = this._dateTimeAdapter.setHours(this.time, hour);
        this._calculateActiveHourViewItem();

        if (this.meridian) {
            this._calculateActiveMeridianViewItem();
        }

        this.onChange(this.time);
    }

    /** @hidden */
    handleNextColumnFocus(column: FdTimeActiveView): void {
        const columns = this._getVisibleColumnsWithRtl();
        let nextIndex = columns.indexOf(column) + 1;
        if (nextIndex >= columns.length) {
            nextIndex = 0;
        }
        this.changeActive(columns[nextIndex]);
    }

    /** @hidden */
    handlePreviousColumnFocus(column: FdTimeActiveView): void {
        const columns = this._getVisibleColumnsWithRtl();
        let nextIndex = columns.indexOf(column) - 1;
        if (nextIndex < 0) {
            nextIndex = columns.length - 1;
        }
        this.changeActive(columns[nextIndex]);
    }

    /** @hidden */
    handleKeyDownEvent(event: KeyboardEvent): void {
        if (KeyUtil.isKeyCode(event, LEFT_ARROW)) {
            this.handlePreviousColumnFocus(this.activeView);
            event.preventDefault();
            this.focusActiveColumn();
        } else if (KeyUtil.isKeyCode(event, RIGHT_ARROW)) {
            this.handleNextColumnFocus(this.activeView);
            event.preventDefault();
            this.focusActiveColumn();
        }
    }

    /** @hidden */
    writeValue(time: D): void {
        if (!time || !this._dateTimeAdapter.isValid(time)) {
            time = this._getDefaultValue();
        }
        this.time = time;

        this._setUpActiveViewItems();

        this._changeDetectorRef.detectChanges();
    }

    /** @hidden */
    changeActive(view: FdTimeActiveView): void {
        this.activeView = view;
        this._changeDetectorRef.detectChanges();
    }

    /** @hidden */
    isActive(view: FdTimeActiveView): boolean {
        return this.activeView === view;
    }

    /** @hidden */
    focusActiveColumn(): void {
        const column = this.columns.find(({ active }) => active);
        column?.focus();
    }

    /** @hidden */
    private _focusOut(event: FocusEvent): void {
        if (!this._elementRef.nativeElement.contains(event.relatedTarget)) {
            this.onTouched();
        }
    }

    /**
     * Get visible time columns
     * @returns visible columns list @see {FdTimeActiveView[]}
     */
    private _getVisibleColumns(): FdTimeActiveView[] {
        const allOptions: Array<[boolean, FdTimeActiveView]> = [
            [this.displayHours, 'hour'],
            [this.displayMinutes, 'minute'],
            [this.displaySeconds, 'second'],
            [this.meridian, 'meridian']
        ];
        return allOptions.filter(([enabled]) => enabled).map(([, view]) => view);
    }

    /**
     * Get visible columns taking into account RTL
     * @returns visible columns list @see {FdTimeActiveView[]}
     */
    private _getVisibleColumnsWithRtl(): FdTimeActiveView[] {
        const columns = this._getVisibleColumns();
        return this._rtlService?.rtl.value ? columns.reverse() : columns;
    }

    /** @hidden */
    private _setUpViewGrid(): void {
        this._constructHourViewItems();
        this._constructMinuteViewItems();
        this._constructSecondViewItems();
        this._constructMeridianViewItems();
        // update reference to active view items
        this._setUpActiveViewItems();
    }

    /** @hidden */
    private _setUpActiveViewItems(): void {
        this._calculateActiveHourViewItem();
        this._calculateActiveMinuteViewItem();
        this._calculateActiveSecondViewItem();
        this._calculateActiveMeridianViewItem();
    }

    /** @hidden */
    private _constructHourViewItems(): void {
        this.hourViewItems = this._dateTimeAdapter
            .getHourNames({ meridian: this.meridian, twoDigit: this.keepTwoDigits })
            .map((name, hour) => ({
                value: hour,
                label: name
            }));
    }

    /** @hidden */
    private _constructMinuteViewItems(): void {
        this.minuteViewItems = this._dateTimeAdapter
            .getMinuteNames({ twoDigit: this.keepTwoDigits })
            .map((name, minute) => ({
                value: minute,
                label: name
            }));
    }

    /** @hidden */
    private _constructSecondViewItems(): void {
        this.secondViewItems = this._dateTimeAdapter
            .getSecondNames({ twoDigit: this.keepTwoDigits })
            .map((name, second) => ({
                value: second,
                label: name
            }));
    }

    /** @hidden */
    private _constructMeridianViewItems(): void {
        const [amLabel, pmLabel] = this._dateTimeAdapter.getDayPeriodNames();
        this.meridianViewItems = [
            { value: Meridian.AM, label: amLabel },
            { value: Meridian.PM, label: pmLabel }
        ];
    }

    /** @hidden */
    private _calculateActiveHourViewItem(): void {
        const hour = this._getModelHour();
        this.activeHourViewItem = this.hourViewItems.find(({ value }) => value === hour);
    }

    /** @hidden */
    private _calculateActiveMinuteViewItem(): void {
        const minute = this._getModelMinute();
        this.activeMinuteViewItem = this.minuteViewItems.find(({ value }) => value === minute);
    }

    /** @hidden */
    private _calculateActiveSecondViewItem(): void {
        const second = this._getModelSecond();
        this.activeSecondViewItem = this.secondViewItems.find(({ value }) => value === second);
    }

    /** @hidden */
    private _calculateActiveMeridianViewItem(): void {
        const meridian = this._getDayPeriodByHour();
        this.activeMeridianViewItem = this.meridianViewItems.find(({ value }) => value === meridian);
    }

    /**
     * @hidden
     * Model hours (0 - 23)
     */
    private _getModelHour(): number {
        return this._dateTimeAdapter.getHours(this.time);
    }

    /**
     * @hidden
     * Model minutes (0 - 59)
     */
    private _getModelMinute(): number {
        return this._dateTimeAdapter.getMinutes(this.time);
    }

    /**
     * @hidden
     * Model seconds (0 - 59)
     */
    private _getModelSecond(): number {
        return this._dateTimeAdapter.getSeconds(this.time);
    }

    /**
     * @hidden
     * Get meridian period based on a given hours
     */
    private _getDayPeriodByHour(hour = this._getModelHour()): Meridian {
        return this._isPm(hour) ? Meridian.PM : Meridian.AM;
    }

    /** @hidden */
    private _isPm(hours: number = this._getModelHour()): boolean {
        return hours >= 12;
    }

    /**
     * @hidden
     * @returns default time 00:00:00
     */
    private _getDefaultValue(): D {
        return this._dateTimeAdapter.today();
    }
}
