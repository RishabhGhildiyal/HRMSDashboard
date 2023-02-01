import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMON_EMAIL, COMMON_VALIDATION, PATTERN_EMAIL, PATTERN_SPACE } from 'src/app/validations/validations';

@Component({
  selector: 'app-credential-login',
  templateUrl: './credential-login.component.html',
  styleUrls: ['./credential-login.component.scss']
})
export class CredentialLoginComponent implements OnInit {
  loginWithCredential:boolean=true;
  show = true;
  hide=true;
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
   this.createForm();
  }
  createForm(){
    this.loginForm = this.fb.group({
      email: ['', [PATTERN_EMAIL, COMMON_EMAIL, COMMON_VALIDATION]],
      password: [
        '',
        [COMMON_VALIDATION, Validators.minLength(6),PATTERN_SPACE],
      ],
    });
  }
  login(){

    if(this.loginForm.valid){

    }
  }
  CredentialLogin(){
    this.loginWithCredential=false;
    this.show= false;
  }

}
