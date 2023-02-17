import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { sideNavList } from './sideNavConstants';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() showList = true
  @Input() showItem = true

  itemList = sideNavList

  @Input() isExpanded!: boolean;
  // @Input()  sidenav!: MatSidenav;

  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isShowing!: boolean;
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;
  sideNavList = sideNavList;
  constructor() { }

  ngOnInit(): void {
  }

  expand() {
    this.stateChange.emit(this.isExpanded);
  }

}
