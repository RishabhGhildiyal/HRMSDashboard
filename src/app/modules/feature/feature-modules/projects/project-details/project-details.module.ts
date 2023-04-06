import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './project-details.component';
import { AbsolutePipeModule } from 'src/app/pipes/absolutePipe/absolute-path.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NotesComponent } from './notes/notes.component';
import { OverviewComponent } from './overview/overview.component';
import { DsrReportsComponent } from './dsr-reports/dsr-reports.component';
import { AddTagsComponent } from './add-tags/add-tags.component';
import { NotesDialogComponent } from './notes/notes-dialog/notes-dialog.component';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
    declarations: [
        ProjectDetailsComponent,
        NotesComponent,
        OverviewComponent,
        DsrReportsComponent,
        AddTagsComponent,
        NotesDialogComponent
    ],
    imports: [
        CommonModule,
        ProjectDetailsRoutingModule,
        AbsolutePipeModule,
        MatIconModule,
        MatTabsModule,
        commonTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        ForDirectiveModule,
        MatExpansionModule
    ]
})
export class ProjectDetailsModule { }
