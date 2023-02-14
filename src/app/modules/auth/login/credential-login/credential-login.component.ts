import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-credential-login',
  templateUrl: './credential-login.component.html',
  styleUrls: ['./credential-login.component.scss']
})
export class CredentialLoginComponent implements OnInit {
  loginWithCredential:boolean=true;
  show = true;
  hide=true;
  loginForm: FormGroup;
  constructor(private fb:FormBuilder, private service:FormService, private router:Router) {
    this.loginForm = this.createForm();
   }
  ngOnInit(): void {

  }
  createForm(){
    return this.fb.group({
      email: this.service.getControl('email'),
      password: this.service.getControl('password')
    });
  }
  login(){

    if(this.loginForm.valid){
      this.router.navigate(['/dashboard/home']);
    }
    else{
      console.log('ahahahaha');

    }
  }
  CredentialLogin(){
    this.loginWithCredential=false;
    this.show= false;
  }


}
