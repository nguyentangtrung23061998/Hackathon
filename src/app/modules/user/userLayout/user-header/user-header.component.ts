import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {
  @Input() activeIconID: string = null;
  constructor(private router:Router,
              private authService:AuthService,
              private http:HttpService) { }
  signOut(){
    debugger
    this.authService.logOUt();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
