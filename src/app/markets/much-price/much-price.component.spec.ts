import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuchPriceComponent } from './much-price.component';

describe('MuchPriceComponent', () => {
  let component: MuchPriceComponent;
  let fixture: ComponentFixture<MuchPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuchPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuchPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
