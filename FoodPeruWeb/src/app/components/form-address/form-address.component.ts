import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {

  constructor() { }

  userForm = new FormGroup({
    nameUser: new FormControl(''),
    lastnameUser: new FormControl (''),
    celUser: new FormControl (''),
    othercelUser: new FormControl (''),
    addressUser: new FormControl (''),
    loteUser: new FormControl(''),
    dptoUser: new FormControl (''),
  });

  ngOnInit(): void {
  }

  save(a) {
    console.log(a);
  }

}
