import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MediaComponent } from './media.component';

import { MaterialModule } from '@encore/material';

export const PmpMediaRoutes: Route[] = [
  { path: '', component: MediaComponent }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      ...PmpMediaRoutes
    ])
  ],
  declarations: [MediaComponent]
})
export class PmpMediaModule {}
