import { Component } from '@angular/core';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { CryptoNameService } from './shared/cryptos-name.service';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';

@Component({
  selector: 'market',
  standalone: true,
  imports: [ChartCardComponent, DropdownComponent],
  templateUrl: './market.page.html',
  styleUrl: './market.page.css',
})
export class MarketComponent {
  constructor(private cryptoNameService: CryptoNameService) {}
  cryptosName: string[] = [];
  cryptoSelected: string = 'dogecoin';

  fetchData() {
    this.cryptoNameService.fetchAllCryptosName().subscribe({
      next: (data) => {
        this.cryptosName = data;
      },
      error: (error) => {
        console.error("Une erreur s'est produite:", error);
      },
    });
  }

  receiveCrypto(data: string) {
    this.cryptoSelected = data;
  }

  ngOnInit() {
    this.fetchData();
  }
}
