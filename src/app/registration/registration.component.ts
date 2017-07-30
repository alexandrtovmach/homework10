import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  bornYear: number;
  password: string;
  user = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    bornYear: this.bornYear,
    password: this.password
  }

  ngOnInit() {
  }

}
