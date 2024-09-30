import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // templateUrl: './myComponent/footer/footer.component.html',
  styleUrl: './app.component.css'
  // styleUrl: './myComponent/footer/footer.component.css',
})
export class AppComponent {
  title = 'e-commerce';
}
