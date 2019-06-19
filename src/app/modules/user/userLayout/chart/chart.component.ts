import { Component, OnInit } from '@angular/core';
import { UserLayoutComponent } from '../user-layout.component';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss','../styleUser.scss']
})
export class ChartComponent implements OnInit {
  dataSource = [];
  displayColumnResult=['STT','Info','Point','Achievements'];
  myResult = [
    {
      STT:'1', Name: 'Trung',Point:'100',Achievements:'B'
    },

    {
      STT:'2', Name: 'Tố',Point:'80',Achievements:'B'
    },

    {
      STT:'3', Name: 'Tài',Point:'75',Achievements:'B'
    }
  ]
  constructor( private userLayout:UserLayoutComponent) { 
    this.userLayout.setActiveId("ChartId");
  }

  ngOnInit() {
   this.dataSource=this.myResult;

  }

}
