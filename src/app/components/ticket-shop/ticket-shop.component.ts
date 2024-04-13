import { Component } from '@angular/core';
import { PriceService } from '../../services/price.service';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ticket-shop',
  standalone: true,
  imports: [ButtonModule, InputNumberModule, FormsModule],
  templateUrl: './ticket-shop.component.html',
  styleUrl: './ticket-shop.component.css'
})
export class TicketShopComponent {
  totalDogePrice: number;
  totalUsdPrice: string;
  nbrTickets: number = 1;
  constructor(private priceService: PriceService) {}

  ngOnInit() {
    this.fetchData(); // Charge les données pour Bitcoin au démarrage
  }

  fetchData() {
    this.priceService.fetchSpecificCrypto("dogecoin").subscribe(
      data => {
        this.getTotalPrice(data.priceUsd);
        console.log(this.totalDogePrice); // Affiche les données récupérées dans la console
      },
      error => {
        console.error("Une erreur s'est produite:", error);
      }
    );
    
  }


  getTotalPrice(cryptoPrice: number) {
    let priceCalculated = (4 * this.nbrTickets) / cryptoPrice;
    if(this.nbrTickets < 2 ){
      this.totalDogePrice = priceCalculated
      this.totalUsdPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(
        4 * this.nbrTickets);
    }else{
      this.totalDogePrice = priceCalculated / 100 * 95;
      this.totalUsdPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' }).format(
        (4 * this.nbrTickets) / 100 * 95 );
    }
  }
}
