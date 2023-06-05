import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { Store } from '@ngrx/store';
import { STATUS_DROPDOWN, TRAININGS } from 'src/app/constants/common-constants';
import { myTrainingAction } from 'src/app/store/action';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};
interface training {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-request-training-dialog',
  templateUrl: './request-training-dialog.component.html',
  styleUrls: ['./request-training-dialog.component.scss'],
})
export class RequestTrainingDialogComponent implements OnInit {
  requestForm!: FormGroup;

  constructor(private _fb: FormBuilder, private store: Store) {
    this.requestForm = this.createForm();
  }

  createForm() {
    return this._fb.group({
      team: ['', [Validators.required]],
      training: ['', [Validators.required]],
      objective: [''],
      interested:['',[Validators.required]],
      timeline:['',[Validators.required]]
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    this.requestForm.value['objective'] = "objective is good"
    this.store.dispatch(myTrainingAction(this.requestForm.value));
  }

  departments ={
    label: 'Select Department',
    placeholder:'Select Department',
    list: STATUS_DROPDOWN
  }

  trainings ={
    label: 'Select Team',
    placeholder:'Select Team',
    list: TRAININGS
  }
}


