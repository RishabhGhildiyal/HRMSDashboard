import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDeclarationRoutingModule } from './asset-declaration-routing.module';
import { AssetDeclarationComponent } from './asset-declaration.component';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { FooterModule } from '../../../feature-parts/footer/footer.module';


@NgModule({
    declarations: [
        AssetDeclarationComponent
    ],
    imports: [
        CommonModule,
        AssetDeclarationRoutingModule,
        commonTableModule,
        ForDirectiveModule,
        FooterModule
    ]
})
export class AssetDeclarationModule { }
