import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('400ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  loginWithCredential: boolean = true;
  show = true;
  hide = true;
  loginForm!: FormGroup;
  ngOnInit(): void {}

  CredentialLogin() {
    this.loginWithCredential = false;
    this.show = false;
  }
  googleLogin() {
    this.loginWithCredential = true;
    this.show = true;
  }
}
