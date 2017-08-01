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
  private valid: any = true;
  private pass: boolean = false;
  private correct: boolean = false;
  constructor(
    private mainService: MainService,
    private forgotpService: ForgotpService,
    private router: Router
  ){}

  ngOnInit() {
    if ((sessionStorage.length)&&(sessionStorage.getItem('firstName'))) {
      this.router.navigate(['/account']);
    } 
    this.question = this.forgotpService.question()
  }

  checkEmail() {
    this.valid = this.pass = this.mainService.checkValid(this.mainService.parseLocalStorage('all'), 'email', this.email)
  }

  checkAns() {
    this.correct = this.forgotpService.answerCheck(this.answer);
    if (this.correct) {
      sessionStorage.setItem('showEmail', this.valid.email)
      sessionStorage.setItem('showPass', this.valid.password)
    }
  }

}
