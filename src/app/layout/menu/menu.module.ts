import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localePt from '@angular/common/locales/pt';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import localeIt from '@angular/common/locales/it';


import { TranslateModule } from '@ngx-translate/core';

import { MenuComponent } from './menu.component';

// import { ErroModalComponent } from '../../shared/modal/erro-modal/erro-modal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DemoUtilsModule } from '../demo-utils/demo-utils.module';
import { MenuRoutingModule } from './menu-routing.module';



registerLocaleData(localeFr);
registerLocaleData(localePt);
registerLocaleData(localeDe);
registerLocaleData(localeEs);
registerLocaleData(localeEn);
registerLocaleData(localeIt);


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,

    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    DemoUtilsModule,
    MenuRoutingModule

  ],
  declarations: [MenuComponent],

  exports: [MenuComponent]
/*
  entryComponents: [
    ErroModalComponent
  ]*/
})
export class MenuModule { }
