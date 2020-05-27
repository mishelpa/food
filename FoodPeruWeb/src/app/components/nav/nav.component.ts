import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent{
  userName: string;

  constructor(private router: Router,
              public authService: AuthService) {
                Auth.currentUserInfo()
                .then(user => this.userName = user.attributes.name
                );
                console.log(Auth.currentSession());
  }

  logOutSession() {
    Auth.signOut()
      .then(() => {
        console.log(this.router.url);

        if (this.router.url === '/') {
          window.location.reload();
        } else { this.router.navigate(['/']); }
      })
      .catch(err => console.log(err));
  }
}
