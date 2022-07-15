import { People } from './../../interfaces/people';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {

  // PARAMS
  @Input() paramOfcolumns: Array<string> = []
  @Input() paramOfpeopleList: People = []

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public sendToEditUser(id: number): void {
    console.log('[sendToEditUser]', id)
    // this.router.navigate(
    //   ['adicionar-pessoa'],
    //   {
    //     relativeTo: this.currentRoute,
    //     queryParams: {
    //       id
    //     }
    //   });
  }

  public sendToDeleteUser(id: number): void {
    this.router.navigate([`pessoas/deletar-pessoa/${id}`]);
  }

}
