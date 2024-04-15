import { Routes } from '@angular/router';
import { MarketsComponent } from './markets/markets.component';
import { TicketShopComponent } from './ticket-shop/ticket-shop.page';

export const routes: Routes = [
    { path: '', redirectTo: 'bourse', pathMatch: 'full' },
    { path: 'bourse', component: MarketsComponent },
    { path: 'billeterie', component: TicketShopComponent },
    { path: '**', redirectTo: 'bourse' },
];
