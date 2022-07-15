import { FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder()

export const formFields = fb.group({
  firstName: ['', [ Validators.required, Validators.minLength(2) ]],
  lastName: [''],
  address: fb.group({
    street: ['', [ Validators.required ]],
    city: ['', [ Validators.required ]],
    state: ['', [ Validators.required ]],
    zip: ['', [ Validators.required ]]
  })
});

