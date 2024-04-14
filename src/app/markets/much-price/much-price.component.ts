import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {NgFor, NgClass} from "@angular/common";
import { Price as PriceData } from '../../interfaces/price.interface';

@Component({
  selector: 'much-price',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgClass],
  standalone: true,
  templateUrl: './much-price.component.html',
  styleUrl: './much-price.component.css'
})
export class MuchPriceComponent {
  @Input() muchPrices: PriceData[] = [];

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