import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Products[] = [];

  addProductToCart(product: Products): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
  }

  getCartItems(): Products[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
