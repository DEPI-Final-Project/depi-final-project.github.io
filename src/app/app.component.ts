import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./myComponent/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  // templateUrl: './app.component.html',
  templateUrl: './myComponent/nav/nav.component.html',
  // styleUrl: './app.component.css'
  styleUrl: './myComponent/nav/nav.component.css',
})
export class AppComponent {
  title = 'e-commerce';
}
