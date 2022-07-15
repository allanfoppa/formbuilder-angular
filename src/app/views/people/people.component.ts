import { Component, OnInit } from '@angular/core';
import { displayedColumns } from 'src/app/components/people-table/settings/columns/columns.settings';

import { FetchPeopleService } from '../../services/fetch-people.service';
import { People } from './../../interfaces/people';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public columns = displayedColumns
  public peopleList: People = []

  constructor(
    private fetchPeopleService: FetchPeopleService
  ) {}

  ngOnInit(): void {
    this.onFetchPeople()
  }

  public onFetchPeople(): void {
    this.fetchPeopleService.fetchPeople()
      // .pipe(
        // tap(data => console.log('[DATTAAAAAA]', data)),
        // distinctUntilChanged()
      // )
      .subscribe({
        next: (v) => this.peopleList = v,
        error: (e) => console.error('aqui', e),
        complete: () => console.info('complete')
      });
  }

  // Error handling
  // handleError(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // }
}
