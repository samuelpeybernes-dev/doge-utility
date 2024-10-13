import { Component } from '@angular/core';
import { MuchPriceComponent } from './much-price/much-price.component';
import { WowCexComponent } from './wow-cex/wow-cex.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'home',
  standalone: true,
  imports: [HeaderComponent, MuchPriceComponent, WowCexComponent, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  imageUrl: string =
    'https://cryptoast.fr/wp-content/uploads/2024/04/jo-2024-dogecoin-doge-devient-partenaires-stade-france.jpg';

  constructor(private router: Router) {}

  toUrl() {
    this.router.navigateByUrl('/bourse');
  }
}
