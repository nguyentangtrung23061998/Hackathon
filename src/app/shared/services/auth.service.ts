import { Injectable } from '@angular/core';
import { UserAccount } from '../models/user-account.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userAccount : UserAccount;

  set userAccount(data:any){
    if(this._userAccount instanceof UserAccount){
      this._userAccount.deserialize(data);
    }else{
      this._userAccount = new UserAccount().deserialize(data);
    }
    this.cookieService.set( 
      'userAccount',
      JSON.stringify(this.userAccount),
    )
  }
  get userAccount(){
    return this._userAccount instanceof UserAccount ? this._userAccount.serializable() : this._userAccount; 
  }

  get token(){
    return this._userAccount instanceof UserAccount ? this._userAccount.token  : null;
  }

  get isLoggedIn(){
    return this._userAccount instanceof UserAccount ? true : false;
  }

  get isAdmin(){
    return this.isLoggedIn && this._userAccount.isAdmin;
  }
  
  logOUt(){
    this._userAccount = null;
    this.cookieService.delete('userAccount','/');
  }

  logIn(data){
    this.userAccount=data;
  }
  constructor(private cookieService:CookieService) {

  }

}
