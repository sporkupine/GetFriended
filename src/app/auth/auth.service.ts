import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  isLoggedIn: boolean = false;

  firebaseKey = 'AIzaSyBi_RK22Ld3-_inBGJ9RuV3JBiwvFupI1w';

  constructor(private http: HttpClient) {}

  onSignup(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.firebaseKey, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}

// set up http requests to Firebase for signup, login, sign out, auto-login, etc.
// use the class project and videos as a reference
