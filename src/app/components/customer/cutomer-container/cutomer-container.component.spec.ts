import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerContainerComponent } from './cutomer-container.component';

describe('CutomerContainerComponent', () => {
  let component: CutomerContainerComponent;
  let fixture: ComponentFixture<CutomerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
