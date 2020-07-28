import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NgxBootstrapModule } from '../../shared/ngx-bootstrap/ngx-bootstrap.module';
import { ConfigComponent } from './config.component';

import { SharedModule } from '../../shared/shared.module';
// import { EditarComponent } from '../../shared/modal/editar/editar.component';
// import { GravarComponent } from '../../shared/modal/gravar/gravar.component';
import { DomingoComponent } from './my-form-sub-component/domingo/domingo.component';
import { SegundaComponent } from './my-form-sub-component/segunda/segunda.component';
import { TercaComponent } from './my-form-sub-component/terca/terca.component';
import { QuartaComponent } from './my-form-sub-component/quarta/quarta.component';
import { QuintaComponent } from './my-form-sub-component/quinta/quinta.component';
import { SextaComponent } from './my-form-sub-component/sexta/sexta.component';
import { SabadoComponent } from './my-form-sub-component/sabado/sabado.component';
import { PrecosComponent } from './my-form-sub-component/precos/precos.component';


import { TranslateModule } from '@ngx-translate/core';
import { ConfigRoutingModule } from './config-routing.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    TranslateModule,

    NgxBootstrapModule,


    SharedModule,

    ConfigRoutingModule
  ],
  declarations: [
    ConfigComponent,
    DomingoComponent,
    SegundaComponent,
    TercaComponent,
    QuartaComponent,
    QuintaComponent,
    SextaComponent,
    SabadoComponent,
    PrecosComponent
    ],
/*
  entryComponents: [
    EditarComponent,
    GravarComponent,
  ]*/
})
export class ConfigModule { }
