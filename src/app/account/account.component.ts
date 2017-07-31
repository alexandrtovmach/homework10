import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

export class User{
  firstName: string;
  lastName: string;
  email: string;
  bornYear: number;
  password: string;
}

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
  providers: [MainService]
})

export class AccountComponent implements OnInit {
  userInfo;
  constructor(
    private mainService: MainService,
    private router: Router
  ){}

  ngOnInit() {
    this.userInfo = this.mainService.parseLocalStorage('get');
  }
}
