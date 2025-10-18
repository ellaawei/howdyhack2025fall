import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Checkout } from './checkout/checkout';

export const routes: Routes = [
    { path: 'home', component: Home }, 
    { path: 'checkout', component: Checkout }, 
    { path: '**', component: Home }
];
