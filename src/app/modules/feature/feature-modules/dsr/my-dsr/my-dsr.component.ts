import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {
  DSR_DROPDOWN,
  HOURS,
  PM_STATUS,
  PROJECT_DSR,
  SUBMISSION_DROPDOWN,
} from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { MyDsrTableDataSource, MYDSR_LIST_CONFIG } from './my-dsr.model';
import { DSR_DETAILS } from 'src/app/constants/routes';

@Component({
  selector: 'app-my-dsr',
  templateUrl: './my-dsr.component.html',
  styleUrls: ['./my-dsr.component.scss'],
})
export class MyDsrComponent implements OnInit {
  tableSource: Table.Source<any> = new MyDsrTableDataSource([]);
  today = new Date();

  isShow = false;
  dsrForm: FormGroup;
  project = new FormControl();
  submissionStatus = new FormControl();
  approvalStatus = new FormControl();
  hours = new FormControl();

  constructor(private _fb: FormBuilder, private route: Router) {
    this.dsrForm = this.createForm();
  }
  createForm() {
    return this._fb.group({
      date: ['', [Validators.required]],
      hours: ['', [Validators.required]],
      project: ['', [Validators.required]],
      description: [''],
      // time: ['', Validators.required],
    });
  }
  openDetails() {
    this.route.navigate([DSR_DETAILS.fullurl]);
  }
  onAddDsr() {
    // if (this.dsrForm.valid) {
    this.dsrForm.value['employee_name'] = 'Rishab';
    this.dsrForm.value['employee_id'] = 'AI1555';
    this.dsrForm.value['total'] = this.dsrForm.value.hours;
    this.dsrForm.value['email'] = "rishab@gmail.com";
    this.dsrForm.value['employment_type'] = "Permanent";
    this.tableSource.data.push(this.dsrForm.value);
    this.docsData.push(this.dsrForm.value);
    this.populateTable(this.PageOption);
    console.log(this.tableSource.data);
    // } else {
    // this.dsrForm.markAllAsTouched();
    // }
  }

  dropdownData = {
    label: 'Project',
    placeholder: 'Project',
    list: DSR_DROPDOWN,
  };
  submission_dropdown = {
    label: 'Submission Status',
    placeholder: 'Submission Status',
    list: SUBMISSION_DROPDOWN,
  };

  project_dSR = {
    label: 'Submission Status',
    placeholder: 'Submission Status',
    list: PROJECT_DSR,
  };

  approval_dropdown = {
    label: 'Approval Status',
    placeholder: 'Approval Status',
    list: PM_STATUS,
  };

  hours_dropdown = {
    label: 'Hours',
    placeholder: 'Hours',
    list: HOURS,
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
  listingConfig = MYDSR_LIST_CONFIG;
  PageOption = {
    page: '1',
    limit: '10',
  };
  ngOnInit(): void {
    this.populateTable(this.PageOption);
  }

  DOCS_DATA: Array<any> = [
    {
      sno: '1',
      employee_name: 'Rishabh',
      employee_id: 'AI1555',
      email: 'rishabh.ghildiyal@appinventiv.com',
      employment_type: 'Permanent',
      date: '30 feb 2023',
      total: '8',
      final_Approval: '',
    },
    {
      sno: '2',
      employee_name: 'Rishi G',
      employee_id: 'AI1555',
      email: 'rishabh.ghildiyal@appinventiv.com',
      employment_type: 'Permanent',
      date: '31 feb 2023',
      total: '8',
      final_Approval: '',
    },
  ];
  docsData: Array<any> = this.DOCS_DATA;

  populateTable(pageOptions: any) {
    this.listingConfig.total = this.docsData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit;
    if (pageOptions.hasOwnProperty('search')) {
      this.docsData = this.docsData.filter((item: any) => {
        if (
          item.employee_name
            .toLowerCase()
            .includes(pageOptions.search.toLowerCase()) ||
          item.date.toLowerCase().includes(pageOptions.search.toLowerCase())
        ) {
          //for custom search on individual fields
          console.log(item.education_level, 'alto');

          return item;
        }
      });
    }
    let displayRow = [];
    for (let i = beg; i < end && i < this.listingConfig.total; i++) {
      displayRow.push(this.docsData[i]);
    }

    this.tableSource = new MyDsrTableDataSource(
      displayRow.map((item: any, index: number) => ({
        ...item,
        sn: beg + index + 1,
      }))
    );
    console.log(this.tableSource, 'jhsygfa');
  }
  onTableEventChange(data: any) {
    this.PageOption = data;
    this.docsData = this.DOCS_DATA;

    this.populateTable(this.PageOption);
  }
  noWork(event: any) {
    // console.log(event,'otla');

    if (event.checked == true) {
      let str = 'No work has been done today';
      this.dsrForm.get('hours')?.setValue('0:00');
      this.dsrForm.get('description')?.setValue(str);
    } else if (event.checked == false) {
      this.dsrForm.get('hours')?.setValue('');
      this.dsrForm.get('description')?.setValue('');
    }
  }
}
