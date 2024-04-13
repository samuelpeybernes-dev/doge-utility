import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { TicketShopComponent } from './components/ticket-shop/ticket-shop.component';

export const routes: Routes = [
    { path: '', redirectTo: 'bourse', pathMatch: 'full' },
    { path: 'bourse', component: CourseComponent },
    { path: 'billeterie', component: TicketShopComponent },
];
