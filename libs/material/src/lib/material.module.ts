import { NgModule } from '@angular/core';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatTableModule,
  MatSelectModule,
} from '@angular/material';

const MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatTableModule,
  MatSelectModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule {}
