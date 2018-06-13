import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppFrameComponent } from './app-frame.component';
import { AppFrameRoutingModule } from './app-frame.routing.module';

import { MaterialModule } from '@encore/material';

@NgModule({
    declarations: [
        AppFrameComponent
    ],
    imports: [
        MaterialModule,
        AppFrameRoutingModule
    ],
    providers: []
})
export class AppFrameModule { }
