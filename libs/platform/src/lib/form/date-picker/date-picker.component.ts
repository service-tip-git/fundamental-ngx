import { NgControl, NgForm } from '@angular/forms';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Host,
    Inject,
    Input,
    isDevMode,
    Optional,
    Output,
    Self,
    SkipSelf,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';

import { CalendarType, CalendarYearGrid, DateRange, DaysOfWeek, FdCalendarView } from '@fundamental-ngx/core/calendar';
import { DATE_TIME_FORMATS, DatetimeAdapter, DateTimeFormats } from '@fundamental-ngx/core/datetime';
import { DatePickerComponent as FdDatePickerComponent } from '@fundamental-ngx/core/date-picker';
import { Placement, SpecialDayRule } from '@fundamental-ngx/core/shared';
import { FormFieldControl, BaseInput, FormField, ControlState } from '@fundamental-ngx/platform/shared';

/**
 * The Platform date picker component is a wrapper around fd-date-picker using platform form.
 * It is able to provide form field functionalities as well along with fd-date-picker functions.
 *
 * <fdp-form-group #ffg [formGroup]="datePickerForm">
 *      <fdp-form-field #ffl1 id="birthday">
 *          <fdp-date-picker name="birthday" type="single" [formControl]="ffl1.formControl"></fdp-date-picker>
 *      </fdp-form-field>
 * </fdp-form-group>
 *
 */

@Component({
    selector: 'fdp-date-picker',
    templateUrl: './date-picker.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: FormFieldControl, useExisting: PlatformDatePickerComponent, multi: true }]
})
export class PlatformDatePickerComponent<D> extends BaseInput {
    /**
     * date-picker value set as controller value
     */
    @Input()
    get value(): DateRange<D> | D {
        return super.getValue();
    }

    set value(value: DateRange<D> | D) {
        super.setValue(value);
    }

    /** below code taken from core/date-picker */
    /** The type of calendar, 'single' for single date selection or 'range' for a range of dates. */
    @Input()
    type: CalendarType = 'single';

    /** The currently selected CalendarDay model */
    @Input()
    selectedDate: D;

    /** The currently selected FdDates model start and end in range mode. */
    @Input()
    selectedRangeDate: DateRange<D> = { start: null, end: null };

    /** The day of the week the calendar should start on. 1 represents Sunday, 2 is Monday, 3 is Tuesday, and so on. */
    @Input()
    startingDayOfWeek: DaysOfWeek;

    /**
     * Whether user wants to mark day cells on hover.
     * Works only on range mode, when start date is selected on Day View.
     */
    @Input()
    rangeHoverEffect = false;

    /** Whether to validate the date picker input. */
    @Input()
    useValidation = true;

    /** Aria label for the date picker input. */
    @Input()
    dateInputLabel = 'Date input';

    /** Aria label for the button to show/hide the calendar. */
    @Input()
    displayCalendarToggleLabel = 'Display calendar toggle';

    /** Whether a null input is considered valid. */
    @Input()
    allowNull = true;

    /** Actually shown active view one of 'day' | 'month' | 'year' in calendar component*/
    @Input()
    activeView: FdCalendarView = 'day';

    /**
     *  The placement of the popover. It can be one of: top, top-start, top-end, bottom,
     *  bottom-start, bottom-end, right, right-start, right-end, left, left-start, left-end.
     */
    @Input()
    placement: Placement = 'bottom-start';

    /** The element to which the popover should be appended. */
    @Input()
    appendTo: ElementRef;

    /** Defines if date picker should be closed after date choose */
    @Input()
    closeOnDateChoose = true;

    @Input()
    get state(): ControlState {
        if (this.fdDatePickerComponent?._isInvalidDateInput || !this._datePickerValid) {
            return 'error';
        }

        return super.state;
    }
    set state(state: ControlState) {
        super.state = state;
    }

    /**
     * @deprecated
     *  The state of the form control - applies css classes.
     *  Can be `success`, `error`, `warning`, `information` or blank for default.
     */
    @Input()
    get datepickerState(): ControlState {
        if (isDevMode()) {
            console.warn('"datepickerState" is deprecated. Use "state" instead');
        }
        return this.state;
    }

    set datepickerState(state: ControlState) {
        if (isDevMode()) {
            console.warn('"datepickerState" is deprecated. Use "state" instead');
        }
        this.state = state;
    }

    /**
     * Whether AddOn Button should be focusable, set to true by default
     */
    @Input()
    buttonFocusable = true;

    /**
     * Special days mark, it can be used by passing array of object with
     * Special day number, list 1-20 [class:`fd-calendar__special-day--{{number}}`] is available there:
     * https://sap.github.io/fundamental-styles/components/calendar.html calendar special days section
     * Rule accepts method with FdDate object as a parameter. ex:
     * `rule: (fdDate: FdDate) => fdDate.getDay() === 1`, which will mark all sundays as special day.
     */
    @Input()
    specialDaysRules: SpecialDayRule<D>[] = [];

    /**
     * Object to customize year grid,
     * Row, Columns and method to display year can be modified
     */
    @Input()
    yearGrid: CalendarYearGrid = {
        rows: 4,
        cols: 5,
        yearMapping: (num: number) => num.toString()
    };

    /**
     * Object to customize aggregated year grid,
     * Row, Columns and method to display year can be modified
     */
    @Input()
    aggregatedYearGrid: CalendarYearGrid = {
        rows: 4,
        cols: 3,
        yearMapping: (num: number) => num.toString()
    };

    /**
     * Whether user wants to mark sunday/saturday with `fd-calendar__item--weekend` class
     */
    @Input()
    markWeekends = true;

    /**
     * Whether user wants to show week numbers next to days
     */
    @Input()
    showWeekNumbers = true;

    /** Whether the date picker is open. Can be used through two-way binding. */
    @Input()
    isOpen = false;

    /** Event emitted when the state of the isOpen property changes. */
    @Output()
    readonly isOpenChange = new EventEmitter<boolean>();

    /** Fired when a new date is selected. */
    @Output()
    readonly selectedDateChange: EventEmitter<D> = new EventEmitter<D>();

    /** Event thrown every time selected first or last date in range mode is changed */
    @Output()
    readonly selectedRangeDateChange: EventEmitter<DateRange<D>> = new EventEmitter<DateRange<D>>();

    /** Event thrown every time calendar active view is changed */
    @Output()
    readonly activeViewChange: EventEmitter<FdCalendarView> = new EventEmitter<FdCalendarView>();

    /** @hidden */
    private _datePickerValid = true;

    /**
     * @hidden core date-picker as child
     */
    @ViewChild(FdDatePickerComponent)
    fdDatePickerComponent: FdDatePickerComponent<D>;

    /**
     * Function used to disable certain dates in the calendar.
     * @param _ D
     */
    @Input()
    disableFunction = function (_: D): boolean {
        return false;
    };

    /**
     * Function used to disable certain dates in the calendar for the range start selection.
     * @param _ D
     */
    @Input()
    disableRangeStartFunction = function (_: D): boolean {
        return false;
    };

    /**
     * Function used to disable certain dates in the calendar for the range end selection.
     * @param _ D
     */
    @Input()
    disableRangeEndFunction = function (_: D): boolean {
        return false;
    };

    constructor(
        protected _changeDetectorRef: ChangeDetectorRef,
        @Optional() @Self() public ngControl: NgControl,
        @Optional() @Self() public ngForm: NgForm,
        @Optional() @SkipSelf() @Host() formField: FormField,
        @Optional() @SkipSelf() @Host() formControl: FormFieldControl<any>,
        @Optional() private _dateTimeAdapter: DatetimeAdapter<D>,
        @Optional() @Inject(DATE_TIME_FORMATS) private _dateTimeFormats: DateTimeFormats
    ) {
        super(_changeDetectorRef, ngControl, ngForm, formField, formControl);

        if (!this._dateTimeAdapter) {
            throw createMissingDateImplementationError('DateTimeAdapter');
        }
        if (!this._dateTimeFormats) {
            throw createMissingDateImplementationError('DATE_TIME_FORMATS');
        }
    }

    writeValue(value: D | DateRange<D>): void {
        super.writeValue(value);
        this._changeDetectorRef.detectChanges();
    }

    /**
     * validates date on date change.
     * @param value D | DateRange<D>
     */
    handleDateChange(value: D | DateRange<D>): void {
        this.value = value;
        this.onTouched();

        if (this.type === 'single' && !this.value && !this.allowNull) {
            this._datePickerValid = false;
        } else if (this.type === 'range' && !this.allowNull) {
            const dateRange = this.value as DateRange<D>;
            this._datePickerValid = !!dateRange.start;
        } else {
            this._datePickerValid = true;
        }

        this.stateChanges.next('date picker: handleDateInputChange');

        if (this.type === 'single') {
            this.handleSelectedDateChange(this.selectedDate);
        } else if (this.type === 'range') {
            this.handleSelectedRangeDateChange(this.selectedRangeDate);
        }
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Method that handles changes when popover is opened or closed.
     */
    handleOpenChange = (open: boolean): void => {
        this.isOpenChange.emit(open);
    };

    handleSelectedDateChange = (fdDate: D): void => {
        this.selectedDateChange.emit(fdDate);
    };

    handleSelectedRangeDateChange = (fdRangeDate: DateRange<D>): void => {
        this.selectedRangeDateChange.emit(fdRangeDate);
    };

    handleActiveViewChange = (fdCalendarView: FdCalendarView): void => {
        this.activeViewChange.emit(fdCalendarView);
    };
}

export function createMissingDateImplementationError(provider: string): Error {
    return Error(
        `FdpDatePicker: No provider found for ${provider}. You must import one of the following ` +
            `modules at your application root: FdDateModule, or provide a ` +
            `custom implementation.`
    );
}
