import { Component } from '@angular/core';
import { ShopCardComponent } from './shop-card/shop-card.component';

@Component({
  selector: 'ticket-shop',
  standalone: true,
  imports: [ShopCardComponent],
  templateUrl: './ticket-shop.page.html',
  styleUrl: './ticket-shop.page.css'
})
export class TicketShopComponent {


}
