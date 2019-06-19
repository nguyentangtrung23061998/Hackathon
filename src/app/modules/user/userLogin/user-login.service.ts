import { Injectable } from '@angular/core';

import {HttpService, Response} from '../../../shared/services/http.service';
import { AuthService } from 'src/app/shared/services/auth.service';

export interface User {
  identifier: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  login(user:User){
    return this._http.createNoAuth('/login',user);
  }

  setLogin(data){
    this.authService.logIn(data);
  }

  constructor(private _http: HttpService, private authService: AuthService) { }
}
