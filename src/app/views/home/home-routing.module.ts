import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from 'src/app/routes/homeRoutes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
