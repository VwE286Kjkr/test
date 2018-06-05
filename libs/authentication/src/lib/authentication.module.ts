import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@encore/material';

export const authenticationRoutes: Route[] = [{ path: '', component: LoginPageComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([...authenticationRoutes]),
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class AuthenticationModule { }
