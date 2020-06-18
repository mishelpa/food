import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 public allAddress = new BehaviorSubject([]);
 public currentAddres = this.allAddress.asObservable();
 private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;

  }

addAddres(obj) {
  // return this.allAddress.next(obj);
// this.allAddress.next(obj)

const itemObj = {
  ...obj
};

const newArrObj = [
  ...this.allAddress.value,
  itemObj
];

this.allAddress.next(newArrObj);
  }

postUser(obj) {
  return this.http.post(`${this.url}/foodperu-user`, obj);
}

getUserProfile(email) {
  return this.http.get(`${this.url}/foodperu-user/${email}`);
}

putUser(email, obj) {
  return this.http.put(`${this.url}/foodperu-user/${email}`, obj);
}

postAddress(obj) {
  return this.http.post(`${this.url}/foodperu-user/foodperu-useraddress`, obj);
}

getAddress() {
  return this.http.get(`${this.url}/foodperu-user/foodperu-useraddress`);
}
}
