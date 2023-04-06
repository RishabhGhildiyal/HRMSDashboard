import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { commonTableModule } from 'src/app/modules/common/common-table/common-table.module';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AllProjectComponent } from './all-project/all-project.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { AbsolutePipeModule } from 'src/app/pipes/absolutePipe/absolute-path.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ProjectsComponent,
    AllProjectComponent,
    ProjectGridComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    commonTableModule,
    ForDirectiveModule,
    AngularEditorModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    AbsolutePipeModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ForDirectiveModule

  ]
})
export class ProjectsModule { }
