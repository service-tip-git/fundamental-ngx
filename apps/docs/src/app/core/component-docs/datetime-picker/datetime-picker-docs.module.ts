import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { API_FILES } from '../../api-files';
import { DatetimePickerHeaderComponent } from './datetime-picker-header/datetime-picker-header.component';
import { DatetimePickerDocsComponent } from './datetime-picker-docs.component';
import { DatetimePickerComplexI18nExampleComponent } from './examples/datetime-picker-complex-i18n-example/datetime-picker-complex-i18n-example.component';
import { DatetimeExampleComponent } from './examples/datetime-example/datetime-example.component';
import { DatetimeProgramExampleComponent } from './examples/datetime-program-example/datetime-program-example.component';
import { DatetimeFormatExampleComponent } from './examples/datetime-format-example/datetime-format-example.component';
import { DatetimeFormExampleComponent } from './examples/datetime-form-example/datetime-form-example.component';
import { DateTimePickerUpdateOnBlurExampleComponent } from './examples/datetime-picker-update-on-blur-example/datetime-picker-update-on-blur-example.component';
import { DatetimePickerAllowNullExampleComponent } from './examples/datetime-allow-null-example/datetime-allow-null-example.component';
import { DatetimeDisabledExampleComponent } from './examples/datetime-disabled-example/datetime-disabled-example.component';
import { SharedDocumentationPageModule } from '../../../documentation/shared-documentation-page.module';
import { FormModule } from '@fundamental-ngx/core/form';
import { SelectModule } from '@fundamental-ngx/core/select';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { FdDatetimePipesModule } from '@fundamental-ngx/core/datetime';
import { DayjsDatetimeAdapterModule } from '@fundamental-ngx/datetime-adapter';
import { DatetimePickerModule } from '@fundamental-ngx/core/datetime-picker';
import { SegmentedButtonModule } from '@fundamental-ngx/core/segmented-button';
import { PipeModule } from '@fundamental-ngx/core/utils';

const routes: Routes = [
    {
        path: '',
        component: DatetimePickerHeaderComponent,
        children: [
            { path: '', component: DatetimePickerDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.datetimePicker } }
        ]
    }
];

@NgModule({
    imports: [
        FormModule,
        SelectModule,
        InputGroupModule,
        FdDatetimePipesModule,
        DayjsDatetimeAdapterModule,
        DatetimePickerModule,
        SegmentedButtonModule,
        SharedDocumentationPageModule,
        RouterModule.forChild(routes),
        PipeModule
    ],
    exports: [RouterModule],
    declarations: [
        DatetimeExampleComponent,
        DatetimePickerDocsComponent,
        DatetimeFormExampleComponent,
        DateTimePickerUpdateOnBlurExampleComponent,
        DatetimePickerHeaderComponent,
        DatetimeFormatExampleComponent,
        DatetimeProgramExampleComponent,
        DatetimeDisabledExampleComponent,
        DatetimePickerAllowNullExampleComponent,
        DatetimePickerComplexI18nExampleComponent
    ]
})
export class DatetimePickerDocsModule {}
