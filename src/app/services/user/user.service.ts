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


postAddress(obj) {
  return this.http.post(`${this.url}/foodperu-user/foodperu-useraddress`, obj);
}

postUser(obj) {
  return this.http.post(`${this.url}/foodperu-user`, obj);
}

}
