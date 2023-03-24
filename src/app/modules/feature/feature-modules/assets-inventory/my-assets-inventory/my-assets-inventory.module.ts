import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAssetsInventoryRoutingModule } from './my-assets-inventory-routing.module';
import { MyAssetsInventoryComponent } from './my-assets-inventory.component';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        MyAssetsInventoryComponent
    ],
    imports: [
        CommonModule,
        MyAssetsInventoryRoutingModule,
        commonTableModule,
        ForDirectiveModule,
        FooterModule,
        MatButtonModule
    ]
})
export class MyAssetsInventoryModule { }
