import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { LUNCH_DROPDOWN } from 'src/app/constants/common-constants';

@Component({
  selector: 'app-request-dinner',
  templateUrl: './request-dinner.component.html',
  styleUrls: ['./request-dinner.component.scss']
})
export class RequestDinnerComponent implements OnInit {
  isShow = false;
  lunchForm!:FormGroup;
  constructor(private _fb:FormBuilder) {
    this.lunchForm = this.createForm();
   }

  ngOnInit(): void {

  }
  createForm() {
    return this._fb.group({
      date:['',[Validators.required]],
    });
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
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }
  toggleAddNew(){
    this.isShow = !this.isShow;
  }

  dropdownData = {
    label: 'Project',
    placeholder: 'Project',
    list: LUNCH_DROPDOWN,
  };
  onSave(){
    console.log("lol");

  }
}
