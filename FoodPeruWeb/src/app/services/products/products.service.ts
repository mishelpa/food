import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  getListProducts(): Observable<any> {
    return this.http.get(`${this.url}products`);
  }

  getProduct(idProduct): Observable<any> {
    return this.http.get(`${this.url}products/${idProduct}`);
  }
}
