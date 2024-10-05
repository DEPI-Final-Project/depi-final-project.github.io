import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  standalone: true,
  imports :[CommonModule]
})



export class NavComponent implements OnInit {
  cartItemCount: number = 0; // Initial cart item count

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadCartItems(); // Call this function to load initial cart data
  }

  // Example function to load the initial cart items count
  loadCartItems() {
    // Replace this with an actual API call to get the cart items count
    this.cartItemCount = 3; // Example: Setting an initial value of 3
  }

  // Example function to add items to the cart
  addToCart() {
    this.cartItemCount++;
  }

  // Example function to remove items from the cart
  removeFromCart() {
    if (this.cartItemCount > 0) {
      this.cartItemCount--;
    }
  }


  // Function to navigate to a specified path
  useIcon: boolean = true; 

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}