import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rsjs } from './rsjs';

describe('Rsjs', () => {
  let component: Rsjs;
  let fixture: ComponentFixture<Rsjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rsjs],
    }).compileComponents();

    fixture = TestBed.createComponent(Rsjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
