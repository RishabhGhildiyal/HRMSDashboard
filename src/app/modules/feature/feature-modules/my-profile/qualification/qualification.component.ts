import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
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
  education: string[] = [
    'High School Diploma/GED',
    'Btech',
    'Mtech',
    'BE',
    'Bsc',
    'BCA',
    'MCA',
    'BBA',
    'Msc',
  ];
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
      time: this.service.getControl('time'),
      toInput: this.service.getControl('toInput'),
      professionalCourse: this.service.getControl('professionalCourse'),
    });
  }

  info() {
    if (this.infoForm.valid) {
      this.docsData.push(this.infoForm.value);
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
  docsData: Array<any> = [
    {
      schoolUni: ' Amity University',
      time: '	Jul-08-2019 - Jun-06-2022',
      professionalCourse: 'MCA',
      // last_modified: 'May-13-2022',
    },
    {
      schoolUni: ' dit University',
      time: '	Jul-08-2019 - Jun-06-2022',
      professionalCourse: 'MCA',
      // last_modified: 'May-13-2022',
    },

  ];
  listingConfig = DOCUMENTS_LIST_CONFIG;
  pageOptions = PAGE_OPTIONS;
  tableSource: Table.Source<any> = new UserTableDataSource([]);
  // tableSource is 2 things : columnNames and data
  //column names are fetched fromt the model file and data is fetched though API or const data file

  populateTable(pageOptions: any) {
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

  edit() {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      // width:'30rem'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(row: any) {
    console.log(row, '2222');
  }

  onTableEventChange(data: any) {
    this.pageOptions = data;
    this.populateTable(this.pageOptions);
  }

  fetchData() {}
}
