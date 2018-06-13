import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliatesRoutingModule } from './affiliates-routing.module';
import { AffiliatesComponent } from './affiliates.component';

@NgModule({
  imports: [
    CommonModule,
    AffiliatesRoutingModule
  ],
  declarations: [AffiliatesComponent]
})
export class AffiliatesModule { }
