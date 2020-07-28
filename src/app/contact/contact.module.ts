import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

import { TranslateModule } from '@ngx-translate/core';

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
