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
  validpassword: boolean = true;
  validemail: boolean = true;
  userData: UserLogin = new UserLogin();
  constructor(
    private mainService: MainService,
    private router: Router
  ){}

  ngOnInit() {
    this.allUsers = this.mainService.parseLocalStorage('all')
  }
  check(type: string, email: string, password?: string) {
    return this['valid'+type] = this.mainService.checkValid(this.allUsers, type, email, password)
  }
  login() {
    this.router.navigate(['/account']);
  }

}
