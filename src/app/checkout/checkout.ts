import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  template: `
    <h1>Checkout</h1>
    <p>Your shopping cart items will appear here.</p>
  `,
  styles: [`
    h1 { margin-bottom: 1rem; }
  `]
})
export class Checkout {}
