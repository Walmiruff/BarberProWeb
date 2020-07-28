import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';






@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private readonly API = `${environment.API}`;

  constructor(
    private httpClient: HttpClient,
    private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  // Login email-senha
  createUser(userForm: FormGroup) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(
      userForm.get('email').value,
      userForm.get('password').value
    );
  }


  signIn(userForm: FormGroup) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(
      userForm.get('email').value,
      userForm.get('password').value
    );
  }



  resetPassword(userForm: FormGroup) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(userForm.get('email').value);
  }


  signOutFirebase() {
    return this.angularFireAuth.auth.signOut();
  }

}
