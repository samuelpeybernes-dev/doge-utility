import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.page';
import { TicketShopComponent } from './ticket-shop/ticket-shop.page';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bourse', component: MarketComponent },
    { path: 'billeterie', component: TicketShopComponent },
    { path: '**', redirectTo: '' },
];
