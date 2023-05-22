import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestedTrainingsRoutingModule } from './requested-trainings-routing.module';
import { RequestedTrainingsComponent } from './requested-trainings.component';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';


@NgModule({
    declarations: [
        RequestedTrainingsComponent
    ],
    imports: [
        CommonModule,
        RequestedTrainingsRoutingModule,
        commonTableModule,
        FooterModule,
        ForDirectiveModule
    ]
})
export class RequestedTrainingsModule { }
