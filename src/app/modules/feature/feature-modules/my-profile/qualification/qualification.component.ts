import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

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
  styleUrls: ['./qualification.component.scss']
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
  constructor(private fb: FormBuilder, private service:FormService,private router:Router,) { }

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

  info(){
    if(this.infoForm.valid){

    }
  }
  numbers = new FormControl('');

  numberList: number[] = [10,20,30,40];

}
