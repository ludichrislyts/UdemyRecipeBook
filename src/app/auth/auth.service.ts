import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  token: string;
  tokenSet = false;

  constructor(private router: Router) { }

  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
      error => console.log(error)
      )
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        console.log(response);
        firebase.auth().currentUser.getToken().then((token: string) => this.token = token);
        this.router.navigate(['/']);
      })
      .catch(
      error => console.log(error)
      )
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.tokenSet = false;
    this.router.navigate(['/']);
  }

  setToken() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      firebase.auth().currentUser.getToken().then((token: string) => this.token = token);
      this.tokenSet = true;
    }
  }

  getToken() {
    this.setToken();
    return this.token;
  }

  isAuthenticated() {
    if (!this.tokenSet) {
      this.setToken();
    }
    console.log(this.token);
    return this.token != null;
  }
}