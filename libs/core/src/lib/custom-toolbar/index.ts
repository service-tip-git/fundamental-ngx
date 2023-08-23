import { ContentDensityModule } from '@fundamental-ngx/core/content-density';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ContentDensityModule],
    exports: [ContentDensityModule]
})
export class CustomToolbarModule {}
