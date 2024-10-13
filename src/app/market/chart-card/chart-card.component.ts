import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { SpecificCryptoPriceService } from '../../shared/specific-crypto.service';

@Component({
  selector: 'chart-card',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.css',
})
export class ChartCardComponent {
  constructor(private cryptoService: SpecificCryptoPriceService) {}

  data: any;

  fetchData() {
    this.cryptoService.fetchCandles('dogecoin').subscribe({
      next: (candleData) => {
        this.data = {
          labels: candleData.labels,
          datasets: [
            {
              type: 'line',
              label: 'dogecoin',
              borderColor: 'rgb(250 204 21)',
              backgroundColor: 'rgb(250, 204, 21, 0.2)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              data: candleData.prices,
            },
          ],
        };
      },
      error: (error) => {
        console.error("Une erreur s'est produite:", error);
      },
    });
  }

  ngOnInit() {
    this.fetchData();
  }
}
