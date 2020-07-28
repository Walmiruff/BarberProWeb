import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  imports: [
    CommonModule,
    NgbModalModule.forRoot(),

  ],
  declarations: [],

  exports: [
    NgbModalModule,
  ]
})
export class NgxBootstrapModule { }
