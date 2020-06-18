import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-card-address',
  templateUrl: './card-address.component.html',
  styleUrls: ['./card-address.component.scss']
})
export class CardAddressComponent implements OnInit {
  public addresses: any;

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.userService.currentAddres.subscribe(obj => this.addresses = obj);
    this.getAddressesUser();
  }

  getAddressesUser() {
    const dni = localStorage.getItem('dni');
    this.userService.getAddress().subscribe((response) => {
      this.addresses = response['address'].filter((ele) => ele.userDNI === dni);
      console.log(this.addresses);

    });
  }
}
