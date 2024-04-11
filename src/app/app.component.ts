import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MuchPriceComponent } from './components/much-price/much-price.component';
import { WowCexComponent } from './components/wow-cex/wow-cex.component';
import { NgIf, NgFor } from '@angular/common';
import { PriceService } from './services/price.service';
import { CexService} from './services/cex.service';
import { Cex as ExchangeData} from './interfaces/cex.interface'
import { Price as PriceData } from './interfaces/price.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MuchPriceComponent, WowCexComponent, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doge-utility';
  
  muchPrices: PriceData[] = [];
  wowCex: ExchangeData[] = [];

  constructor(private priceService: PriceService, private cexService: CexService) {}

  ngOnInit() {
    this.fetchData(); // Charge les données pour Bitcoin au démarrage
  }

  fetchData() {
    this.priceService.fetchAssets().subscribe(
      data => {
        this.muchPrices = data;
        console.log(this.muchPrices); // Affiche les données récupérées dans la console
      },
      error => {
        console.error("Une erreur s'est produite:", error);
      }
    );
    this.cexService.fetchWowCex().subscribe(
      data => {
        this.wowCex = data;
        console.log(this.wowCex); // Affiche les données récupérées dans la console
      },
      error => {
        console.error("Une erreur s'est produite:", error);
      }
    );


  }

}
