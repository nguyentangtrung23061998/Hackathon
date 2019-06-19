import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { HttpService } from './shared/services/http.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService,
    private http: HttpService,
    private cookieService: CookieService,
    private router: Router) {
    const localUserAccount = this.cookieService.get('userAccount');
    if (localUserAccount) {
      const userAcc = JSON.parse(localUserAccount);
      this.authService.logIn(userAcc);
    }
    
  }
}
