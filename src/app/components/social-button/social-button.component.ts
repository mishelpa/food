import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

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
    await this.router.navigate(['/']);
  }

  async signInWithFacebook() {
    await this.auth.socialSignIn(AuthService.FACEBOOK);
    await this.router.navigate(['/']);
  }

}
