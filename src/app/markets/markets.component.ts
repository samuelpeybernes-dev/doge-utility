import { Component } from '@angular/core';
import { CryptoPricesService } from './shared/crypto-prices.service';
import { CexService} from './shared/cex.service';
import { Cex as ExchangeData} from '../interfaces/cex.interface'
import { Price as PriceData } from '../interfaces/price.interface';
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
  muchPrices: PriceData[] = [];
  wowCex: ExchangeData = {} as ExchangeData; 
  imageUrl: string = "https://cryptoast.fr/wp-content/uploads/2024/04/jo-2024-dogecoin-doge-devient-partenaires-stade-france.jpg"

  constructor(private CryptoPrices: CryptoPricesService, private cexService: CexService) {}

  ngOnInit() {
    this.fetchData(); 
  }

  fetchData() {
    this.CryptoPrices.fetchCryptoPrices().subscribe(
      data => {
        this.muchPrices = data;
      },
      error => {
        console.error("Une erreur s'est produite:", error);
      }
    );
    this.cexService.fetchWowCex().subscribe(
      data => {
          this.wowCex = data;
      },
      error => {
        console.error("Une erreur s'est produite:", error);
      }
    );
  }
}
