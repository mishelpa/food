import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string;
  products: any[] = JSON.parse(localStorage.getItem('product'));

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    if (JSON.parse(localStorage.getItem('product'))) {
      this.products = JSON.parse(localStorage.getItem('product'));
    } else {
      this.products = [];
    }
  }

  private listProducts = new BehaviorSubject([]);
  public currentListProducts = this.listProducts.asObservable();

  updateListProduct(product) {
    return this.listProducts.next(product);
  }

  addListProducts(objProduct, qtyProduct) {
    const indexProduct = this.products.findIndex(product => product.name === objProduct.name);

    if (indexProduct < 0 ) {
      const newOrder = {...objProduct, quantity: qtyProduct};
      this.products.push(newOrder);
    } else {
      this.products[indexProduct].quantity += qtyProduct;
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
