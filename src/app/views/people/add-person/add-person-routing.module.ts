import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from 'src/app/routes/addPersonRoutes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPersonRoutingModule { }
