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
    // this.login();
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
        let dataLoader = this.loadingCtrl.create({
          content: 'Gathering your data',
          dismissOnPageChange: true
        });
        dataLoader.present();
        this.loginAuth.afDbService.object(`users/students/${this.loginAuth.getCurrentUser().uid}`).valueChanges().subscribe((data) => {
          this.loginAuth.afDbService.object(`subjects`).valueChanges().subscribe((subjects) => {
            this.loginAuth.afDbService.object(`teachers`).valueChanges().subscribe((teachers) => {
              dataLoader.dismiss();
              this.navCtrl.setRoot('MenuPage', {
                user: {
                  data: data,
                  uid: this.loginAuth.getCurrentUser().uid
                },
                subjects: subjects,
                teachers: teachers
              });
            });
          });
        });
      }
    });
  }

  forgotPassword() {

  }

  register() {

  }

}
