import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
  ]
})
export class MaterialAppModule { }
