import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase, AngularFireAuth]
})
export class AppComponent {
  userDetail: any;
  constructor(
    private af: AngularFireDatabase,
    private fbAuth: AngularFireAuth
  ) { }

  onFbLogin() {
    const facebookAuth = this.fbAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
    facebookAuth.then(resp => {
      this.userDetail = {
        email: resp.user.email,
        displayName: resp.user.displayName,
        photoURL: resp.user.photoURL
      }
      console.log(resp.user);
    });
  }
  onFbLogOut(){
    this.fbAuth.auth.signOut();
    this.userDetail = null;
  }
}
