import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = false;
  error: string = null;

  onSwitchAuth() {
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObservable = this.authService.onSignin(email, password);
    } else {
      authObservable = this.authService.onSignup(email, password);
    }

    authObservable.subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (errorMessage) => {
        this.error = errorMessage;
      }
    );

    form.reset();
  }
}
