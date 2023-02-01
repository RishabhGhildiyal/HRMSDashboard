import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {
  loginWithCredential:boolean=true;
  show = true;
  hide=true;
  constructor() { }

  ngOnInit(): void {
  }
 
}
