import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestarFormComponent } from './regestar-form.component';

describe('RegestarFormComponent', () => {
  let component: RegestarFormComponent;
  let fixture: ComponentFixture<RegestarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
