import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ShowErrorPipe } from 'src/app/pipes/showErrorPipe/show-error.pipe';
import { FormService } from 'src/app/services/form.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  animations: [
    trigger('enterLeaveAnimation', [
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
    ]),
  ],
})
export class BasicInfoComponent implements OnInit {
  infoForm: FormGroup;
  gender: string[] = ['Male', 'Female'];
  marital: string[] = ['Single', 'Married', 'Widowed', 'Divorced or Separated'];
  today = new Date();
  constructor(private fb: FormBuilder, private service: FormService , private snack:MatSnackBar) {
    this.infoForm = this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    return this.fb.group({
      firstName: this.service.getControl('firstName'),
      lastName: this.service.getControl('lastName'),
      dob: this.service.getControl('dob'),
      contactNumber: this.service.getControl('contactNumber'),
      years: this.service.getControl('years'),
      months: this.service.getControl('months'),
    });
  }

  info() {
    if (this.infoForm.valid) {

    } else {
      this.infoForm.markAllAsTouched();
      this.snack.open("fill the required fields",'',{
        duration:2000,
        verticalPosition:'top',
        panelClass:['green-snackbar','login-snackbar']
      })
    }
  }
}
