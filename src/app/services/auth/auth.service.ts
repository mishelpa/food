import { Injectable } from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import {  BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    Hub.listen('auth', (data) => {
      Auth.currentUserInfo()
    .then(user => {
      console.log(user.attributes);
      localStorage.setItem('infoUser', JSON.stringify(user.attributes));
      localStorage.setItem('user', user.attributes.name);
      localStorage.setItem('email', JSON.stringify(user.attributes.email));
      this.currentUser.next(user.attributes.name);
    });
    });
  }

  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  public currentUser = new BehaviorSubject(localStorage.getItem('user'));
  public currentUserOb = this.currentUser.asObservable();
  public loggedIn: boolean;

  signOut(): Promise<any> {
    return Auth.signOut()
      .then(() => this.loggedIn = false);
  }

  socialSignIn(provider: CognitoHostedUIIdentityProvider): Promise<ICredentials> {
    return Auth.federatedSignIn({provider});
  }

  getQtyOfCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }
}
