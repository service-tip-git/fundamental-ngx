import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/core/shared';
import { ApiComponent, SharedDocumentationPageModule, currentComponentProvider } from '@fundamental-ngx/docs/shared';
import { CalendarDocsComponent } from './calendar-docs.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarI18nMomentExampleComponent } from './examples/calendar--i18n-moment-example.component';
import { CalendarFormExamplesComponent } from './examples/calendar-form-example/calendar-form-example.component';
import { CalendarI18nExampleComponent } from './examples/calendar-i18n-example.component';
import { CalendarMondayStartExampleComponent } from './examples/calendar-monday-start-example.component';
import { CalendarProgrammaticallyChangeExampleComponent } from './examples/calendar-programmatically-change-example.component';
import { CalendarRangeExampleComponent } from './examples/calendar-range-example.component';
import { CalendarSingleExampleComponent } from './examples/calendar-single-example.component';

import { CalendarModule } from '@fundamental-ngx/core/calendar';
import { CheckboxModule } from '@fundamental-ngx/core/checkbox';
import { FdDatetimeModule } from '@fundamental-ngx/core/datetime';
import { DialogModule } from '@fundamental-ngx/core/dialog';
import { FormModule } from '@fundamental-ngx/core/form';
import { SegmentedButtonModule } from '@fundamental-ngx/core/segmented-button';
import { SelectModule } from '@fundamental-ngx/core/select';
import { CalendarDisabledNavigationButtonsExampleComponent } from './examples/calendar-disabled-navigation-buttons-example/calendar-disabled-navigation-buttons-example.component';
import { CalendarGridExampleComponent } from './examples/calendar-grid-example/calendar-grid-example.component';
import { CalendarMarkHoverComponent } from './examples/calendar-mark-hover/calendar-mark-hover.component';
import { CalendarMobileExampleComponent } from './examples/calendar-mobile-example/calendar-mobile-example.component';
import { CalendarOptionsExampleComponent } from './examples/calendar-options-example/calendar-options-example.component';
import { CalendarSpecialDayExampleComponent } from './examples/calendar-special-day-example/calendar-special-day-example.component';

const routes: Routes = [
    {
        path: '',
        component: CalendarHeaderComponent,
        children: [
            { path: '', component: CalendarDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.calendar } }
        ]
    }
];

@NgModule({
    imports: [
        FormModule,
        DialogModule,
        CheckboxModule,
        FdDatetimeModule,
        CalendarModule,
        SelectModule,
        SegmentedButtonModule,
        SharedDocumentationPageModule,
        RouterModule.forChild(routes),
        CalendarDocsComponent,
        CalendarHeaderComponent,
        CalendarRangeExampleComponent,
        CalendarFormExamplesComponent,
        CalendarDisabledNavigationButtonsExampleComponent,
        CalendarSingleExampleComponent,
        CalendarMondayStartExampleComponent,
        CalendarI18nExampleComponent,
        CalendarI18nMomentExampleComponent,
        CalendarProgrammaticallyChangeExampleComponent,
        CalendarMobileExampleComponent,
        CalendarOptionsExampleComponent,
        CalendarGridExampleComponent,
        CalendarSpecialDayExampleComponent,
        CalendarMarkHoverComponent
    ],
    exports: [RouterModule],
    providers: [currentComponentProvider('calendar')]
})
export class CalendarDocsModule {}
