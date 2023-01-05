import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterFormRoutingModule } from './register-form-routing.module';
import { RegisterFormComponent } from './register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterFormModule { }
