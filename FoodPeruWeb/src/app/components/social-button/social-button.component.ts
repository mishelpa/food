import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss']
})
export class SocialButtonComponent {

  title = 'amplify-google-login-test';
  constructor(private auth: AuthService) {
  }

  async signInWithGoogle() {
    console.log(this.auth.socialSignIn(AuthService.GOOGLE));
    const socialResult = await this.auth.socialSignIn(AuthService.GOOGLE);
    console.log('google Result:', socialResult);
  }

  async signInWithFacebook() {
    const socialResult = await this.auth.socialSignIn(AuthService.FACEBOOK);
    console.log('google Result:', AuthService.GOOGLE);
  }

}
