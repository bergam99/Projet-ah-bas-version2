import { Injectable } from '@angular/core';
import { PRODUCTS, Products } from 'src/app/mocks/products/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Products[]{
    return PRODUCTS;
  }

  getProduct(id:number) : Products | undefined{
    return PRODUCTS.find(product =>product.id === id)
  }


}
