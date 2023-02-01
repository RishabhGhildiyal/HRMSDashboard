import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { COMMON_EMAIL, COMMON_VALIDATION, PATTERN_EMAIL } from 'src/app/validations/validations';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){

      this.loginForm = this.fb.group({
        email: ['', [PATTERN_EMAIL, COMMON_EMAIL, COMMON_VALIDATION]],
      });
  }
  login(){
    this.router.navigate(['/auth'])
  }
  Recover(){
    
  }

}
