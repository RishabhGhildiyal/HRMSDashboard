import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from 'src/app/services/form.service';
import { COMMON_VALIDATION, NAME_PATTERN } from 'src/app/validations/validations';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent implements OnInit {

  editQualification!:FormGroup;
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
  constructor(public dialogRef:MatDialogRef<DialogComponentComponent>,@Inject(MAT_DIALOG_DATA) public data:any, private fb:FormBuilder, private service:FormService) { }

  ngOnInit(): void {
    this.editQualification = this.createForm();
  }
  createForm(){
    return this.fb.group({
      schoolUni: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      time: ['', [COMMON_VALIDATION]],
      // position: ['', [COMMON_VALIDATION]],
      // experience: ['', [COMMON_VALIDATION]],
      // email: ['', [COMMON_VALIDATION ]],
      // number: ['', [COMMON_VALIDATION]],
      // file: ['', [COMMON_VALIDATION]],
    });
  }
  onSubmit(){
    if (this.editQualification.valid) {
    } else {
      this.editQualification.markAllAsTouched();
    }
  }
  closeDialog() {
    this.dialogRef.close('closed!');
  }
}
