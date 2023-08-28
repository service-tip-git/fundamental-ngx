import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BusyIndicatorModule } from '@fundamental-ngx/core/busy-indicator';
import { TableModule } from '@fundamental-ngx/core/table';
import { I18nDocsComponent } from './i18n-docs.component';

@NgModule({
    imports: [CommonModule, BusyIndicatorModule, TableModule, I18nDocsComponent],
    exports: [I18nDocsComponent]
})
export class I18nDocsModule {}
