(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{EgD5:function(r,t){r.exports='<nav  class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" style="position: absolute" id="ftco-navbar">\n    \n    <img class="mr-2" src="assets\\image\\LogoBS.png" >\n    <a class="navbar-brand"  routerLink=""  href="#">BarberPro</a>\n     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">\n      <span class="navbar-toggler-icon"></span>\n    </button>\n\n    <div class="collapse navbar-collapse" id="ftco-nav">\n      <ul class="navbar-nav ml-auto">\n          <li class="nav-item"><a routerLink="" class="nav-link" href="#">{{ \'NAV.HOME\' | translate }}</a></li>\n          <li class="nav-item active"> <a routerLink="/app" class="nav-link" href="#">{{ \'NAV.SERVICESSCHED\' | translate }}</a></li>\n          <li class="nav-item"><a routerLink="/login" class="nav-link" href="#">{{ \'NAV.LOGIN\' | translate }}</a></li>\n       </ul>\n    </div>\n\n</nav>\n\n\n\n<div class="hero-wrap" style="background-image: url(\'assets/image/b1.jpg\');" data-stellar-background-ratio="0.5">\n  <div class="overlay"></div>\n  <div class="container">\n    <div class="row no-gutters slider-text align-items-center justify-content-center"  data-scrollax-parent="true">\n\n      <div class="col-md-6 mt-5 text-center " data-scrollax=" properties: { translateY: \'70%\' }">\n\n        <div class="card  mt-5">\n          <div class="card-header" style="background-color: white; border-bottom-color: white">\n            <img class="mt-3 thumbnail rounded-circle img-thumbnail" src="assets/image/dog2.jpg">\n          </div>\n\n          <h4 class="card-title" style="color: #ce9c6b">{{ \'RESET.TITLERESET\' | translate }}</h4>\n          <div class="card-body">\n\n\n            <form class="form-horizontal" [formGroup]="formulario" (ngSubmit)="onSubmit()">\n\n              <div class="row mb-2"  [ngClass]="aplicaCssErro(\'email\')">\n                <input class="mx-2 form-control" formControlName="email" id="email" type="email" placeholder="{{ \'LOGIN.EMAIL\' | translate }}">\n                <app-error-msg [control]="formulario.get(\'email\')" label="{{ \'LOGIN.EMAIL\' | translate }}"></app-error-msg>\n                \x3c!--Mensagem de erro de valida\xe7ao assyncrona--\x3e\n                \x3c!--app-campo-control-erro [mostrarErro]="formulario.get(\'email\').status === \'PENDING\'" msgErro="Validating email..."></app-campo-control-erro>\n                <app-campo-control-erro [mostrarErro]="formulario.get(\'email\').status === \'VALID\'" msgErro="Valid email"></app-campo-control-erro>\n                <app-campo-control-erro [mostrarErro]="formulario.get(\'email\').hasError(\'emailInvalido\')" msgErro="Email in use!"></app-campo-control-erro--\x3e\n              </div>\n\n              \x3c!--div class="row mb-2"  [ngClass]="aplicaCssErro(\'password\')">\n                <input class="mx-2 form-control" formControlName="password" id="password" type="password" placeholder="Password">\n                <app-error-msg [control]="formulario.get(\'password\')" label="Password"></app-error-msg>\n              </div--\x3e\n\n              \n              <button class="btn btn-primary mb-3" type="submit">{{ \'RESET.BUTTONRESET\' | translate }}</button>\n            </form>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n'},H3gV:function(r,t,e){"use strict";e.r(t);var a=e("CcnG"),o=e("Ip0R"),s=e("t/Na"),n=e("gIcY"),i=e("A7o+"),c=e("ZYCi"),l=e("SZbH"),d=e("XFU+"),p=e("13tP"),u=function(r,t,e,a){var o,s=arguments.length,n=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(r,t,e,a);else for(var i=r.length-1;i>=0;i--)(o=r[i])&&(n=(s<3?o(n):s>3?o(t,e,n):o(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},f=function(r,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(r,t)},m=function(){function r(r,t,e,a,o,s){this.authService=r,this.formBuilder=t,this.usuarioService=e,this.router=a,this.toastr=o,this.translate=s,this.translate.addLangs(["de","en","es","fr","it","pt"]),this.translate.setDefaultLang("en");var n=this.translate.getBrowserLang();this.translate.use(n.match(/de|en|es|fr|it|pt/)?n:"en"),this.browserLg=n}return r.prototype.ngOnInit=function(){this.formulario=this.formBuilder.group({email:[null,[n.h.required,n.h.email]]})},r.prototype.onSubmit=function(){var r=this;this.formulario.valid?this.authService.resetPassword(this.formulario).then(function(t){r.router.navigate(["/login"]),r.toastRedefSenha()}).catch(function(t){r.toastError()}):this.verificaValidacoesForm(this.formulario)},r.prototype.verificaValidacoesForm=function(r){var t=this;Object.keys(r.controls).forEach(function(e){var a=r.get(e);a.markAsDirty(),a.markAsUntouched(),a instanceof n.c&&t.verificaValidacoesForm(a)})},r.prototype.aplicaCssErro=function(r){return{"has-error":this.verificaValidTouched(r),"has-feedback":this.verificaValidTouched(r)}},r.prototype.verificaValidTouched=function(r){return!this.formulario.get(r).valid&&(this.formulario.get(r).touched||this.formulario.get(r).dirty)},r.prototype.toastError=function(){"de"===this.browserLg&&this.toastr.error("E-Mail-Adresse falsch!"),"en"===this.browserLg&&this.toastr.error("Email address incorrect!"),"es"===this.browserLg&&this.toastr.error("Direcci\xf3n de correo electr\xf3nico incorrecta!"),"fr"===this.browserLg&&this.toastr.error("Adresse email incorrecte!"),"it"===this.browserLg&&this.toastr.error("Indirizzo email errato!"),"pt"===this.browserLg&&this.toastr.error("Endere\xe7o de email incorreto!")},r.prototype.toastRedefSenha=function(){"de"===this.browserLg&&this.toastr.success("Eine E-Mail zum Zur\xfccksetzen des Passworts wurde gesendet."),"en"===this.browserLg&&this.toastr.success("A password reset email has been sent."),"es"===this.browserLg&&this.toastr.success("Se ha enviado un correo electr\xf3nico para restablecer la contrase\xf1a."),"fr"===this.browserLg&&this.toastr.success("Un email de r\xe9initialisation de mot de passe a \xe9t\xe9 envoy\xe9."),"it"===this.browserLg&&this.toastr.success("\xc8 stata inviata un'email di reimpostazione della password."),"pt"===this.browserLg&&this.toastr.success("Um e-mail de redefini\xe7\xe3o de senha foi enviado.")},r=u([Object(a.n)({selector:"app-reset",template:e("EgD5"),styles:[e("oOes")]}),f("design:paramtypes",[p.a,n.a,d.a,c.b,l.b,i.c])],r)}(),h=e("PCNd"),g=function(r,t,e,a){var o,s=arguments.length,n=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(r,t,e,a);else for(var i=r.length-1;i>=0;i--)(o=r[i])&&(n=(s<3?o(n):s>3?o(t,e,n):o(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},b=[{path:"",component:m}],v=function(){function r(){}return r=g([Object(a.K)({imports:[c.c.forChild(b)],exports:[c.c]})],r)}();e.d(t,"ResetModule",function(){return y});var w=function(r,t,e,a){var o,s=arguments.length,n=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(r,t,e,a);else for(var i=r.length-1;i>=0;i--)(o=r[i])&&(n=(s<3?o(n):s>3?o(t,e,n):o(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n},y=function(){function r(){}return r=w([Object(a.K)({imports:[o.b,s.b,n.d,n.g,h.a,i.b,v],declarations:[m]})],r)}()},oOes:function(r,t){r.exports=""}}]);