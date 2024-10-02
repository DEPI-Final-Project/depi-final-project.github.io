import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./myComponent/home/home.component').then(m => m.HomeComponent) },
  { path: 'products', loadComponent: () => import('./myComponent/products/products.component').then(m => m.ProductsComponent) },
  { path: 'cart', loadComponent: () => import('./myComponent/cart/cart.component').then(m => m.CartComponent) },
  { path: 'contact', loadComponent: () => import('./myComponent/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
  { path: 'about', loadComponent: () => import('./myComponent/about/about.component').then(m => m.AboutComponent) },
  { path: 'login', loadComponent: () => import('./myComponent/log-in/log-in.component').then(m => m.LogInComponent) },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) }
];
