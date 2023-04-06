import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PAGE_OPTIONS } from 'src/app/constants/common-constants';
import { Table } from 'src/app/modules/common/common-table/table.types';
// import { DOCUMENTS_LIST_CONFIG, UserTableDataSource } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @ViewChild('subNav', { static: false }) subNav!: any;

  isShow = false;

  numbers = new FormControl('');

  constructor(private router: Router, private cdref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
}
