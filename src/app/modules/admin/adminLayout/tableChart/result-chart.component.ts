import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-result-chart',
  templateUrl: './result-chart.component.html',
  styleUrls: ['./result-chart.component.scss']
})
export class ResultChartComponent implements OnInit {
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayColumnResult=['STT','HoTen','DeThi','TongDiem','XepLoai'];
  myResult = [
    {
      HoTen:'Nguyễn Tăng Trung',DeThi:'Đề 1',TongDiem:'100',XepLoai:'Giỏi'
    },

    {
      HoTen:'Nguyễn Thanh Tố',DeThi:'Đề 1',TongDiem:'20',XepLoai:'Yếu'
    },
    {
      HoTen:'Nguyễn Đức Tài',DeThi:'Đề 1',TongDiem:'80',XepLoai:'Khá'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.myResult);
  }

}
