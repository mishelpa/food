import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { group } from '@angular/animations';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  newPassword = false;
  restorePassword = true;
  errorMessage = '';
  userEmail = '';
  passwordForm: any;
  displayVerificationSuccessModal = false;
  displayVerificationFailedModal = false;
  displayEmailFailedModal = false;



  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      code: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      passwordRepeat: ['', [Validators.required,Validators.minLength(8), this.passwordMatcher.bind(this)]]
    });
  }
  emailReset = new FormControl('', [Validators.required, Validators.email]);
 

  resetField() {
    this.emailReset.reset();
    this.errorMessage = '';
    
  }
  restorePasswordForm = new FormGroup({
    email: new FormControl('')
  })

  private passwordMatcher(control: FormControl): { [s: string]: boolean }{

    if(
      this.passwordForm && (control.value !== this.passwordForm.controls.password.value)
    ){
      return { passwordNotMatch: true };
    }
    return null;
  }

  sendPasswordCode(value){
    this.restorePassword = false
    Auth.forgotPassword(value)
    .then((data) => {
      console.log(data);
      
      this.newPassword =true;
    })
    .catch(err => {
      this.displayEmailFailedModal = true;
      this.emailReset.reset();
      console.log(err);

      });
  }

       closeEmailFailedModal(){
        this.displayEmailFailedModal = false;
       }

       closeVerificationSuccessModal(){
        this.router.navigate(['/login'])
        this.displayVerificationSuccessModal = false;

       }

       closeVerificationFailedModal(){
        this.displayVerificationFailedModal = false;

       }

       
  verifyPassword(value){
    console.log(value);
    this.userEmail = this.emailReset.value;
console.log(this.userEmail,value.code,value.password);


       Auth.forgotPasswordSubmit(this.userEmail,value.code,value.password)

         .then(data=> {
          this.displayVerificationSuccessModal = true;
           console.log(data+'entro')
          })
          .catch(err => {
            this.displayVerificationFailedModal = true;
            console.log(err);
          });
          
       }


}
