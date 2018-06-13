import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppFrameComponent } from './app-frame.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AppFrameComponent,
        children: [
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'affiliates', loadChildren: '@encore/pmp/affiliates#PmpAffiliatesModule' },
            { path: 'media', loadChildren: '@encore/pmp/media#PmpMediaModule' },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppFrameRoutingModule { }