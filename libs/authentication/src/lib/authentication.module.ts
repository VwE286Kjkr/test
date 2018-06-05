import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

export const authenticationRoutes: Route[] = [{ path: '', component: LoginPageComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([...authenticationRoutes])
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class AuthenticationModule { }
