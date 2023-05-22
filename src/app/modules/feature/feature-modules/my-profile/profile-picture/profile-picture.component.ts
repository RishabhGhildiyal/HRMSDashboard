import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { getProfilePicture } from 'src/app/store/action';
import { getProfilePictureSelector } from 'src/app/store/selector';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations: [
    trigger('enterLeaveAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }), //apply default styles before animation starts
        animate(
          '750ms ease-in-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateX(0)' }), //apply default styles before animation starts
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(100%)' })
        ),
      ]),
    ]),
  ],
})
export class ProfilePictureComponent implements OnInit {
  imagePath: any;
  imgURL: any;
  size!: number;

  constructor(private snack: MatSnackBar, private store: Store) {}
  url: any;

  ngOnInit(): void {
    this.store.select(getProfilePictureSelector).subscribe((res:any)=>{
      this.imgURL = res.profile
    })
  }
  preview(files: any) {
    this.size = files[0]?.size;
    if (this.size <= 1000000) {
      if (files.length === 0) return;
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);

      reader.onload = (_event) => {
        this.imgURL = reader.result;
        console.log(reader.result,'weuf');
        this.store.dispatch(getProfilePicture({profile:reader.result}))
      };

    } else {
      this.snack.open('File limit is 1Mb', '', {
        duration: 2000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar', 'login-snackbar'],
      });
    }

  }
}
