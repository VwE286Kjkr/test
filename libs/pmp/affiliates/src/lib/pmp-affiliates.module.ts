import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@encore/material';

import { AffiliatesComponent } from './affiliates/affiliates.component';

import { AffiliatesRoutingModule } from './pmp-affiliates.routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AffiliatesRoutingModule
  ],
  declarations: [AffiliatesComponent]
})
export class PmpAffiliatesModule { }
