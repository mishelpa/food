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
    address: new FormControl(''),
    userDNI: new FormControl (''),
    streetTypeCode: new FormControl (''),
    streetName: new FormControl (''),
    streetNumber: new FormControl (''),
    buildingType: new FormControl(''),
    buildingNumber: new FormControl (''),
    blockCode: new FormControl (''),
    lotNumber: new FormControl (''),
    urbanizationTypeCode: new FormControl (''),
    urbanizationName: new FormControl (''),
    zoneName: new FormControl ('')

  });

  ngOnInit(): void {
  }

  save(a) {
    console.log(a);
  }

}
