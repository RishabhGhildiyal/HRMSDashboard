import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  loginWithCredential:boolean=true;
  show = true;
  hide=true;
  loginForm!: FormGroup;
  ngOnInit(): void {
  }

  CredentialLogin(){
    this.loginWithCredential=false;
    this.show= false;
  }
  googleLogin(){
    this.loginWithCredential=true;
    this.show= true;

  }
}
