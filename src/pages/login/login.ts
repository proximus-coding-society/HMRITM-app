import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { StudentSignupModel } from './../../models/user.models';
import { LoginAuthenticatorProvider } from './../../providers/login-authenticator/login-authenticator';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  studentDetails = {} as StudentSignupModel;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public loginAuth: LoginAuthenticatorProvider) {
  }

  login() {
    let loader = this.loadingCtrl.create({
      content: 'Authenticating...',
      dismissOnPageChange: true
    });
    loader.present();
    this.loginAuth.login(this.studentDetails.email, this.studentDetails.password).then((isLoggedIn) => {
      if (isLoggedIn) {
        loader.dismiss();
        this.navCtrl.setRoot('MenuPage');
      }
    });
  }

  forgotPassword() {

  }

  register() {

  }

}
