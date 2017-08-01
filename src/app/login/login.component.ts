import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

export class UserLogin {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [MainService]
})
export class LoginComponent implements OnInit {
  allUsers;
  validpassword = {};
  validemail = {};
  userData: UserLogin = new UserLogin();
  constructor(
    private mainService: MainService,
    private router: Router
  ){}

  ngOnInit() {
    if ((sessionStorage.length)&&(sessionStorage.getItem('firstName'))) {
      this.router.navigate(['/account']);
    }
    this.allUsers = this.mainService.parseLocalStorage('all')
  }
  check(type: string, email: string, password?: string) {
    return this['valid'+type] = this.mainService.checkValid(this.allUsers, type, email, password);
  }
  login() {
    this.mainService.parseLocalStorage('add', this.validpassword);
    this.router.navigate(['/account']);
  }

}
