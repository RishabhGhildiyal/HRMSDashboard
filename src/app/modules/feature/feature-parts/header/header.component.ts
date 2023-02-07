import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isToggle = new EventEmitter();
  isExpanded = true;
  showSubmenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  clickMenu(){
    console.log("dncjszdcjac");

    this.isExpanded = !this.isExpanded
    this.isToggle.emit(this.isExpanded)
    }

}
