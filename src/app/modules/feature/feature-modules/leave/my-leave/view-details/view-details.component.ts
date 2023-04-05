import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  leaveData = {
    leave_type:'Planned Leave',
    start_date:'2022-02-03',
    end_date:'2022-05-05',
    applied_on:'2022-04-05',
    level_1:'Suyash Saxena',
    level_2:'HR (Human Resource)',
  }


   obj =   {
      emp_name:'Ayush Singh(AI 1553)',
      leave_type:'Emergency Leave (CL)',
      leave_duration:'Full Day',
      applied_on:'2022-02-02',
      start_date: '2022-02-02',
      end_date:'2022-02-03',
      reason:"In need of urgent hospitalisation due to bad headlth ",
      remarks:'To hostital'
    }

}
