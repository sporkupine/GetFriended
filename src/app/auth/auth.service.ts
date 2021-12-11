import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  firebaseKey = 'AIzaSyBi_RK22Ld3-_inBGJ9RuV3JBiwvFupI1w';

  constructor(private http: HttpClient) {}

  onSignup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          this.firebaseKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  onSignin(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          this.firebaseKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unkown error occurred.';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage =
          'There is already an account associated with this email address. Did you mean to sign in?';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no account associated with this email address. Did you mean to sign up?';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password you entered was incorrect for this account. Please contact an administrator if you have forgotten your password.';
        break;
    }
    return throwError(errorMessage);
  }
}

// set up http requests to Firebase for signup [x], login [x], sign out [], auto-login, auto-logout[].
// set up an interceptor for auto-login and auto-logout
// add an auth guard to prevent unauthorized access to profile, suggested friends components
// use the class project and videos as a reference
