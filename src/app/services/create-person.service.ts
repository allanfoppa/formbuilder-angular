import { Person } from './../interfaces/people';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { createPersonEndpoint } from '../constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CreatePersonService {

  constructor(
    private http: HttpClient
  ) { }

  public createPerson(payload: Object): Observable<Person> {
    return this.http.post<Person>(`${createPersonEndpoint}`, payload);
  }
}
