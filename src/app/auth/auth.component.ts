import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = false;
  onSwitchAuth() {
    this.isLoginMode = !this.isLoginMode;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.isLoginMode) {
      // authService.onLogin
    } else {
      this.authService.onSignup();
    }
  }
}
