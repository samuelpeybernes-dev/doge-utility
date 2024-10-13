import { Component, Input, SimpleChanges } from '@angular/core';
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
  @Input() cryptoSelected: string;

  data: any;

  ngOnInit() {
    this.fetchData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cryptoSelected']) {
      this.fetchData();
    }
  }
  fetchData() {
    const formattedCryptoName = this.cryptoSelected
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\./g, '-');
    this.cryptoService.fetchCandles(formattedCryptoName).subscribe({
      next: (candleData) => {
        this.data = {
          labels: candleData.labels,
          datasets: [
            {
              type: 'line',
              label: this.cryptoSelected,
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
}
