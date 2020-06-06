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
    UserName: new FormControl('',[Validators.required]),
    lastnameUser: new FormControl ('', [Validators.required]),
    celUser: new FormControl('',[Validators.required]),
    dni: new FormControl('',[Validators.required, Validators.minLength(8)]),
    documentType: new FormControl(''),
    emailUser: new FormControl('', [Validators.required, Validators.email]),
    agreePromotions: new FormControl('', [Validators.required, Validators.requiredTrue]),
    agreeTermsAndConditions: new FormControl('', [Validators.required, Validators.requiredTrue])
  });

  ngOnInit(): void {
  }

  save(a) {
    console.log(a);
  }
  get UserName(){return this.profileForm.get('UserName')}
  get lastnameUser(){return this.profileForm.get('lastnameUser')}
  get dni(){return this.profileForm.get('dni')}
  get emailUser(){ return this.profileForm.get('emailUser')}
  get celUser(){return this.profileForm.get('celUser')}
}
