import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  exports: [
    MatTableModule,
    MatButtonModule
  ]
})
export class MaterialPeopleModule { }
