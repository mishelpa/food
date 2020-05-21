import { Injectable } from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Hub, ICredentials } from '@aws-amplify/core';
import { Subject, Observable } from 'rxjs';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    Hub.listen('auth', (data) => {
      const { channel, payload} = data;
      console.log(payload);
      if (channel === 'auth') {
        this._authState.next(payload.event);
      }
    });


  }

  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';
  public static GOOGLE = CognitoHostedUIIdentityProvider.Google;
  public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
  public loggedIn: boolean;
  public storage: Storage = localStorage;

  private _authState: Subject<CognitoUser|any> = new Subject<CognitoUser|any>();
  authState: Observable<CognitoUser|any> = this._authState.asObservable();

  signOut(): Promise<any> {
    return Auth.signOut()
      .then(() => this.loggedIn = false);
  }

  socialSignIn(provider: CognitoHostedUIIdentityProvider): Promise<ICredentials> {
    return Auth.federatedSignIn({provider});
  }

  storeSessionUserName(userName: any) {
    this.storage.setItem('session un', userName);
  }

  getSessionUserName(): any | null {
    return this.storage.getItem('session un');
  }

  removeSessionUserName() {
    this.storage.removeItem('session un');
  }

  currentUser() {
    Auth.currentAuthenticatedUser()
    .then(user => localStorage.setItem('currentUser', user.username)
    );
  }
}
