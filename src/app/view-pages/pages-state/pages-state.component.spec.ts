import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesStateComponent } from './pages-state.component';

describe('PagesStateComponent', () => {
  let component: PagesStateComponent;
  let fixture: ComponentFixture<PagesStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
