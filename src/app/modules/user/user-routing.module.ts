import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { UserComponent } from "./user.component";
import { UserAuthGuardService } from './user-auth-guard.service';

const routes: Routes = [
	{
		
		path: '', component: UserComponent,
		children: [
			{
				path: 'login',
				loadChildren: './userLogin/user-login.module#UserLoginModule'
			},
			{
				path: 'signin',
				loadChildren: './userSignIn/user-sign-in.module#UserSignInModule'
				//canActivate: [CustomerAuthGuardService]
			},
			{
				path:'',
				loadChildren:'./userLayout/user-layout.module#UserLayoutModule',
				canActivate:[UserAuthGuardService]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [
		UserAuthGuardService
	]
})
export class UserRoutingModule {
}
