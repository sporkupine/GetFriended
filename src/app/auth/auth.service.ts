import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  isLoginMode: boolean = false;

  constructor() { }
}

// set up http requests to Firebase for signup, login, sign out, auto-login, etc.
// use the class project and videos as a reference
// next step: set up a firebase project for GetFriended
