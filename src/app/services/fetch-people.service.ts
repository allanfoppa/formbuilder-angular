import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { fetchPeopleEndpoint } from './../constants/endpoints';

import { People } from './../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class FetchPeopleService {

  constructor(
    private http: HttpClient
  ) { }

  public fetchPeople(): Observable<People> {
    return this.http.get<People>(`${fetchPeopleEndpoint}`);
  }

  // public updateEmployee(employee: Employee): Observable<Employee> {
  //   return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
  // }

  // public deleteEmployee(employeeId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  // }
}
