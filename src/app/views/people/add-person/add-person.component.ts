import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreatePersonService } from './../../../services/create-person.service';
import { formFields } from './settings/payload';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent implements OnInit, OnDestroy {

  public formFields = formFields

  constructor(
    private createPersonService: CreatePersonService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.clearForm()
  }

  public onSubmit() {
    this.createPersonService.createPerson(this.formFields.value).subscribe({
      next: (v) => this.clearForm(),
      error: (e) => console.error('aqui2', e),
      complete: () => this.route.navigate(['/pessoas'])
    });
  }

  public clearForm(): void {
    this.formFields.reset()
  }

}
