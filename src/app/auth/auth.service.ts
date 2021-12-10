import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface AuthResponseData {
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
      .pipe(
        catchError((errorResponse) => {
          let errorMessage = 'An unkown error occurred.';
          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
          }
          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage =
                'There is already an account associated with this email address. Did you mean to sign in?';
            case 'EMAIL_NOT_FOUND':
              errorMessage =
                'There is no account associated with this email address. Did you mean to sign up?';
            case 'INVALID_PASSWORD':
              errorMessage =
                'The password you entered was incorrect for this account. Please contact an administrator if you have forgotten your password.';
          }
          return throwError(errorMessage);
        })
      );
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
      .pipe(
        catchError((errorResponse) => {
          let errorMessage = 'An unkown error occurred.';
          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
          }
          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage =
                'There is already an account associated with this email address. Did you mean to sign in?';
            case 'EMAIL_NOT_FOUND':
              errorMessage =
                'There is no account associated with this email address. Did you mean to sign up?';
            case 'INVALID_PASSWORD':
              errorMessage =
                'The password you entered was incorrect for this account. Please contact an administrator if you have forgotten your password.';
          }
          return throwError(errorMessage);
        })
      );
  }
}

// set up http requests to Firebase for signup, login, sign out, auto-login, etc.
// use the class project and videos as a reference
