import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from "./auth/auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAJwOGZwgrQ_sn0fsZueA-mxGT6fugBKL0",
      authDomain: "recipe-book-6faca.firebaseapp.com"
    });
  }
}
