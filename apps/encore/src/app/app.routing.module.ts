import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AppFrameComponent } from './app-frame/app-frame.component';
import { authenticationRoutes } from '@encore/authentication';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'account', children: authenticationRoutes },
    { path: 'app', loadChildren: './app-frame/app-frame.module#AppFrameModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}