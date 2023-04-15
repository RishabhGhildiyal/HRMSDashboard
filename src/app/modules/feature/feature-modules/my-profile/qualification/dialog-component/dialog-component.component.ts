import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormService } from 'src/app/services/form.service';
import { COMMON_VALIDATION, NAME_PATTERN } from 'src/app/validations/validations';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})
export class DialogComponentComponent implements OnInit {
  infoForm!: FormGroup;
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
  constructor(public dialogRef:MatDialogRef<DialogComponentComponent>,@Inject(MAT_DIALOG_DATA) public data:any, private fb:FormBuilder, private service:FormService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.infoForm = this.createForm();
    console.log(this.data,'ALTERNATE')
    this.infoForm.patchValue(this.data);

  }

  info() {
    if (this.infoForm.valid) {
    } else {
      this.infoForm.markAllAsTouched();
      this.snack.open('Fill the required fields', '', {
        duration: 2000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar', 'login-snackbar'],
      });
    }
  }



  createForm(){
    return this.fb.group({
      schoolUni: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      time: ['', [COMMON_VALIDATION]],
      toInput: this.service.getControl('toInput'),
      fromInput: this.service.getControl('toInput'),
      professionalCourse: this.service.getControl('professionalCourse'),
      language: this.service.getControl('language')

    });
  }
  onSubmit(){
    if (this.editQualification.valid) {

    } else {
      this.editQualification.markAllAsTouched();
    }
  }
  closeDialog() {
    console.log('allot')
    this.infoForm.value['id'] = this.data.id
    this.dialogRef.close(this.infoForm.value);
  }
}
