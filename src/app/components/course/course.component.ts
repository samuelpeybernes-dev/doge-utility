import { Component } from '@angular/core';
import { PriceService } from '../../services/price.service';
import { CexService} from '../../services/cex.service';
import { Cex as ExchangeData} from '../../interfaces/cex.interface'
import { Price as PriceData } from '../../interfaces/price.interface';
import { MuchPriceComponent } from '../much-price/much-price.component';
import { WowCexComponent } from '../wow-cex/wow-cex.component';

@Component({
  selector: 'course',
  standalone: true,
  imports: [MuchPriceComponent, WowCexComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  muchPrices: PriceData[] = [];
  wowCex: ExchangeData ; 

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
