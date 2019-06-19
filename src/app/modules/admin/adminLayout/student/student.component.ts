import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayColumnResult=['STT','HoTen','SoDienThoai','Email'];
  myResult = [
    {
      STT:'1', HoTen: 'Trung',SoDienThoai:'0337230123',Email:'nguyentangtrung23061998@gmail.com'
    },

    {
      STT:'2',  HoTen: 'Trung',SoDienThoai:'0337230123',Email:'nguyentangtrung23061998@gmail.com'
    },

    {
      STT:'3',  HoTen: 'Trung',SoDienThoai:'0337230123',Email:'nguyentangtrung23061998@gmail.com'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.dataSource= new  MatTableDataSource(this.myResult);
    this.dataSource.paginator=this.paginator;
    console.log(this.dataSource)
  }

}
