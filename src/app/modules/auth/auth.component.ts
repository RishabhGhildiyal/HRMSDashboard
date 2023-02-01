import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMON_EMAIL, COMMON_VALIDATION, PATTERN_EMAIL, PATTERN_SPACE } from 'src/app/validations/validations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

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
