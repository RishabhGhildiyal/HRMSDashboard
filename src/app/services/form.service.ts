import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { Regex } from '../constants/regex';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  VALIDATION = {
    email: [
      Validators.pattern(Regex.email),
      Validators.email,
      // Validators.maxLength(LIMIT.MAX_EMAIL_LENGTH),
    ],
    password: [Validators.pattern(Regex.password)],
    firstName:[Validators.pattern(Regex.name)],
    lastName:[Validators.pattern(Regex.name)],
    dob:[Validators.pattern],
    contactNumber:[Validators.pattern(Regex.phone)],
    years:[Validators.pattern],
    months:[Validators.pattern],
    professionalCourse:[Validators.pattern],
    toInput:[Validators.pattern],
    education:[Validators.pattern],
    time:[Validators.pattern],
    schoolUni:[Validators.pattern],
    oldPassword:[Validators.pattern],
    newPassword:[Validators.pattern],
    confirmPassword:[Validators.pattern],
    job_location:[Validators.pattern],
    candidate_name:[Validators.pattern(Regex.name)],
    position:[Validators.pattern],
    experience:[Validators.pattern],
    number:[Validators.pattern(Regex.phone)],
    pitchName:[Validators.pattern],
    empId:[Validators.pattern],
    empTitle:[Validators.pattern],
    industry:[Validators.pattern],
    dateOfBirth:[Validators.pattern],
    type1:[Validators.pattern],
    language:[Validators.pattern],
    gender:[Validators.pattern],
    marital:[Validators.pattern],
    hours:[Validators.pattern],
    project:[Validators.pattern],
    date:[Validators.pattern],
    assetCategory:[Validators.pattern],
    quantity:[Validators.pattern],
    priority:[Validators.pattern],
    requiredByDate:[Validators.pattern],
    allocationType:[Validators.pattern],
    requestReason:[Validators.pattern],
    title:[Validators.pattern],
    address:[Validators.pattern],
    description:[Validators.pattern],
    mobile:[Validators.pattern],
    leave_type:[Validators.pattern],
    startDate:[Validators.pattern],
    endDate:[Validators.pattern],
    remarks:[Validators.pattern],
    upload:[Validators.pattern],
    department:[Validators.pattern],
    status:[Validators.pattern],
    
  };

  getControl(name: string, required = true) {
    //@ts-ignore: unreachable code error

    let compose = [...this.VALIDATION[name]];
    if (required) {
      if (name === 'checkbox') {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    return [null, compose];

}
}
