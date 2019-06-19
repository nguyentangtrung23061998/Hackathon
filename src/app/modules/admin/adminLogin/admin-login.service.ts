import { Injectable } from '@angular/core';
import { HttpService, Response } from '../../../shared/services/http.service';
import { AuthService } from '../../../shared/services/auth.service';
export { Response } from '../../../shared/services/http.service';
import {AdminLogin} from './admin-login.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  login(adminLogin: AdminLogin){
		const path = '/admin/login';
		return this._http.createNoAuth(path,adminLogin);
	}

	setLogin(data){
		this.authService.logIn(data);
	}
  constructor(private _http:HttpService,
              private authService:AuthService) { }
}
