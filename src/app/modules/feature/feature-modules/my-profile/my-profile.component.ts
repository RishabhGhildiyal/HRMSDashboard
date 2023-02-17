import { Component, OnInit } from '@angular/core';
import { ListItems } from './my-profile-constant-lists';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  myProfileList=ListItems;
  constructor() { }

  ngOnInit(): void {
  }

}
