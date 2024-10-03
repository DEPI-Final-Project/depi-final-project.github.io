import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/products.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/search.pipe';
import { CartService } from '../../core/cart.service';
import { Products } from '../../core/products';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, FormsModule, SearchPipe, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  text: string = '';
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CartService = inject(CartService);
  productList: Products[] = [];

  ngOnInit(): void {
    this._ProductsService.getProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.productList = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addToCart(product: Products): void {
    this._CartService.addProductToCart(product);
  }
  // addToCart(id:string):void {
  //   this._CartService.addProductToCart(id).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this._ToastrService.success(res.message)
  //       this._CartService.cartNumber = res.numOfCartItems



  //     },

  //   })
  // }
}

