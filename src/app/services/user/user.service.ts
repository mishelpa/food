import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

 public allAddress = new BehaviorSubject([]);
 public currentAddres = this.allAddress.asObservable();

  constructor() { }

addAddres(obj){
  // return this.allAddress.next(obj);
// this.allAddress.next(obj)

const itemObj = {
  ...obj
};

const newArrObj = [
  ...this.allAddress.value,
  itemObj
]
this.allAddress.next(newArrObj);
  }

  
}
