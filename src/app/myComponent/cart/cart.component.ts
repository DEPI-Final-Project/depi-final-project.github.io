import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;
  products: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCart(1); // Assuming cart ID is 1 for demonstration
  }

  loadCart(cartId: number): void {
    this.cartService.getCart(cartId).subscribe({
      next: (data) => {
        this.cart = data;
        this.loadProducts(data.products);
      },
      error: (error) => {
        console.error('Error fetching cart data', error);
      }
    });
  }

  loadProducts(cartProducts: Array<{ productId: number; quantity: number }>): void {
    cartProducts.forEach(cartProduct => {
      this.cartService.getProduct(cartProduct.productId).subscribe({
        next: (product: Product) => {
          this.products.push(product);
        },
        error: (error) => {
          console.error('Error fetching product data', error);
        }
      });
    });
  }

  getProductQuantity(productId: number): number {
    const product = this.cart.products.find((p: { productId: number; quantity: number }) => p.productId === productId);
    return product ? product.quantity : 0;
  }
}
