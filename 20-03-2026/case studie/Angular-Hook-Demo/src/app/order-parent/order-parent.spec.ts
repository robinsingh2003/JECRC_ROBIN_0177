import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderParentComponent } from './order-parent';

describe('OrderParentComponent', () => {
  let component: OrderParentComponent;
  let fixture: ComponentFixture<OrderParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderParentComponent], // ✅ standalone import
    }).compileComponents();

    fixture = TestBed.createComponent(OrderParentComponent);
    component = fixture.componentInstance;

    fixture.detectChanges(); // ✅ important
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});