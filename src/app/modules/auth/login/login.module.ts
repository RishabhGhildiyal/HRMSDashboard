import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { CredentialLoginComponent } from './credential-login/credential-login.component';


import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ShowErrorModule } from 'src/app/pipes/showErrorPipe/show-error.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        LoginComponent,
        GoogleLoginComponent,
        CredentialLoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        ShowErrorModule,
        MatSnackBarModule

    ]
})
export class LoginModule { }
