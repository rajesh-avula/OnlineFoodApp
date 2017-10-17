import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/User';
import { UserService } from '../users/user.service';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  public pageTitle: 'Welcome';
  public users: any = [];
  showMessage:boolean=false;
  @Input() public username: string;
  @Input() public password: string;
  constructor(private _router: Router, private _userService: UserService) {
    this._userService.getUsers()
    .subscribe(
    users => {
      this.users = users;
    });
   }

  loginasguest() {
    this._router.navigate(['/items']);
  }
  loginasAdmin() {
    //this._router.navigate(['/orders']);
     for (let i = 0; i < this.users.length; i++ ) {
      if (this.users[i].userName === this.username && this.users[i].password === this.password) {
        this._router.navigate(['/orders']);
      }
      else{
        this.showMessage=true;
      }
    } 
  }
}
