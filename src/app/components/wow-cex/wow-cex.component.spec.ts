import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowCexComponent } from './wow-cex.component';

describe('WowCexComponent', () => {
  let component: WowCexComponent;
  let fixture: ComponentFixture<WowCexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WowCexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WowCexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
