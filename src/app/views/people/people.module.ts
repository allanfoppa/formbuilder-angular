import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PeopleTableComponent } from '../../components/people-table/people-table.component';
import { MaterialPeopleModule } from '../../shared/material/material-people.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleTableComponent,
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MaterialPeopleModule
  ],
})
export class PeopleModule { }
