import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public allAddress = new BehaviorSubject([]);
  public currentAddress = this.allAddress.asObservable();

  public card = new BehaviorSubject('');
  public cardRegistered = this.card.asObservable();

  private url: string;
  private url2: string;

  public allCards = new BehaviorSubject([]);
  public currentCards = this.allCards.asObservable();

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    this.url2 = 'http://localhost:3001';

    const email = JSON.parse(localStorage.getItem('email'));
    this.http.get(`${this.url2}/foodperu-user/foodperu-usercard`).subscribe((response) => {
      this.allCards.next(response['cards'].filter((ele) => ele.emailUser === email));
    });
  }

postUser(obj) {
  return this.http.post(`${this.url}/dev/foodperu-user`, obj);
}

getUserProfile(email) {
  return this.http.get(`${this.url2}/foodperu-user/${email}`);
  // return this.http.get(`${this.url}/foodperu-user/${email}`);
}

chooseAddress(address) {
  this.allAddress.next(address);
}

chooseCard(card) {
  this.card.next(card);
}

putUser(email, obj) {
  return this.http.put(`${this.url}/foodperu-user/${email}`, obj);
}

postAddress(obj) {
  return this.http.post(`${this.url}/dev/foodperu-user/foodperu-useraddress`, obj);
}

getAddress() {
  return this.http.get(`${this.url2}/foodperu-user/foodperu-useraddress`);
  // return this.http.get(`${this.url}/foodperu-user/foodperu-useraddress`);
}

postCard(obj) {
  return this.http.post(`${this.url}/foodperu-user/foodperu-usercard`, obj);
}

getCard() {
  return this.http.get(`${this.url2}/foodperu-user/foodperu-usercard`);
  // return this.http.get(`${this.url}/foodperu-user/foodperu-usercard`);
}
}
