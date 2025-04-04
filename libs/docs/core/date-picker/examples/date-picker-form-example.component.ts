import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerComponent } from '@fundamental-ngx/core/date-picker';
import {
    DATE_TIME_FORMATS,
    DatetimeAdapter,
    FD_DATETIME_FORMATS,
    FdDate,
    FdDatetimeAdapter,
    FdDatetimeModule
} from '@fundamental-ngx/core/datetime';
import { FormItemComponent, FormLabelComponent } from '@fundamental-ngx/core/form';

@Component({
    selector: 'fd-date-picker-form-example',
    template: `
        <form [formGroup]="customForm" class="flex-form">
            <div>
                <div fd-form-item>
                    <label for="fd-date-picker-form-example-1" fd-form-label [required]="true">Date Picker</label>
                    <fd-date-picker
                        [state]="isValid() ? 'success' : 'error'"
                        [message]="isValid() ? 'This is valid Date picker' : 'This is invalid Date picker'"
                        [required]="true"
                        [preventScrollOnFocus]="true"
                        formControlName="date"
                        inputId="fd-date-picker-form-example-1"
                    >
                    </fd-date-picker>
                </div>
                <br />
                <small>
                    Touched: {{ customForm.controls.date.touched }}<br />
                    Dirty: {{ customForm.controls.date.dirty }}<br />
                    Valid: {{ customForm.controls.date.valid }}<br />
                    Selected Date:
                    {{ customForm.controls.date.value?.toDateString() || 'null' }}
                </small>
            </div>
            <br />
            <br />

            <div fd-form-item>
                <label for="fd-date-picker-form-example-2" fd-form-label>Disabled Date Picker</label>
                <fd-date-picker
                    state="information"
                    message="This is disabled DatePicker"
                    formControlName="disabledDate"
                    inputId="fd-date-picker-form-example-2"
                >
                </fd-date-picker>
                <br />
            </div>

            <small>
                Touched: {{ customForm.controls.disabledDate.touched }}<br />
                Dirty: {{ customForm.controls.disabledDate.dirty }}<br />
                Valid: {{ customForm.controls.disabledDate.valid }}<br />
                Disabled: {{ customForm.controls.disabledDate.disabled }} <br />
                Selected Date:
                {{ customForm.controls.disabledDate.value?.toDateString() || 'null' }}
            </small>
        </form>
    `,
    providers: [
        {
            provide: DatetimeAdapter,
            useClass: FdDatetimeAdapter
        },
        {
            provide: DATE_TIME_FORMATS,
            useValue: FD_DATETIME_FORMATS
        }
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        FormItemComponent,
        FormLabelComponent,
        DatePickerComponent,
        FdDatetimeModule
    ]
})
export class DatePickerFormExampleComponent {
    customForm = new FormGroup({
        date: new FormControl(FdDate.getNow()),
        disabledDate: new FormControl({ value: FdDate.getNow(), disabled: true })
    });

    isValid(): boolean {
        return !!this.customForm.get('date')?.valid;
    }
}
