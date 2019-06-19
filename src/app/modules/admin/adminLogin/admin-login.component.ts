import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../user/userLogin/user-login.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { AdminLoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
  providers:[AdminLoginService]
})
export class AdminLoginComponent implements OnInit {

  formLoginAdmin: FormGroup;

  constructor(private router: Router,
    private adminSV:AdminLoginService,
    private fb: FormBuilder) {
    this.formLoginAdmin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  login() {
    this.adminSV.setLogin(this.formLoginAdmin.value);
    this.router.navigate(['/admin/student']);
  }


}
