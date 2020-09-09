import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
userName: any;
  constructor(private router: Router, public authService: AuthService) {

    this.authService.currentUserOb.subscribe((data) => {
      this.userName = data;
    });
  }

  logOutSession() {
    Auth.signOut()
      .then(() => {
        localStorage.setItem('user', '');
        localStorage.removeItem('infoUser');
        if (this.router.url === '/') {
          window.location.reload();
        } else { this.router.navigate(['/']); }
      })
      .catch(err => console.log(err));
  }
}
