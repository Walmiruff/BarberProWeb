import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RegisterComponent } from './register.component';

import { SharedModule } from '../shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    RegisterRoutingModule
  ],
  declarations: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
