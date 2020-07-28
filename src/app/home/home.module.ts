import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';

import { SharedModule } from '../shared/shared.module';

import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,

    SharedModule,

    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
