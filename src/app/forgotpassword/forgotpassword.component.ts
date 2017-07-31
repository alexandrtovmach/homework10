import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotpService } from '../forgotp.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: 'forgotpassword.component.html',
  styleUrls: ['forgotpassword.component.css'],
  providers: [ForgotpService, MainService]
})

export class ForgotpasswordComponent implements OnInit {
  private question;
  private answer;
  private email: string;
  private valid: boolean = true;
  private pass: boolean = false;
  private correct: boolean = false;
  constructor(
    private mainService: MainService,
    private forgotpService: ForgotpService,
    private router: Router
  ){}

  ngOnInit() {
    this.question = this.forgotpService.question()
  }

  checkEmail() {
    this.valid = this.pass = this.mainService.checkValid(this.mainService.parseLocalStorage('all'), 'email', this.email)
  }

  checkAns() {
    this.correct = this.forgotpService.answerCheck(this.answer)
  }

}
