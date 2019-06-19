import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLayoutComponent} from './admin-layout.component';
import {AdminLayoutRoutingModule} from './admin-layout-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { StudentComponent } from './student/student.component';
import { ListExamComponent } from './listExam/list-exam.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListQuestionComponent } from './listQuestion/list-question.component';
import { ResultChartComponent } from './tableChart/result-chart.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [AdminLayoutComponent, 
                StudentComponent, 
                ListExamComponent, 
                ListQuestionComponent,
                 ResultChartComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTooltipModule
  ]
})
export class AdminLayoutModule { }
