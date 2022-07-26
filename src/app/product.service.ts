import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './products';
import { Observable, observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }
  getProduct(id: number): Observable<Product> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = PRODUCTS.find(h => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}
