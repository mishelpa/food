import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent implements OnInit {

  value: Date;
  date14: Date;
  constructor() { }

  profileForm = new FormGroup({
    nameUser: new FormControl(''),
    lastnameUser: new FormControl (''),
    celUser: new FormControl(''),
    dni: new FormControl(''),
    documentType: new FormControl(''),
    emailUser: new FormControl(''),
    agreePromotions: new FormControl(''),
    agreeTermsAndConditions: new FormControl('')
  });

  ngOnInit(): void {
  }

  save(a) {
    console.log(a);
  }
}
