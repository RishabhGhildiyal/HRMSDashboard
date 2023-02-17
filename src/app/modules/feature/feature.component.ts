import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {delay } from 'rxjs/operators';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  @ViewChild("sidenav") sidenav!: MatSidenav;
  isShowing = true;
  showSubmenu: boolean = false;
  isExpanded = true;
  smallWindow = false;
  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    this.observer.observe(["(max-width:1000px)"]).pipe(delay(1)).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav?.close();
        this.isShowing = true;
        this.smallWindow = true;
      } else {
        this.sidenav.mode = "side";
        this.smallWindow = false;
        this.isExpanded = true;
        this.sidenav.open();
      }
    });
  }

  updateIsExpanded(value: boolean) {
    if (this.smallWindow) {
      this.isShowing = true;
      this.sidenav.toggle();
    } else {
      this.isShowing = value;
      this.isExpanded = value;
    }
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  stateChange(value: any) { }
}
