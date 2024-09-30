import { Routes } from '@angular/router';


import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './myComponent/home/home.component';
import { ProductsComponent } from './myComponent/products/products.component';
import { NavComponent } from './myComponent/nav/nav.component';
import { ContactUsComponent } from './myComponent/contact-us/contact-us.component';
import { CartComponent } from './myComponent/cart/cart.component';
import { LoginComponent } from './myComponent/log-in/log-in.component';



export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'log', component: LoginComponent},

  { path: '**', component: NotFoundComponent },
];
