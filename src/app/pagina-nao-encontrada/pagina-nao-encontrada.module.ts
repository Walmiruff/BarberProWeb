import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from '../app-routing.module';
import { PaginaNaoEncontradaRoutingModule } from './pagina-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule,
    PaginaNaoEncontradaRoutingModule
  ],
  declarations: [PaginaNaoEncontradaComponent]
})
export class PaginaNaoEncontradaModule { }
