import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PROJECT_DSR } from 'src/app/constants/common-constants';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {
  isShow = false;
  dsrForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.dsrForm = this.createForm();

  }
  createForm() {
    return this._fb.group({
      date: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      project: ['', [Validators.required]],
    });
  }
  dropdownData = {
    label: 'Project',
    placeholder: 'Project',
    options: ['Trainee Project Angular', 'Miscellaneous', 'Interview'],
  };
  toggleAddNew() {
    this.isShow = !this.isShow;
  }
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  onAddDsr() {

      this.dsrForm.markAllAsTouched();

  }

  ngOnInit(): void {
  }


  dropDownData = {

    placeholder: 'Department',
    list: PROJECT_DSR,
  };

  // status_data = {

  //   placeholder: 'Status',
  //   list: STATUS_DATA,
  // };
  dropdownSelect(data:any,label:string){
    console.log(data,'vxi')
    let t:any = {}
    t[label] = data
    // this.pageOptions = {...this.pageOptions, ...t};
    this.dropdownData = this.dropdownData;
    // this.populateTable(this.pageOptions)
}

}
