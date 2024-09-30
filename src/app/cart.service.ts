import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Cart {
  id: number;
  userId: number;
  date: string;
  products: Array<{ productId: number; quantity: number }>;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/carts';
  private productUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getCart(cartId: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${cartId}`).pipe(
      catchError(this.handleError)
    );
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${productId}`).pipe(
      catchError(this.handleError)
    );
  }

  addToCart(cartData: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl, cartData).pipe(
      catchError(this.handleError)
    );
  }

  updateCart(cartId: number, cartData: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/${cartId}`, cartData).pipe(
      catchError(this.handleError)
    );
  }

  deleteCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cartId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
