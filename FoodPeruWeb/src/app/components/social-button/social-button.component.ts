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

  async signInWithGoogle() {
    await this.auth.socialSignIn(AuthService.GOOGLE);
    Auth.currentUserInfo()
    .then(user => {
      console.log(user);
    }
    );
  }

  async signInWithFacebook() {
    await this.auth.socialSignIn(AuthService.FACEBOOK);
    Auth.currentUserInfo()
    .then(user => {
      console.log(user);
    }
    );
  }

}
