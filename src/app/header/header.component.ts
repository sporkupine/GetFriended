import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSub: Subscription;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((authUser) => {
      this.isAuthenticated = !!authUser;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  logout() {
    this.authService.onLogout();
    this.router.navigate(['auth']);
  }
}
