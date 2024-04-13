import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { webSocketService } from '../../services/webSocketService.service';
import { Price as PriceData } from '../../interfaces/price.interface';

@Component({
  selector: 'ticket-shop',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './ticket-shop.component.html',
  styleUrl: './ticket-shop.component.css'
})
export class TicketShopComponent {
  muchPrices: PriceData[] = [];
  constructor(private priceService: webSocketService) {}

  ngOnInit(): void {
    this.priceService.listenForPrices().subscribe((data) => {
      console.log(data);
      // Vous pouvez traiter les données ici, par exemple, les afficher dans votre interface utilisateur
    });
  }
}
