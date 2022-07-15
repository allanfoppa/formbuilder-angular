import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeletePersonRoutingModule } from './delete-person-routing.module';
import { DeletePersonComponent } from './delete-person.component';


@NgModule({
  declarations: [
    DeletePersonComponent
  ],
  imports: [
    CommonModule,
    DeletePersonRoutingModule
  ]
})
export class DeletePersonModule { }
