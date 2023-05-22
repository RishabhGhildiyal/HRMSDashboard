import { Component, OnInit } from '@angular/core';
import { ListItems } from './my-profile-constant-lists';
import { getProfilePictureSelector } from 'src/app/store/selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  myProfileList=ListItems;
  imgURL:any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(getProfilePictureSelector).subscribe((res:any)=>{
      console.log(res,'we');

      this.imgURL = res.profile;
    })
  }

}
