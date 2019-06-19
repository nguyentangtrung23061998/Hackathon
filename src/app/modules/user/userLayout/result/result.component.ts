import { Component, OnInit } from '@angular/core';
import { UserLayoutComponent } from '../user-layout.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})


export class ResultComponent implements OnInit {

  dataSource = [];
  displayColumnResult=['Question','Content','Choose','Reply'];
  myResult = [
    {
      Question:'Câu 1', Content: 'File chứa mã nguồn java sau khi được biên dịch có đuôi là gì?',Choose:'A',Reply:'B'
    },

    {
      Question:'Câu 2', Content: 'Ý nghĩa của hình ảnh trên là gì?',Choose:'B',Reply:'B'
    },

    {
      Question:'Câu 3', Content: 'Ý nghĩa của video trên là gì?',Choose:'D',Reply:'B'
    },
    {
      Question:'Câu 4', Content: 'Ý nghĩa của âm thanh trên là gì?',Choose:'D',Reply:'B'
    }
  ]

  constructor( private userLayout:UserLayoutComponent ) {
    this.userLayout.setActiveId("ResultId");
   }

  ngOnInit() {
    this.dataSource=this.myResult;
  }

}
