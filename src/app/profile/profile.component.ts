import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log()

    this.route.params.subscribe((params) => {
      let id = params.id;
      this.user = this.userService.getUser(id)[0]
      console.log(this.user)
    })
  }

}
