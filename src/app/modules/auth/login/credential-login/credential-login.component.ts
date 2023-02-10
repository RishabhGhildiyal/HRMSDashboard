import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
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
  constructor(private fb:FormBuilder, private service:FormService) { }
  ngOnInit(): void {
   this.createForm();
  }
  createForm(){
    this.loginForm = this.fb.group({
      email: this.service.getControl('email'),
      password: this.service.getControl('password')
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
