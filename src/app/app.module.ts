import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from 'src/environments/environment';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
// import { HomeModule } from './home/home.module';
// import { LoginModule } from './login/login.module';
// import { PaginaNaoEncontradaModule } from './pagina-nao-encontrada/pagina-nao-encontrada.module';
// import { ContactModule } from './contact/contact.module';
// import { RegisterModule } from './register/register.module';
// import { MenuModule } from './menu/menu.module';
// import { ResetModule } from './reset/reset.module';
import { SharedModule } from './shared/shared.module';
// import { AuthInterceptor } from './guards/auth.interceptor';
// import { ConfigModule } from './config/config.module';
import { NgxBootstrapModule } from './shared/ngx-bootstrap/ngx-bootstrap.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';



// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
  /* for development
  return new TranslateHttpLoader(
      http,
      '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
      '.json'
  ); */
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ToastrModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    NgxBootstrapModule,
    // RegisterModule,
    // MenuModule,
    // HomeModule,
    // ContactModule,
   //  LoginModule,
   //  ResetModule,
   //  PaginaNaoEncontradaModule,
    // ConfigModule,
    SharedModule,
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  }),
  AppRoutingModule,
  ],

  providers: [
    /* {
  provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }*/
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
