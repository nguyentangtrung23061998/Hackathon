import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {UserLayoutComponent} from './user-layout.component';
import { DashboarUserComponent } from './dashboard/dashboar-user.component';
import { GetStartExamComponent } from './getStart/get-start-exam.component';
import { ResultComponent } from './result/result.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path:'',component:UserLayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'dashboard'
      },
      {
        path:'dashboard',
        component:DashboarUserComponent
      },
      {
        path:'exam',
        component:GetStartExamComponent
      },
      {
        path:'result',
        component:ResultComponent
      },
      {
        path:'chart',
        component:ChartComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLayoutRoutingModule { }
