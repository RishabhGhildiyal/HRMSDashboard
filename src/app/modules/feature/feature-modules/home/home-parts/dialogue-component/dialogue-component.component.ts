import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from 'src/app/services/form.service';
import { COMMON_VALIDATION, NAME_PATTERN } from 'src/app/validations/validations';

@Component({
  selector: 'app-dialogue-component',
  templateUrl: './dialogue-component.component.html',
  styleUrls: ['./dialogue-component.component.scss']
})
export class DialogueComponentComponent implements OnInit {

  referCandidate!:  FormGroup;
  constructor(public dialogRef:MatDialogRef<DialogueComponentComponent>,@Inject(MAT_DIALOG_DATA) public data:any, private fb:FormBuilder, private service:FormService) { }

  ngOnInit(): void {
    this.referCandidate = this.createForm();

  }
  createForm() {
    return this.fb.group({
      job_location: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      candidate_name: ['', [COMMON_VALIDATION, NAME_PATTERN]],
      position: ['', [COMMON_VALIDATION]],
      experience: ['', [COMMON_VALIDATION]],
      email: ['', [COMMON_VALIDATION ]],
      number: ['', [COMMON_VALIDATION]],
      file: ['', [COMMON_VALIDATION]],
    });
  }
  onSubmit(){
    if (this.referCandidate.valid) {
    } else {
      this.referCandidate.markAllAsTouched();
    }
  }
}
