import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {
    Auth.currentUserInfo()
    .then(user => console.log(user)
    );
    console.log(Auth.currentSession());

  }

  logOutSession() {
    Auth.signOut()
      .then(() => {
        this.authService.removeSessionUserName();
        if (this.router.url === '/home') {
          window.location.reload();
        } else { this.router.navigate(['/']); }
      })
      .catch(err => console.log(err));
  }
}
