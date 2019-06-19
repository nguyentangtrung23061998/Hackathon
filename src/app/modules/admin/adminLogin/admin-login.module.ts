import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminLoginRoutingModule} from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AdminLoginModule { }
