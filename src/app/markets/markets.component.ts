import { Component } from '@angular/core';
import { MuchPriceComponent } from './much-price/much-price.component';
import { WowCexComponent } from './wow-cex/wow-cex.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'markets',
  standalone: true,
  imports: [HeaderComponent, MuchPriceComponent, WowCexComponent],
  templateUrl: './markets.component.html',
  styleUrl: './markets.component.css'
})
export class MarketsComponent {
  imageUrl: string = "https://cryptoast.fr/wp-content/uploads/2024/04/jo-2024-dogecoin-doge-devient-partenaires-stade-france.jpg"
}
