import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { ResetComponent } from './reset.component';

import { SharedModule } from '../shared/shared.module';
import { ResetRoutingModule } from './reset-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule,
    ResetRoutingModule
  ],
  declarations: [ResetComponent]
})
export class ResetModule { }
