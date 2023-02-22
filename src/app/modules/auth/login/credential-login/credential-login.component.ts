import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DASHBOARD, LOGIN } from 'src/app/constants/routes';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-credential-login',
  templateUrl: './credential-login.component.html',
  styleUrls: ['./credential-login.component.scss'],
})
export class CredentialLoginComponent implements OnInit {
  loginWithCredential: boolean = true;
  show = true;
  hide = true;
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: FormService,
    private router: Router,
    private _snackbar: MatSnackBar
  ) {
    this.loginForm = this.createForm();
  }
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    return this.fb.group({
      email: this.service.getControl('email'),
      password: this.service.getControl('password'),
    });
  }
  login() {
    console.log('AJDWUJB');
    if (this.loginForm.valid) {
      sessionStorage.setItem('login','12345');
      this.router.navigate([DASHBOARD.path]);
      this._snackbar.open("Login Successful",'',{
        duration:2000,
        verticalPosition:'top',
        panelClass:['green-snackbar','login-snackbar']
      })
    }
   else {
      this._snackbar.open("Email and password is required",'',{
        duration:2000,
        verticalPosition:'top',
        panelClass:['green-snackbar','login-snackbar']
      })
    }

  }


  CredentialLogin() {
    this.loginWithCredential = false;
    this.show = false;
  }
}
