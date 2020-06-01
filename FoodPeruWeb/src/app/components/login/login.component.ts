import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AuthService } from '../../services/auth/auth.service';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor( public authUser: AuthService, private router: Router ) {}

  signInFlag = true;
  signUpFlag = false;
  toVerifyEmail = false;
  userName: string;
  userLastName: string;
  userEmail: string;
  displayVerificationModal  = false;
  displayVerificationSuccessModal = false;
  displayVerificationFailedModal = false;
  displayLoginFailedModal = false;
  user: any;
  displayFailedEmail = false;

  loginForm = new FormGroup({
    emailLogin: new FormControl('', [Validators.required, Validators.email]),
    passwordLogin: new FormControl ('', Validators.required)
  });

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    dni: new FormControl('', [ Validators.minLength(8), Validators.maxLength(8)])

});

verifyEmailForm = new FormGroup({
  verifyEmail: new FormControl('', [Validators.required, Validators.minLength(5)])
});

showLogInView() {
    this.signInFlag = true;
    this.signUpFlag = false;
  }

  showRegisterView() {
    this.signInFlag = false;
    this.signUpFlag = true;
  }

  singUpToAWS(value) {
  console.log(value);
  this.userEmail = value.email;
  const user = {
      username: value.email,
      password: value.password,

      attributes: {
          name:  value.name,
          email: value.email,
          'custom:dni': value.dni,
          'custom:lastName': value.lastName
      }
    };

  Auth.signUp(user)
      .then(() => {
        this.displayVerificationModal = true;
      })
      .catch(err => {
        this.displayFailedEmail = true;
        console.log(err);
      });
  }

  signInToAWS(value) {
    const authInfo = {
      username: value.emailLogin,
      password: value.passwordLogin
    };

    Auth.signIn(authInfo).then(user => {
      this.userName = user.attributes.name;
      this.router.navigate(['/account']);
    })
    .catch(err => {
    this.displayLoginFailedModal = true;
    console.log(err);
    });
  }


  closeVerificationModal() {
    this.displayVerificationModal = false;
    this.toVerifyEmail = true;
    this.signInFlag = false;
    this.signUpFlag = false;
  }

  closeVerificationSuccessModal() {
    this.displayVerificationSuccessModal = false;
    this.toVerifyEmail = false;
    this.signInFlag = true;
    this.signUpFlag = false;
  }

  closeVerificationFailedModal() {
    this.displayVerificationFailedModal = false;
  }

  onVerify(verifycode) {
  console.log(verifycode, this.userEmail);

  Auth.confirmSignUp(this.userEmail, verifycode.verifyEmail, {
      forceAliasCreation: true
      }).then(() => {
        this.displayVerificationSuccessModal = true;
      })
        .catch(err => {
          this.displayVerificationFailedModal = true;
          console.log(err);
        }
      );
  }

  closeLoginFailedModal() {
    this.displayLoginFailedModal = false;
  }

  forgotPassword() {
    this.router.navigate(['/resetPassword']);
  }
  closeFailedEmail() {
    this.displayFailedEmail = false;
  }
}
