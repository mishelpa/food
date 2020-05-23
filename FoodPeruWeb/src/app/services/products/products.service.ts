import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string;
  products: any[] = [];

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  private listProducts = new BehaviorSubject([]);
  public currentListProducts = this.listProducts.asObservable();

  updateListProduct(product) {
    return this.listProducts.next(product);
  }

  addListProducts(objProduct) {
    const indexProduct = this.products.findIndex(product => product.name === objProduct.name);

    if (indexProduct < 0 ) {
      const newOrder = {...objProduct, quantity: 1};
      this.products.push(newOrder);
    } else {
      this.products[indexProduct].quantity += 1;
    }

    this.listProducts.next(this.products);
  }

  getListProducts(): Observable<any> {
    return this.http.get(`${this.url}products`);
  }

  getProduct(idProduct): Observable<any> {
    return this.http.get(`${this.url}products/${idProduct}`);
  }
}
