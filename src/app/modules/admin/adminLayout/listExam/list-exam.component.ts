import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.scss']
})
export class ListExamComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  dataSource = new MatTableDataSource();

  displayColumnResult=['IdDeThi','SoCau','MucDoDeThi','ThoiGian'];
  myResult = [
    {
      IdDeThi:'1', SoCau: 10,MucDoDeThi:'Dễ',ThoiGian:10
    },

    {
      IdDeThi:'2',  SoCau: 20,MucDoDeThi:'Khó',ThoiGian:20
    },

  ]

  ngOnInit() {
    this.dataSource=new MatTableDataSource(this.myResult);
  }

}
