import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonButtonComponent } from './add-person-button.component';

describe('AddPersonButtonComponent', () => {
  let component: AddPersonButtonComponent;
  let fixture: ComponentFixture<AddPersonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
