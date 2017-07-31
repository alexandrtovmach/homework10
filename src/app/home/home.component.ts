import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: ``,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){}
  ngOnInit() {
    localStorage.setItem('users', JSON.stringify([{yearBirth: "1991", firstName: "ALex", email: "alex@mail.com", lastName: "Dereks", password: "cupibanan"},{yearBirth: "1994", firstName: "John", email: "john@mail.com", lastName: "Lens", password: "lensisbetter"}]))
    if ((localStorage.length)&&(localStorage.getItem('userName'))) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/registration']);
    }
  }

}
