import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestAssetRoutingModule } from './request-asset-routing.module';
import { RequestAssetComponent } from './request-asset.component';
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        RequestAssetComponent
    ],
    imports: [
        CommonModule,
        RequestAssetRoutingModule,
        ForDirectiveModule,
        FooterModule,
        commonTableModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class RequestAssetModule { }
