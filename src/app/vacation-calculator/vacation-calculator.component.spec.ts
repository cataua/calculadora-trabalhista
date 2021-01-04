import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationCalculatorComponent } from './vacation-calculator.component';

describe('VacationCalculatorComponent', () => {
  let component: VacationCalculatorComponent;
  let fixture: ComponentFixture<VacationCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
