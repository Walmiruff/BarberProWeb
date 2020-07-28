import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TranslateModule } from '@ngx-translate/core';

import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { EditarComponent } from './modal/editar/editar.component';
import { GravarComponent } from './modal/gravar/gravar.component';
import { ErroModalComponent } from './modal/erro-modal/erro-modal.component';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,

    NgxBootstrapModule,


  ],
  declarations: [
    ErrorMsgComponent,
    EditarComponent,
    GravarComponent,
    ErroModalComponent,
  ],

  exports: [
    ErrorMsgComponent
  ],







})
export class SharedModule { }
