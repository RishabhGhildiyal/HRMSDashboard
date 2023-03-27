import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PAGE_SIZE_OPTIONS } from 'src/app/constants/common-constants';
import { Pagination } from './pagination';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent extends Pagination implements OnInit {
  @Input() config: any;
  @Output() changeListEvent: EventEmitter<any> = new EventEmitter();

  TOTAL_PAGE_SIZE_OPTIONS = PAGE_SIZE_OPTIONS;
  fitlerComponent!:Component
  constructor() {
    super()
   }

  get label(): string {
    return this.config.label;
  }

  get totalList(): number {
    return this.config.total;
  }
  get hasSearch(): boolean {
    return this.config ? this.config.options.search : false;
  }



  ngOnInit(): void {
    console.log(this.config,"CONFIG");
    this.fitlerComponent = this.config.options.filter;
  }

  ngAfterViewInit(){

  }


  get size() {

    return this.limit;
  }
  private _emitEvent() {

    this.changeListEvent.emit({ ...this.validPageOptions });
  }


  onPageHandler(data:any){
    this.pageOptionsOnChange = data;

    this._emitEvent();
  }

  setIndex(index:number){

    this.page = 1
    this._emitEvent();
    // setSearch
  }

  filterData(data:any){
    console.log(data,"12");

    this.filterOptions = {...data}; // appending data of fitler inside the queryparamas
    this.page = 1;
     console.log(this.filterOptions,"FO2");

    this._emitEvent()
  }

  searchData(e:string){
    if (this.search !== e) {
      this.search = e;
      this.page = 1;
      console.log(e,'search');

      this._emitEvent();
    }
    // this._emitEvent()

  }


}
