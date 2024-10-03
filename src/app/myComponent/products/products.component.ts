import { Component, inject } from '@angular/core';
import { ProductsService } from '../../core/products.service';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Products } from '../../core/products';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/search.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink ,   FormsModule , SearchPipe ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  text: string = '';
  
  private readonly _ProductsService = inject(ProductsService)
product: any;
  // private readonly _ToastrService = inject(ToastrService)
  // private readonly _CartService = inject(CartService)
  
  // text: string = '';
  productList: Products[] = [];


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this._ProductsService.getProuduct().subscribe({
      next: (res) => {
        console.log(res);
        this.productList = res
      },
      error: (err) => {
        console.log(err);
      }
    })


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

