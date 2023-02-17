import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations: [
    trigger('enterLeaveAnimation',
    [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }), //apply default styles before animation starts
        animate(
          '750ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }), //apply default styles before animation starts
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(100%)' })
        ),
      ]),
    ],
)],
})
export class ChangePasswordComponent implements OnInit {
  infoForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: FormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.infoForm = this.createForm();
  }
  createForm() {
    return this.fb.group({
      oldPassword: this.service.getControl('schoolUni'),
      newPassword: this.service.getControl('time'),
      confirmPassword: this.service.getControl('toInput'),
    });
  }
  info(){
    if(this.infoForm.valid){

    }
  }
}
