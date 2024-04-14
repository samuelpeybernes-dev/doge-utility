import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { SpecificCryptoPriceService } from '../shared/specific-crypto-price.service';
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
    this.cryptoPrice.fetchSpecificCrypto("dogecoin").subscribe({
      next: data => {
        this.getTotalPrice(data.priceUsd);
      },
      error: error => {
        console.error("Une erreur s'est produite:", error);
      }
    });
  }

  getTotalPrice(cryptoPrice: number) {
    let nbrTickets = this.purchaseSummary.nbrTickets;
    let priceCalculated = (4 * nbrTickets) / cryptoPrice;

    if(nbrTickets < 2 ){
      this.purchaseSummary.totalDogePrice = priceCalculated
      this.purchaseSummary.totalUsdPrice = this.currencyFormatService.formatUsdPrice( 4 * nbrTickets);
    }else{ 
      this.purchaseSummary.totalDogePrice = priceCalculated / 100 * 95;
      this.purchaseSummary.totalUsdPrice =  this.currencyFormatService.formatUsdPrice((4 * nbrTickets) / 100 * 95 );
    }
  }

  showDialog() {
    this.showPurchaseSummary = true;
  }
  closeDialog() {
    this.showPurchaseSummary = false;
  }
}
