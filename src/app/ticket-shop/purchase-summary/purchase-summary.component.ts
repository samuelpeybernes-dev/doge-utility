import { Component, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { PurchaseSummary } from '../../interfaces/purchase-summary.interface';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'purchase-summary',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './purchase-summary.component.html',
  styleUrl: './purchase-summary.component.css'
})
export class PurchaseSummaryComponent {
  @Input() showPurchaseSummary: boolean;
  @Input() purchaseSummary: PurchaseSummary;
  @Output() closePurchaseSummary = new EventEmitter<boolean>();

  closeDialogAndReset() {
    this.showPurchaseSummary = false;
    this.closePurchaseSummary.emit();
  }

  
}
