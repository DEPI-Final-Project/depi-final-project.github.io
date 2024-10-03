import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _HttpClient:HttpClient) {}     
  
  
  getProuduct():Observable<any> {
    return this._HttpClient.get('https://api.escuelajs.co/api/v1/products')
  
}
  
}
