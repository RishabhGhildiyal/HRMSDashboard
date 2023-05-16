import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  EDUCATION_LEVEL,
  LANGUAGE,
  PAGE_OPTIONS,
} from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
import { FormService } from 'src/app/services/form.service';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import {
  DOCUMENTS_LIST_CONFIG,
  UserTableDataSource,
} from './qualification.modal';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations: [
    trigger('enterLeaveAnimation', [
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
    ]),
  ],
})
export class QualificationComponent implements OnInit {
  infoForm!: FormGroup;
  language: string[] = ['English', 'Hindi'];
  today = new Date();

  constructor(
    private fb: FormBuilder,
    private service: FormService,
    private router: Router,
    private snack: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.infoForm = this.createForm();
    this.populateTable(this.pageOptions);
  }
  createForm() {
    return this.fb.group({
      schoolUni: this.service.getControl('schoolUni'),
      education: this.service.getControl('education'),
      time: this.service.getControl('time'),
      toInput: this.service.getControl('toInput'),
      professionalCourse: this.service.getControl('professionalCourse'),
      language: this.service.getControl('language'),
    });
  }

  info() {
    if (this.infoForm.valid) {
      this.infoForm.value['id'] = Math.floor(Math.random() * 1000);
      this.docsData.push(this.infoForm.value);
      console.log(this.infoForm.value, 'iop');

      this.populateTable(this.pageOptions);
    } else {
      this.infoForm.markAllAsTouched();
      this.snack.open('Fill the required fields', '', {
        duration: 2000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar', 'login-snackbar'],
      });
    }
  }
  numbers = new FormControl('');

  numberList: number[] = [10, 20, 30, 40];

  openDialog() {
    this.dialog.open(DialogComponentComponent);
  }

  // @ViewChild() abc!:HTMLElement;
  DOCS_DATA = [
    {
      schoolUni: 'Amity University',
      time: '	09-08-2019 - 09-06-2022',
      professionalCourse: 'MCA',
      language: 'ENglish',
      fromInput: '09-08-2019',
      toInput: '09-06-2022',
      id: 101,
      // last_modified: 'May-13-2022',
    },
    {
      schoolUni: 'dit University',
      time: '	Jul-08-2019 - Jun-06-2022',
      professionalCourse: 'BCA',
      language: 'English',
      fromInput: '09-08-2019',
      toInput: '09-06-2022',
      id: 102,
      // last_modified: 'May-13-2022',
    },
  ];

  docsData: Array<any> = this.DOCS_DATA;

  listingConfig = DOCUMENTS_LIST_CONFIG;
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  // tableSource is 2 things : columnNames and data
  //column names are fetched fromt the model file and data is fetched though API or const data file

  populateTable(pageOptions: any) {
    if (pageOptions.hasOwnProperty('search')) {
      this.docsData = this.docsData.filter((item: any) => {
        if (
          item.schoolUni
            .toLowerCase()
            .includes(pageOptions.search.toLowerCase()) ||
          item.professionalCourse
            .toLowerCase()
            .includes(pageOptions.search.toLowerCase())
        ) {
          //for custom search on individual fields
          return item;
        }
      });
    }

    this.listingConfig.total = this.docsData.length;

    let beg = pageOptions.page * pageOptions.limit - pageOptions.limit;
    let end = pageOptions.page * pageOptions.limit;
    console.log(beg, 'this is the beginning');
    console.log(end, 'this is the end');

    let displayRow = [];
    for (let i = beg; i < end && i < this.listingConfig.total; i++) {
      displayRow.push(this.docsData[i]);
    }

    this.tableSource = new UserTableDataSource(
      displayRow.map((item: any, index: number) => ({
        ...item,
        sn: beg + index + 1,
      }))
    );
    console.log(this.tableSource, '123TS');
  }

  edit(rowData: any) {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      data: rowData,
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      for (let i = 0; i < this.tableSource.data.length; i++) {
        console.log(this.tableSource.data[i].id, '-----', res.id);

        if (this.tableSource.data[i].id == res.id) {
          this.tableSource.data[i] = res;
        }
      }
    });
  }

  delete(row: any) {
    this.tableSource.data = this.tableSource.data.filter(
      (item: any) => item.id != row.id
    );
    console.log(row, '2222');
  }

  onTableEventChange(data: any) {
    this.pageOptions = data;
    console.log(data, '9887');
    this.docsData = this.DOCS_DATA;
    this.populateTable(this.pageOptions);
  }

  fetchData() {}

  schoolUniData = {
    // label:'School/University',
    placeholder: 'school/university',
    list: EDUCATION_LEVEL,
  };

  languageData = {
    // label: 'language',
    placeholder: 'language',
    list: LANGUAGE,
  };
}


