import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDeclarationRoutingModule } from './asset-declaration-routing.module';
import { AssetDeclarationComponent } from './asset-declaration.component';
import { commonTableModule } from "../../../../common/common-table/common-table.module";
import { ForDirectiveModule } from 'src/app/modules/common/for-directive/for-directive.module';
import { FooterModule } from '../../../feature-parts/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [
        AssetDeclarationComponent
    ],
    imports: [
        CommonModule,
        AssetDeclarationRoutingModule,
        commonTableModule,
        ForDirectiveModule,
        FooterModule,
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule
    ]
})
export class AssetDeclarationModule { }
