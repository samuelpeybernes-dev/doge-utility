import { Component } from '@angular/core';
import { ChartCardComponent } from './chart-card/chart-card.component';

@Component({
  selector: 'market',
  standalone: true,
  imports: [ChartCardComponent],
  templateUrl: './market.page.html',
  styleUrl: './market.page.css'
})
export class MarketComponent {

}
