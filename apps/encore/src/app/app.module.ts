import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppFrameModule } from './app-frame/app-frame.module';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from '@encore/material';

import { AuthenticationModule } from '@encore/authentication';
import { AuthorizationModule } from '@encore/authorization';
import { LogServiceModule } from '@encore/log-service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    AppRoutingModule,
    MaterialModule,
    AuthenticationModule,
    AuthorizationModule,
    LogServiceModule,
    AppFrameModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
