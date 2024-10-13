import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { SpecificCryptoPriceService } from '../../shared/specific-crypto.service';
import { PurchaseSummaryComponent } from '../purchase-summary/purchase-summary.component';
import { PurchaseSummary } from '../../interfaces/purchase-summary.interface';
import { CurrencyFormatService } from '../../shared/currency-format.service';

@Component({
  selector: 'shop-card',
  standalone: true,
  imports: [PurchaseSummaryComponent, ButtonModule, InputNumberModule, FormsModule,],
  templateUrl: './shop-card.component.html',
  styleUrl: './shop-card.component.css'
})

export class ShopCardComponent {
  purchaseSummary: PurchaseSummary = {
    totalUsdPrice: '',
    totalDogePrice: 0,
    nbrTickets: 1
  };
  showPurchaseSummary: boolean = false;

  constructor(private cryptoPrice: SpecificCryptoPriceService, private currencyFormatService: CurrencyFormatService) {}

  ngOnInit() {
    this.fetchData(); 
  }

  fetchData() {
    this.cryptoPrice.fetchPrice("dogecoin").subscribe({
      next: data => {
        this.getTotalPrice(data.priceUsd);
      },
      error: error => {
        console.error("Une erreur s'est produite:", error);
      }
    });
  }

  getTotalPrice(cryptoPrice: number) {
    const { nbrTickets } = this.purchaseSummary;
    const totalPrice = 4 * nbrTickets;
    const discountPercentage = nbrTickets >= 2 ? 0.95 : 1;
  
    this.purchaseSummary.totalDogePrice = (totalPrice / cryptoPrice) * discountPercentage;
    this.purchaseSummary.totalUsdPrice = this.currencyFormatService.formatUsdPrice(totalPrice * discountPercentage);
  }

  showDialog() {
    this.showPurchaseSummary = true;
  }
  closeDialog() {
    this.showPurchaseSummary = false;
  }
}
