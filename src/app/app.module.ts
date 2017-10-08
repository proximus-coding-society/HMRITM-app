import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Firebase - Angularfire2 dependencies
import { FIREBASE_CONFIG } from './firebase.config';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule }  from 'angularfire2/database';

// Providers
import { LoginAuthenticatorProvider } from "./../providers/login-authenticator/login-authenticator";

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { DateTimeProvider } from '../providers/date-time/date-time';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      pageTransition: 'ios-transition'
    }),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginAuthenticatorProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DateTimeProvider
  ]
})
export class AppModule {}
