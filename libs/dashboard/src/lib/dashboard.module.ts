import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from '@encore/material';

export const dashboardRoutes: Route[] = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([...dashboardRoutes]),
    MaterialModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
