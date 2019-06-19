import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpService } from 'src/app/shared/services/http.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
  animations: [
    trigger('animationToggle', [
      state('right', style({ width: '234px' })),
      state('left', style({ width: '0px' })),

      transition('right <=> left', animate('100ms ease-in'))
    ])
  ]
})
export class AdminLayoutComponent implements OnInit {
  
  

  state: string = 'right';

  constructor(private router: Router,
    private authService: AuthService,
    private http: HttpService ) {
  }
  clickSideNav() {
    //this.state = (this.state === 'right' ? 'left' : 'right');
    //sidebarToggle
     $('#sidebar_admin').toggleClass("sidebarToggle");
     $('#app-content').toggleClass("contentToggle");
     
  }

  signOut() {
    this.authService.logOUt();
    this.router.navigate(['/admin/login']);
  }
  ngOnInit(){
  //   $(window).resize(function(){
 
  //     var width = $(window).width();
  //     console.log(width);
  //     if (width <= 768){
  //         $('#sidebar_admin').addClass('sidebarResponsive');
  //     }
      
  // });
  }
  
}
