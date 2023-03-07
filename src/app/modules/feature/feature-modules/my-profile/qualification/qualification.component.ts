import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';

export interface PeriodicElement {
  action: string;
  schoolUniversity: string;
  timePeriod: string;
  educationalLevel:string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {action: 'Morning Shift', schoolUniversity: 'Amity University',timePeriod:'Jul-08-2019 - Jun-06-2022',educationalLevel:'MCA'},
];

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
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
export class QualificationComponent implements OnInit {

  displayedColumns: string[] = ['action', 'schoolUniversity','timePeriod','educationalLevel'];
  dataSource = ELEMENT_DATA;

  infoForm!:FormGroup;
  language: string[] = [
    'English',
    'Hindi',];
  education: string[] = [
    'High School Diploma/GED',
    'Btech',
    'Mtech',
    'BE',
    'Bsc',
    'BCA',
    'MCA',
    'BBA',
    'Msc'];
  constructor(private fb: FormBuilder, private service:FormService,private router:Router,private snack:MatSnackBar, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.infoForm = this.createForm();


  }
  createForm(){
    return this.fb.group({
      schoolUni:this.service.getControl('schoolUni'),
      time:this.service.getControl('time'),
      toInput:this.service.getControl('toInput'),
      professionalCourse:this.service.getControl('professionalCourse'),

    });
  }

  info() {
    if (this.infoForm.valid) {
    } else {
      this.infoForm.markAllAsTouched();
      this.snack.open("Fill the required fields",'',{
        duration:2000,
        verticalPosition:'top',
        panelClass:['red-snackbar','login-snackbar']
      })
    }
  }
  numbers = new FormControl('');

  numberList: number[] = [10,20,30,40];

  openDialog(){
    this.dialog.open(DialogComponentComponent)
  }

}



