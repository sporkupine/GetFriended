import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../shared/alert/alert.service';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-suggested-friends',
  templateUrl: './suggested-friends.component.html',
  styleUrls: ['./suggested-friends.component.css'],
})
export class SuggestedFriendsComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onViewProfile(id: number) {
    this.router.navigate(['/user/' + id]);
  }

  onAddFriend(user) {
    this.userService.addFriend(user);
    // this.alertService.showModal?
  }

  onDeleteFriend(user) {
    this.userService.deleteFriend(user);
    // this.alertService.showModal?
  }
}
