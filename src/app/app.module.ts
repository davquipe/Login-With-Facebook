import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

const firebaseConfig = {
  apiKey: 'AIzaSyDHspidpmv7oUEfUZWITizpMBBc0gAFaqA',
    authDomain: 'jrjrjrjr1-ece9c.firebaseapp.com',
    databaseURL: 'https://jrjrjrjr1-ece9c.firebaseio.com',
    projectId: 'jrjrjrjr1-ece9c',
    storageBucket: 'jrjrjrjr1-ece9c.appspot.com',
    messagingSenderId: '855277863917'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, 'angular-auth')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
