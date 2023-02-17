import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() stateChange = new EventEmitter();
  isExpanded = true;
  showSubmenu: boolean = false;
  @Input() smallWindow!:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  clickMenu(){
    console.log("dncjszdcjac");

    this.isExpanded = !this.isExpanded
    this.stateChange.emit(this.isExpanded)
    }

}
