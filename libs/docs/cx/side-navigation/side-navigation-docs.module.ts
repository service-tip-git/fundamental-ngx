import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModule, InputGroupModule, ProductSwitchModule, ShellbarModule } from '@fundamental-ngx/core';
import { CxSideNavigationModule } from '@fundamental-ngx/cx/side-navigation';
import { API_FILES } from '@fundamental-ngx/docs/cx/shared';
import { ApiComponent, SharedDocumentationPageModule, currentComponentProvider } from '@fundamental-ngx/docs/shared';
import { PlatformSearchFieldModule } from '@fundamental-ngx/platform/search-field';
import { SideNavigationCozyWideIcon3LevelExampleComponent } from './examples/side-navigation-cozy-wide-icon-3-level-example.component';
import { SideNavigationCozyWideTextOnly1LevelExampleComponent } from './examples/side-navigation-cozy-wide-text-only-1-level-example.component';
import { SideNavigationCozyWideTextOnly3LevelExampleComponent } from './examples/side-navigation-cozy-wide-text-only-3-level-example.component';
import { SideNavigationDynamicWidthExampleComponent } from './examples/side-navigation-dynamic-width-example.component';
import { SideNavigationCollapseExampleComponent } from './examples/side-navigation-expand-collapse-example.component';
import { SideNavigationFilterExampleComponent } from './examples/side-navigation-filter-example.component';
import { SideNavigationMobileExampleComponent } from './examples/side-navigation-mobile-example.component';
import { SideNavigationNarrowExampleComponent } from './examples/side-navigation-narrow-example.component';
import { SideNavigationOverflowExampleComponent } from './examples/side-navigation-overflow-example.component';
import { SideNavigationShellbarExampleComponent } from './examples/side-navigation-shellbar-example.component';
import { SideNavigationWideIcon1LevelExampleComponent } from './examples/side-navigation-wide-icon-1-level-example.component';
import { SideNavigationDocsComponent } from './side-navigation-docs.component';
import { SideNavigationHeaderComponent } from './side-navigation-header/side-navigation-header.component';

const routes: Routes = [
    {
        path: '',
        component: SideNavigationHeaderComponent,
        children: [
            { path: '', component: SideNavigationDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.sideNavigation } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        CxSideNavigationModule,
        InputGroupModule,
        FormModule,
        ShellbarModule,
        PlatformSearchFieldModule,
        ProductSwitchModule,
        SideNavigationCozyWideTextOnly1LevelExampleComponent,
        SideNavigationCozyWideTextOnly3LevelExampleComponent,
        SideNavigationNarrowExampleComponent,
        SideNavigationFilterExampleComponent,
        SideNavigationOverflowExampleComponent,
        SideNavigationShellbarExampleComponent,
        SideNavigationMobileExampleComponent,
        SideNavigationWideIcon1LevelExampleComponent,
        SideNavigationCozyWideIcon3LevelExampleComponent,
        SideNavigationDynamicWidthExampleComponent,
        SideNavigationDocsComponent,
        SideNavigationCollapseExampleComponent,
        SideNavigationHeaderComponent
    ],
    exports: [RouterModule],
    providers: [currentComponentProvider('side-navigation')]
})
export class SideNavigationDocsModule {}
