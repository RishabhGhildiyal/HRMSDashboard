import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BASICINFO, CHANGEPASSWORD, LOGIN } from 'src/app/constants/routes';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';
import { enterLeaveAnimation } from 'src/app/animations/enterLeave';
import { Store } from '@ngrx/store';
import { getProfilePictureSelector } from 'src/app/store/selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[enterLeaveAnimation]
})
export class HeaderComponent implements OnInit {
  @Output() stateChange = new EventEmitter();
  isExpanded = true;
  showSubmenu: boolean = false;
  imgURL:any;
  @Input() smallWindow!:boolean;

  show =false;

  constructor(private router:Router, public dialog:MatDialog, private store: Store) { }

  ngOnInit(): void {
    this.store.select(getProfilePictureSelector).subscribe((res:any)=>{
      this.imgURL = res?.profile
    })
  }

  clickMenu(){
    console.log("dncjszdcjac");

    this.isExpanded = !this.isExpanded
    this.stateChange.emit(this.isExpanded)
    }
    toprofile(){
      this.router.navigate([BASICINFO.fullurl])
    }
    toChangePassword(){
      this.router.navigate([CHANGEPASSWORD.fullurl])

    }
    toLogin(){
      localStorage.clear();
      this.router.navigate([LOGIN.fullurl])

    }
    openDialog(){
      let config: MatDialogConfig = {
        width: '40rem',
        panelClass:'app-full-bleed'
      };
      this.dialog.open(HelpDialogComponent,config)
    }

    openNotification(){
      this.show =!this.show;
      console.log("blah blah");

    }
    toggleDiv() {
      this.show = !this.show;
    }

}
