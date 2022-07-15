import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes } from 'src/app/routes/deletePersonRoutes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletePersonRoutingModule { }
