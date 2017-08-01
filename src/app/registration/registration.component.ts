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
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css'],
  providers: [MainService]
})


export class RegistrationComponent implements OnInit {
  user: User = new User();
  constructor(
    private mainService: MainService,
    private router: Router
  ){}
  ngOnInit() {
    if ((sessionStorage.length)&&(sessionStorage.getItem('firstName'))) {
      this.router.navigate(['/account']);
    }
  }

  addUser() {
    if (this.mainService.parseLocalStorage('add', this.user)) {
      this.router.navigate(['/account']);
    } else {
      alert('Something wrong, we know about this and fix this immidiate\n\nBSA17 Support')
    }
  }
}
