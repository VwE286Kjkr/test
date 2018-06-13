import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppFrameComponent } from './app-frame.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AppFrameComponent,
        children: [
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'affiliates', loadChildren: '../affiliates/affiliates.module#AffiliatesModule' },
            { path: 'media', loadChildren: '../media/media.module#MediaModule' },
            { path: 'customers', loadChildren: '../customers/customers.module#CustomersModule' },
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