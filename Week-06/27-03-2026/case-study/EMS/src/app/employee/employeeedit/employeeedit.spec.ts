import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeedit } from './employeeedit';

describe('Employeeedit', () => {
  let component: Employeeedit;
  let fixture: ComponentFixture<Employeeedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeeedit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeeedit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
