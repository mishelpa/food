import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user/user.service'


@Component({
  selector: 'app-card-address',
  templateUrl: './card-address.component.html',
  styleUrls: ['./card-address.component.scss']
})
export class CardAddressComponent implements OnInit {
  public addresses: any[];

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.currentAddres.subscribe(obj => this.addresses = obj
     
      
)

  }
  getAddress(){
    
  }

}
