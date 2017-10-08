import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from "firebase/app";

import { StudentSignupModel } from '../../models/user.models';

class Teacher {
  name: string;
  uid?: string;
  subjects: number[];

  constructor(name: string, uid: string, subjects: number[]) {
    this.name = name;
    this.uid = uid;
    this.subjects = subjects;
  }
}

@Injectable()
export class LoginAuthenticatorProvider {

  constructor(public afAuthService: AngularFireAuth,
              public afDbService: AngularFireDatabase) { 
  }

  signup(details: StudentSignupModel) {
    return this.afAuthService.auth.createUserWithEmailAndPassword(details.email, details.password)
      .then((user) => {

        this.afDbService.object(`/users/students/${this.afAuthService.auth.currentUser.uid}`).set({
          email: details.email,
          name: details.name,
          class: details.class,
          contact_no: details.contact_no,
          roll_no: details.roll_no,
          enrollment_no: details.enrollment_no,
        });

        console.log('User Registered!');

      });
  }

  login(newEmail: string, newPassword: string){
    // Mocking login here
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 500);
    // });
    return this.afAuthService.auth.signInWithEmailAndPassword('a@b.com', '12345678');
  }

  resetPassword(email: string) {
    return this.afAuthService.auth.sendPasswordResetEmail(email);
  }

  logout() {
    return this.afAuthService.auth.signOut();
  }

  getCurrentUser(): any {
    return this.afAuthService.auth.currentUser;
  }

  getAuthState(): any {
    return this.afAuthService.authState;
  }
}
