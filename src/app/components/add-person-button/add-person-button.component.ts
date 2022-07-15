import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-add-person-button',
  templateUrl: './add-person-button.component.html',
  styleUrls: ['./add-person-button.component.css']
})
export class AddPersonButtonComponent implements OnInit {

  public activeRoute: any = ''

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute = this.router
  }

}
