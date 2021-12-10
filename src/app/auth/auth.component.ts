import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = false;
  onSwitchAuth(){
    this.isLoginMode = !this.isLoginMode;
  }


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
