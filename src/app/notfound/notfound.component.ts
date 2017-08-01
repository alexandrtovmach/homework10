import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <h1>
      This page is not found
    </h1>
  `,
  styles: ["h1{text-align: center;}"]
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
