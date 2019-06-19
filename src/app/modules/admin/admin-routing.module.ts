import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminAuthGuardService} from './admin-auth-guard.service';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: 'login',
        loadChildren: './adminLogin/admin-login.module#AdminLoginModule'
      },
      {
        path: '',
        loadChildren: './adminLayout/admin-layout.module#AdminLayoutModule',
        canActivate: [AdminAuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AdminAuthGuardService
  ]
})
export class AdminRoutingModule {
}
