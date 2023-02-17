import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss']
})
export class NavListItemComponent implements OnInit {

  @Input()  item:any;
  @Input() isShowing:boolean =false;
  showSubmenu=false;
  constructor() { }

  ngOnInit(): void {
  }

}
