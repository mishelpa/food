import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent implements OnInit {

  value: Date;
  user: any;
  firstTime = false;
  constructor(private http: HttpClient, private userService: UserService) {
  }

  profileForm = new FormGroup({
    names: new FormControl('', [Validators.required]),
    lastName: new FormControl ('', [Validators.required]),
    dni: new FormControl('', [Validators.required, Validators.minLength(8)]),
    documentType: new FormControl('1'),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    agreePromotions: new FormControl('', [Validators.required, Validators.requiredTrue]),
    agreeTermsAndConditions: new FormControl('', [Validators.required, Validators.requiredTrue])
  });

  ngOnInit(): void {
    this.getDataUser();
  }

  save(user) {
   /*  this.userService.postUser(user).subscribe((x) => {
      console.log('user creado');

      console.log(x);
    }); */
    localStorage.setItem('dni', user.dni);
    if (this.firstTime) {
      this.userService.postUser(user).subscribe((response) => {
      console.log(response);
    });
    } else {
      this.userService.putUser(JSON.parse(localStorage.getItem('email')), user).subscribe((response) => {
        console.log(response);
      });
    }
  }

  // Autocompletar datos del formulario cuando el cliente se loguea por primera vez
  getValuesUser() {
    this.firstTime = true;
    this.user = JSON.parse(localStorage.getItem('infoUser'));
    this.userEmail.setValue(this.user.email);
    if (localStorage.getItem('CognitoIdentityServiceProvider.62n13nhk7bqnmd7qdr8vkbfgnk.LastAuthUser').includes('Facebook')) {
      this.names.setValue(this.user.given_name);
      this.lastName.setValue(this.user.family_name);
    } else if
    (localStorage.getItem('CognitoIdentityServiceProvider.62n13nhk7bqnmd7qdr8vkbfgnk.LastAuthUser').includes('Google') ) {
      this.names.setValue(this.user.middle_name);
      this.lastName.setValue(this.user.family_name);
    } else {
      this.names.setValue(this.user.name);
      this.lastName.setValue(this.user['custom:family_name']);
      this.dni.setValue(this.user['custom:dni']);
    }}

    // Autocompletar datos del formulario cuando el cliente se loguea por segunda vez
    getDataUser() {
      console.log('hi');

      return this.userService.getUserProfile(JSON.parse(localStorage.getItem('email'))).subscribe((user) => {
        console.log(user);

        this.firstTime = false;
        this.dni.setValue(user['dni']);
        this.names.setValue(user['names']);
        this.lastName.setValue(user['lastName']);
        this.userEmail.setValue(user['userEmail']);
        this.documentType.setValue(user['documentType']);
        this.agreePromotions.setValue(user['agreePromotions']);
        this.agreeTermsAndConditions.setValue(user['agreeTermsAndConditions']);
    },
    (error) => {
      this.getValuesUser();
    });
  }

  get names() {return this.profileForm.get('names'); }
  get lastName() {return this.profileForm.get('lastName'); }
  get dni() {return this.profileForm.get('dni'); }
  get userEmail() { return this.profileForm.get('userEmail'); }
  get documentType() { return this.profileForm.get('documentType'); }
  get agreePromotions() { return this.profileForm.get('agreePromotions'); }
  get agreeTermsAndConditions() { return this.profileForm.get('agreeTermsAndConditions'); }
}
