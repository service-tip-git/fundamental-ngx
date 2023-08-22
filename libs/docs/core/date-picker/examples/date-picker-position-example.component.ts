import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
    DATE_TIME_FORMATS,
    DatetimeAdapter,
    FD_DATETIME_FORMATS,
    FdDate,
    FdDatetimeAdapter
} from '@fundamental-ngx/core/datetime';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from '@fundamental-ngx/core/date-picker';

@Component({
    selector: 'fd-date-picker-position-example',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: ` <fd-date-picker placement="top-end" [(ngModel)]="date"></fd-date-picker>
        <br />
        <div>Selected Date: {{ date?.toDateString() || 'null' }}</div>`,
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
    standalone: true,
    imports: [DatePickerComponent, FormsModule]
})
export class DatePickerPositionExampleComponent {
    date: Nullable<FdDate> = FdDate.getNow();
}
