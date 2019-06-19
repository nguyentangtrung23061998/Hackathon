import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignInComponent } from "./user-sign-in.component";
import { UserSignInRoutingModule } from "./user-signin-routing.module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserSignInComponent],
  imports: [
    CommonModule,
    UserSignInRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class UserSignInModule { }
