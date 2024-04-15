import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {NgFor, NgClass} from "@angular/common";
import { Price as PriceData } from '../../interfaces/price.interface';
import { CryptoPricesService } from '../shared/crypto-prices.service';
import { CurrencyFormatService } from '../../shared/currency-format.service';

@Component({
  selector: 'much-price',
  imports: [NgFor, NgClass],
  standalone: true,
  templateUrl: './much-price.component.html',
  styleUrl: './much-price.component.css'
})
export class MuchPriceComponent {
  muchPrices: PriceData[] = [];

  constructor(private CryptoPrices: CryptoPricesService, public currencyFormatService: CurrencyFormatService) {}

  ngOnInit() {
    this.fetchData(); 
  }

  fetchData() {
    this.CryptoPrices.fetchCryptoPrices(['bitcoin', 'dogecoin', 'ethereum']).subscribe({
        next: data => {
          this.muchPrices = data;
        },
        error:  error => {
          console.error("Une erreur s'est produite:", error);
        }
      });
  }

  showLogo(price: PriceData) {
    switch (price.name) {
      case 'Ethereum':
        return '../assets/img/ethereum-logo.svg';
      case 'Bitcoin':
        return 'assets/img/bitcoin-logo.svg';
      case 'Dogecoin':
        return 'assets/img/dogecoin-logo.svg';
      default:
        return 'assets/img/dogecoin-logo.svg';
    }
  }
}