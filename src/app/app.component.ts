import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './myComponent/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce';
}
