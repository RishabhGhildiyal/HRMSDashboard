import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferAFriendRoutingModule } from './refer-a-friend-routing.module';
import { ReferAFriendComponent } from './refer-a-friend.component';
import { FooterModule } from '../../feature-parts/footer/footer.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ReferAFriendComponent
  ],
  imports: [
    CommonModule,
    ReferAFriendRoutingModule,
    FooterModule,
    MatDialogModule
  ]
})
export class ReferAFriendModule { }
