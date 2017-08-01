import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yourpassword',
  template: `<h2>Your account info</h2>
    Email: {{email}}<br>
    Password: {{password}}<br>
    <a routerLink="/login">Log In</a>
  `,
  styles: []
})
export class YourpasswordComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private router: Router
  ){}

  ngOnInit() {
    if ((sessionStorage.length)&&(sessionStorage.getItem('firstName'))) {
      this.router.navigate(['/account']);
    } else {
      this.email = sessionStorage.getItem('showEmail')
      this.password = sessionStorage.getItem('showPass')
      sessionStorage.clear()
    }
  }

}
