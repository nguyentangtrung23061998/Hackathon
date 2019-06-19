import { Component, OnInit } from '@angular/core';
import { UserLayoutComponent } from '../user-layout.component';

@Component({
  selector: 'app-dashboar-user',
  templateUrl: './dashboar-user.component.html',
  styleUrls: ['./dashboar-user.component.scss']
})
export class DashboarUserComponent implements OnInit {
  dipslayHis=false;
  dipslayInfo=false;
  displayReq=false;
  displayTheLe=false;

  modalHackathon(e){
    if(e==='hist'){
      this.dipslayHis=true;
      this.dipslayInfo=false;
      this.displayReq=false;
      this.displayTheLe=false;
    }
    if(e==='info'){
      this.dipslayHis=false;
      this.dipslayInfo=true;
      this.displayReq=false;
      this.displayTheLe=false;
    }
    if(e==='req'){
      this.dipslayHis=false;
      this.dipslayInfo=false;
      this.displayReq=true;
      this.displayTheLe=false;
    }
    if(e==='thele'){
      this.dipslayHis=false;
      this.dipslayInfo=false;
      this.displayReq=false;
      this.displayTheLe=true;
    }
  }

  constructor(private userLayout:UserLayoutComponent) { 
    this.userLayout.setActiveId("DashboardId");
  }

  ngOnInit() {
  }

}
