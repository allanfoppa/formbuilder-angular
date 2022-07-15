import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  @Input() public paramOfLinks = ['']

  constructor() { }

  ngOnInit(): void {
  }

}
