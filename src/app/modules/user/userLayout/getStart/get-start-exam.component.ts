import { Component, OnInit } from '@angular/core';
import { UserLayoutComponent } from '../user-layout.component';

@Component({
  selector: 'app-get-start-exam',
  templateUrl: './get-start-exam.component.html',
  styleUrls: ['./get-start-exam.component.scss']
})
export class GetStartExamComponent implements OnInit {
  contentTextStartExam = true;
  displayQuestion = false;
  displayScore = false;
  displayTimer=false;
  questionNow = 0;
  totalQuestion = 10;
  color = 'primary';
  mode = 'determinate';
  value = 33.67;
  bufferValue = 100;
  arrayQuizService: any[] = [];
  dataQuizQuestion: any[] = [];
  lengthQuiz=0;
  countMouse = 0;
  totalCount = 0;
  k = 0;
  CountDownMinute = 10;
  CountDownSecond = 0;
  StatusCountdown : boolean =true;

  constructor(private userLayout:UserLayoutComponent) {
    // console.log(this.quizService.Reply)
    this.userLayout.setActiveId("ExamId");
  }

  quizService = [
    {
      Id:1, Question: 'Câu 1',LoaiCauHoi:'Text', Content: 'File chứa mã nguồn java sau khi được biên dịch có đuôi là gì?',
      CauA: '.java', CauB: '.class', CauC: '.jav', CauD: '.exe', DapAn: '.class'
    },

    {
      Id:2,Question: 'Câu 2',LoaiCauHoi:'HinhAnh', Content: '../../../../../assets/img/background2.jpg',
      CauA: 'Hầu hết là màu trắng', CauB: 'Màu xanh biển nhiều hơn', CauC: ' Màu sắc thường là tươi sáng', CauD: '   Màu đen từ đầu đến chân', DapAn: 'Màu xanh biển nhiều hơn'
    },

    {
      Id:3,Question: 'Câu 3',LoaiCauHoi:'Video', Content: '../../../../../assets/video/q1.mp4',
      CauA: 'Tham gia một trận đấu thể thao', CauB: 'Thả mình trên bãi biển', CauC: 'Hòa nhập vào đám đông nhộn nhịp', CauD: ' Ở nhà, tổ chức một bữa tiệc tối thân mật', DapAn: ' Ở nhà, tổ chức một bữa tiệc tối thân mật'
    },
    {
      Id:4,Question: 'Câu 4',LoaiCauHoi:'AmThanh', Content: '../../../../../assets/audio/Focus_GLB_1_MP3_001.mp3',
      CauA: 'Một chiếc vòng tay ', CauB: 'Dây đeo ngọc trai', CauC: ' Đồ dùng tiện lợi đi biển hay leo núi', CauD: ' Chiếc giỏ xách đời mới', DapAn: 'Dây đeo ngọc trai'
    }
  ]

  getQuestion(){
    //this.arrayQuizService[this.k]=[];
    this.dataQuizQuestion.push(this.arrayQuizService[this.k]);
    console.log(this.dataQuizQuestion);
  
  }
  answer(option, dapAn,IdCauHoi) {
    if(IdCauHoi  === this.arrayQuizService.length ){
      this.displayQuestion = false;
      this.displayScore = true;
    }
    if (option === dapAn) {
      this.totalCount++;
      this.dataQuizQuestion=[];
      this.value += 33.67;
      this.k++;
      this.getQuestion();
    } else {
      this.value += 33.67;
        this.dataQuizQuestion=[];
        this.k++;
        this.getQuestion();
    }
  }

  submit(){
    this.displayScore=true;
    this.displayQuestion = false;
  }

  getExam() {
    this.contentTextStartExam = false;
    this.displayQuestion = true;
    this.displayTimer = true;
    console.log(this.displayTimer)

  }

  chooseQuestion(idQuestion){
    this.dataQuizQuestion=[]
    this.k=idQuestion;
    this.value=0;
    this.value +=idQuestion*33.67;
    this.k--;
    this.getQuestion();
    
  }

  ngOnInit() {
    let that = this;
    for (let i = 0; i < this.quizService.length; i++) {
      this.arrayQuizService = this.quizService;
      this.lengthQuiz++;
    }
    this.getQuestion();
    
      setInterval(function(){
        if( that.displayTimer){
          that.CountDownSecond--;
          // if(that.CountDownMinute < 10 ){
          //   that.CountDownMinute = '0' + that.CountDownMinute;
          // }
          if(that.CountDownSecond == -1 ){
            that.CountDownMinute--;
            that.CountDownSecond=59;
          }
          if(that.CountDownMinute == 0 && that.CountDownSecond == 0){
            that.displayQuestion = false;
            that.displayScore = true;
            this.displayTimer = false;
          }
        }
      },1000)
    
  }

}
