import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { StudentComponent } from './student/student.component';
import { ListExamComponent } from './listExam/list-exam.component';
import { ListQuestionComponent } from './listQuestion/list-question.component';
import { ResultChartComponent } from './tableChart/result-chart.component';
const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      { 
        path: '' , redirectTo:'student'
      },
      {
        path: 'student', component: StudentComponent
      },
      {
        path: 'listexam', component: ListExamComponent
      },
      {
        path: 'listquestion', component: ListQuestionComponent
      },
      {
        path: 'chart', component: ResultChartComponent
      }

    ]
  }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule { }
