import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { 
        path: '', 
        component: DashboardComponent,
        children: [
            { path: 'affiliates', loadChildren: '@encore/pmp/affiliates#PmpAffiliatesModule', outlet: 'pmp' },
            { path: 'affiliates', loadChildren: '@encore/pmi/reports#PmiReportsModule', outlet: 'pmi' },
            { path: 'affiliates', loadChildren: '@encore/nrg/levels#NrgLevelsModule', outlet: 'nrg' }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}