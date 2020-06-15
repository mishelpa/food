import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {
  constructor() { }
  userAddres = new FormGroup({
    userDNI: new FormControl (''),
    streetTypeCode: new FormControl ('',[Validators.required]),
    streetName: new FormControl ('',[Validators.required]),
    streetNumber: new FormControl ('',[Validators.required]),
    buildingType: new FormControl(''),
    buildingNumber: new FormControl (''),
    blockCode: new FormControl (''),
    lotNumber: new FormControl (''),
    urbanizationTypeCode: new FormControl (''),
    urbanizationName: new FormControl ('', [Validators.required]),
    zoneName: new FormControl (''),
    addresspred: new FormControl (''),
    active: new FormControl (''),
    addressmain: new FormControl ('')
  });

  ngOnInit(): void {
  }

  save(a) {
    console.log(a);
  }
  get streetName(){return this.userAddres.get('streetName')}
  get streetTypeCode(){return this.userAddres.get('streetTypeCode')}
  get streetNumber(){return this.userAddres.get('streetNumber')}
  get urbanizationName(){return this.userAddres.get('urbanizationName')}

}
