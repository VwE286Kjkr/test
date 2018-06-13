import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AffiliatesComponent } from './affiliates/affiliates.component';

export const PmpAffiliatesRoutes: Route[] = [
  { path: '', component: AffiliatesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(PmpAffiliatesRoutes)],
  exports: [RouterModule]
})
export class AffiliatesRoutingModule {}
