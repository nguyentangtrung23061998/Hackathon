import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserLayoutComponent} from './user-layout.component';
import {UserLayoutRoutingModule} from './user-layout-routing.module';
import { UserHeaderComponent } from './user-header/user-header.component';
import { DashboarUserComponent } from './dashboard/dashboar-user.component';
import { GetStartExamComponent } from './getStart/get-start-exam.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { ResultComponent } from './result/result.component';
import { ChartComponent } from './chart/chart.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [UserLayoutComponent,
       UserHeaderComponent,
       DashboarUserComponent,
       GetStartExamComponent,
       ResultComponent,
       ChartComponent
       
       ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UserLayoutModule { }
