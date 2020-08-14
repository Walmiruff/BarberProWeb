import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { RegisterComponent } from './register.component';

import { SharedModule } from '../shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';





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
    CampoControlErroComponent,
  ]
})
export class RegisterModule { }
