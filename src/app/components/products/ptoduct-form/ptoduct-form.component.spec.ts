import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtoductFormComponent } from './ptoduct-form.component';

describe('PtoductFormComponent', () => {
  let component: PtoductFormComponent;
  let fixture: ComponentFixture<PtoductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtoductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
