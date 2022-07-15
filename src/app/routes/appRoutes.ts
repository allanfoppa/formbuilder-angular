
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../views/home/home.module')
        .then((m) => m.HomeModule),
  },
  {
    path: 'pessoas',
    loadChildren: () =>
      import('../views/people/people.module')
        .then((m) => m.PeopleModule),
  },
  {
    path: 'adicionar-pessoa',
    loadChildren: () =>
      import('../views/people/add-person/add-person.module')
        .then((m) => m.AddPersonModule),
  },
  {
    path: 'pessoas/deletar-pessoa/:id',
    loadChildren: () =>
      import('../views/people/delete-person/delete-person.module')
        .then((m) => m.DeletePersonModule),
  },
];
