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

  public cartProducts = new BehaviorSubject(0);
  public currentCartProducts = this.cartProducts.asObservable();

  updateCartProduct(qty) {
    return this.cartProducts.next(qty);
  }

  addListProducts(objProduct, qtyProduct) {
    const indexProduct = this.products.findIndex(product => product.name === objProduct.name);

    if (indexProduct < 0 ) {
      const newOrder = {...objProduct, quantity: qtyProduct};
      this.products.push(newOrder);
    } else {
      this.products[indexProduct].quantity += qtyProduct;
    }
  }

  getListProducts(): Observable<any> {
    return this.http.get(`${this.url}/foodperu-products`);
  }

  getProduct(idProduct): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('code', idProduct);
    return this.http.get(`${this.url}/foodperu-products/`, {headers});
  }
}
