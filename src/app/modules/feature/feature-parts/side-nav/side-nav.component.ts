import { Component, OnInit, Input } from '@angular/core';
import { sideNavList } from './sideNavConstants';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() isExpanded = true;
  @Input() isShowing = true;
  itemList = sideNavList;
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;

  constructor(){
  }
  ngOnInit(): void {}

}
