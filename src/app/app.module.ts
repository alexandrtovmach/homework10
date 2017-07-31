import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { TimerComponent } from './timer/timer.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { YourpasswordComponent } from './yourpassword/yourpassword.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'forgotpassword/yourpassword', component: YourpasswordComponent},
  {path: 'account', component: AccountComponent},
  {path: 'timer', component: TimerComponent},
  {path: '**', component: NotfoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AccountComponent,
    TimerComponent,
    HomeComponent,
    NotfoundComponent,
    ForgotpasswordComponent,
    YourpasswordComponent
  ],
  entryComponents: [
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
