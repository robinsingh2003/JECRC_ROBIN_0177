import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeview } from './employeeview';

describe('Employeeview', () => {
  let component: Employeeview;
  let fixture: ComponentFixture<Employeeview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeeview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeeview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
