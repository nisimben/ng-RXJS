import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2OperatorComponent } from './c2-operator.component';

describe('C2OperatorComponent', () => {
  let component: C2OperatorComponent;
  let fixture: ComponentFixture<C2OperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2OperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2OperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
