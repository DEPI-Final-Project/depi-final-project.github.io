import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './myComponent/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, RouterModule],
  templateUrl: './app.component.html',
  // templateUrl: './myComponent/footer/footer.component.html',
  styleUrl: './app.component.css'
  // styleUrl: './myComponent/footer/footer.component.css',
})
export class AppComponent {
  title = 'e-commerce';
}
