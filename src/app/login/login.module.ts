import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';






@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,

    SharedModule,

    LoginRoutingModule

  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
