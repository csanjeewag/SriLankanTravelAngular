import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSignupComponent } from './register-signup.component';

describe('RegisterSignupComponent', () => {
  let component: RegisterSignupComponent;
  let fixture: ComponentFixture<RegisterSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
