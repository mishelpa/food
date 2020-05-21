import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterLinkActive } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss']
})
export class SocialButtonComponent {

  displayAddAddress = false;
  constructor(private auth: AuthService, private router: Router) {
  }

  signInWithGoogle() {
    return this.auth.socialSignIn(AuthService.GOOGLE)
    .then(() => {
      Auth.currentUserInfo()
      .then(user => {
        this.auth.storeSessionUserName(user.username);
        console.log(user);
      }
      );
    });
  }

  async signInWithFacebook() {
    await this.auth.socialSignIn(AuthService.FACEBOOK)
    .then(() => {
      Auth.currentUserInfo()
      .then(user => {
        this.auth.storeSessionUserName(user.username);
        console.log(user);
      }
      );
    });
  }

}
