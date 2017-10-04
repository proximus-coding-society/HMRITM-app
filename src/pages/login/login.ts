import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudentSignupModel } from './../../models/user.models';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  studentDetails: StudentSignupModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login() {

  }

  forgotPassword() {

  }

  register() {

  }

}
