import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    DATE_TIME_FORMATS,
    DatetimeAdapter,
    DateTimeFormats,
    FD_DATETIME_FORMATS,
    FdDate,
    FdDatetimeAdapter,
    FdDatetimePipesModule
} from '@fundamental-ngx/core/datetime';
import { DatetimePickerComponent } from '@fundamental-ngx/core/datetime-picker';

/**
 * FD_DATETIME_FORMATS is based on Intl.DateTimeFormat,
 * see the doc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */

export const CUSTOM_FD_DATETIME_FORMATS: DateTimeFormats = {
    ...FD_DATETIME_FORMATS,
    display: {
        ...FD_DATETIME_FORMATS.display,
        dateTimeInput: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }
    }
};

@Component({
    selector: 'fd-datetime-format-example',
    templateUrl: './datetime-format-example.component.html',
    providers: [
        {
            provide: DatetimeAdapter,
            useClass: FdDatetimeAdapter
        },
        {
            provide: DATE_TIME_FORMATS,
            useValue: CUSTOM_FD_DATETIME_FORMATS
        }
    ],
    standalone: true,
    imports: [DatetimePickerComponent, FormsModule, FdDatetimePipesModule]
})
export class DatetimeFormatExampleComponent {
    date = FdDate.getNow();
    specificDateTimeFormat = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
}
