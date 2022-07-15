import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialAddPersonModule } from './../../../shared/material/material-add-person.module';
import { AddPersonRoutingModule } from './add-person-routing.module';
import { AddPersonComponent } from './add-person.component';

@NgModule({
  declarations: [
    AddPersonComponent
  ],
  imports: [
    CommonModule,
    AddPersonRoutingModule,
    MaterialAddPersonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: []
})
export class AddPersonModule { }
