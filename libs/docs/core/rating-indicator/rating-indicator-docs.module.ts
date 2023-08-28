import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { API_FILES } from '@fundamental-ngx/docs/core/shared';
import { ApiComponent, currentComponentProvider, SharedDocumentationPageModule } from '@fundamental-ngx/docs/shared';
import { RatingIndicatorDocsHeaderComponent } from './rating-indicator-docs-header/rating-indicator-docs-header.component';
import { RatingIndicatorDocsComponent } from './rating-indicator-docs.component';

import { RatingIndicatorModule } from '@fundamental-ngx/core/rating-indicator';
import { examples } from './examples';

const routes: Routes = [
    {
        path: '',
        component: RatingIndicatorDocsHeaderComponent,
        children: [
            { path: '', component: RatingIndicatorDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.ratingIndicator } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        RatingIndicatorModule,
        RatingIndicatorDocsComponent,
        RatingIndicatorDocsHeaderComponent,
        ...examples
    ],
    exports: [RouterModule],
    providers: [currentComponentProvider('rating-indicator')]
})
export class RatingIndicatorDocsModule {}
