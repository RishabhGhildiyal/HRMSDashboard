import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private router: Router,
    private snack:MatSnackBar
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
  info() {
    this.infoForm.markAllAsTouched();

    if (this.infoForm.invalid) {
      this.snack.open("Fill the required fields",'',{
        duration:2000,
        verticalPosition:'top',
        panelClass:['red-snackbar','login-snackbar']
      })
    } else if(this.infoForm.controls.newPassword.value != this.infoForm.controls.confirmPassword.value) {
      this.snack.open("Password does not match",'',{
        duration:2000,
        verticalPosition:'top',
        panelClass:['red-snackbar','login-snackbar']
      })
    }
    else{
      this.snack.open("Password changed successfully",'',{
        duration:2000,
        verticalPosition:'top',
        panelClass:['green-snackbar','login-snackbar']
      })
    }
  }
}
