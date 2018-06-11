import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { WelcomeComponent } from './welcome/welcome.component';

import { MaterialModule } from '@encore/material';

import { AuthenticationModule, authenticationRoutes } from '@encore/authentication';
import { AuthorizationModule } from '@encore/authorization';
import { LogServiceModule } from '@encore/log-service';
import { NrgBadgesModule } from '@encore/nrg/badges';
import { NrgLevelsModule } from '@encore/nrg/levels';
import { PmiDashboardModule } from '@encore/pmi/dashboard';
import { PmiReportsModule } from '@encore/pmi/reports';
import { PmpAffiliatesModule } from '@encore/pmp/affiliates';
import { PmpMediaModule } from '@encore/pmp/media';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'account', children: authenticationRoutes },
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes),
    MaterialModule,
    AuthenticationModule,
    AuthorizationModule,
    LogServiceModule,
    NrgBadgesModule,
    NrgLevelsModule,
    PmiDashboardModule,
    PmiReportsModule,
    PmpAffiliatesModule,
    PmpMediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
