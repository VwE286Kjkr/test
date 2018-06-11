import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { DashboardRoutingModule } from './dashboard.routing.module';

import { DashboardComponent } from './dashboard.component';

import { MaterialModule } from '@encore/material';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        DashboardRoutingModule,
        MaterialModule,
    ],
    providers: []
})
export class DashboardModule { }
