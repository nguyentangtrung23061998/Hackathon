import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {TooltipPosition} from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss']
})
export class ListQuestionComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[2]);

  dataSource = new MatTableDataSource();
  displayQuestionText=false;
  displayQuestionImage=false;
  displayQuestionVideo=false;
  displayQuestionAudio=false;
  displayDapAn=false;

  displayColumnResult=['IdCauHoi','LoaiCauHoi','NoiDungCauHoi','CauA','CauB','CauC','CauD','DapAn','ThaoTac'];
  //loaiCauHoi=['Chữ','Hình Ảnh','Video','Âm Thanh'];
  loaiCauHoi=[
    {value: 'Chu' ,viewValue:'Chữ'},
    {value: 'HinhAnh' ,viewValue:'Hình Ảnh'},
    {value: 'Video' ,viewValue:'Video'},
    {value: 'Am' ,viewValue:'Âm Thanh'},
  ]
  valueDapAn=[
    {value: 'A'},
    {value: 'B'},
    {value: 'C' },
    {value: 'D' },
  ]
  myResult = [
    {
      IdCauHoi:'1',LoaiCauHoi:'Text', NoiDungCauHoi: 'Java Virtual Machine là gì?',
      CauA:'Là một thành phần của Java platform dùng để đọc mã bytecode trong file .class',
      CauB:'Là chương trình biên dịch của java dùng để biên dịch file nguồn java thành mã',
      CauC:'Là chương trình chạy cho java',
      CauD:'Tất cả các đáp án đều đúng',
      DapAn:'A'
    },

    {
      IdCauHoi:'2',LoaiCauHoi:'HinhAnh', NoiDungCauHoi: '../../../../../assets/img/background.jpg',CauA:'Câu A',
      CauB:'Câu B',CauC:'Câu C',CauD:'Câu D',DapAn:'B'
    },

    {
      IdCauHoi:'3',LoaiCauHoi:'Video', NoiDungCauHoi: '../../../../../assets/video/q1.mp4',CauA:'Câu A',
      CauB:'Câu B',CauC:'Câu C',CauD:'Câu D',DapAn:'D'
    },
    {
      IdCauHoi:'4',LoaiCauHoi:'AmThanh', NoiDungCauHoi:'../../../../../assets/audio/Focus_GLB_1_MP3_001.mp3',CauA:'Câu A',
      CauB:'Câu B',CauC:'Câu C',CauD:'Câu D',DapAn:'D'
    }
  ]

  valueQuestion(e){
    // if(e === '')
    if(e === 'Chữ'){
      this.displayQuestionText = true;
      this.displayQuestionImage = false;
      this.displayQuestionVideo = false;
      this.displayQuestionAudio = false;
      this.displayDapAn=true;
    }
    if(e === 'Hình Ảnh'){
      this.displayQuestionImage = true;
      this.displayQuestionText = false;
      this.displayQuestionVideo = false;
      this.displayQuestionAudio = false;
      this.displayDapAn=true;
    }
    if(e==='Video'){
      this.displayQuestionVideo = true;
      this.displayQuestionImage = false;
      this.displayQuestionText = false;
      this.displayQuestionAudio = false;
      this.displayDapAn=true;
    }
    if(e === 'Âm Thanh'){
      this.displayQuestionAudio = true;
      this.displayQuestionText = false;
      this.displayQuestionImage = false;
      this.displayQuestionVideo = false;
      this.displayDapAn=true;
    }
  }

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.myResult);
    console.log(this.dataSource);
  }

}
