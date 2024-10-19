import { Component } from '@angular/core';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { CryptoNameService } from './shared/cryptos-name.service';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'market',
  standalone: true,
  imports: [ChartCardComponent, DropdownComponent, FormsModule, CalendarModule],
  templateUrl: './market.page.html',
  styleUrl: './market.page.css',
})
export class MarketComponent {
  constructor(private cryptoNameService: CryptoNameService) {}
  cryptosName: string[] = [];
  cryptoSelected: string = 'dogecoin';
  rangeDates: Date[] = [
    new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    new Date(),
  ];
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
