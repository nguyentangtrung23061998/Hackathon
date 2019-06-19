import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {UserLoginService} from './user-login.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  providers:[UserLoginService]
})
export class UserLoginComponent implements OnInit {

  formLoginUser:FormGroup;
  
  constructor( private fb: FormBuilder,
                private router:Router,
                private userSV:UserLoginService) {
    this.formLoginUser = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
   }
   login(){
     console.log(this.formLoginUser.value);
     this.userSV.setLogin(this.formLoginUser.value);
     this.router.navigate(['/']);
   }
   signIn(){
    this.router.navigate(['/signin']);
   }
  ngOnInit() {
  }

}
