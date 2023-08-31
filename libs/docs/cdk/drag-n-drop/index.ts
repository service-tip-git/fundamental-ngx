import { Routes } from '@angular/router';
import { API_FILES } from '@fundamental-ngx/docs/cdk/shared';
import { ApiComponent, ApiDocsService, currentComponentProvider } from '@fundamental-ngx/docs/shared';

export const dndRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dnd-header/dnd-header.component').then((m) => m.DndHeaderComponent),
        providers: [currentComponentProvider('drag-n-drop'), ApiDocsService],
        children: [
            {
                path: '',
                loadComponent: () => import('./dnd-docs.component').then((m) => m.DndDocsComponent)
            },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.dnd } }
        ]
    }
];
