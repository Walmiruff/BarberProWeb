(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0KVQ":function(t,e){t.exports='<nav  class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" style="position: absolute" id="ftco-navbar">\n    \n    <img class="mr-2" src="assets\\image\\LogoBS.png" >\n    <a class="navbar-brand"  routerLink=""  href="#">BarberPro</a>\n     <button   class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">\n      <span class="navbar-toggler-icon"></span>\n    </button>\n\n    <div class="collapse navbar-collapse" id="ftco-nav">\n      <ul class="navbar-nav ml-auto">\n        <li class="nav-item" ><a routerLink="" class="nav-link" href="#">{{ \'NAV.HOME\' | translate }}</a></li>\n        <li class="nav-item" > <a routerLink="/app" class="nav-link" href="#">{{ \'NAV.SERVICESSCHED\' | translate }}</a></li>\n        <li class="nav-item active"><a  class="nav-link" href="#">{{ \'NAV.LOGIN\' | translate }}</a></li>\n       </ul>\n    </div>\n\n</nav>\n\n\n\n<div class="hero-wrap" style="background-image: url(\'assets/image/b1.jpg\');" data-stellar-background-ratio="0.5">\n  <div class="overlay"></div>\n  <div class="container">\n    <div class="row no-gutters slider-text align-items-center justify-content-center"  data-scrollax-parent="true">\n\n      <div class="col-md-6 mt-5 text-center " data-scrollax=" properties: { translateY: \'70%\' }">\n\n        <div class="card  mt-5">\n          <div class="card-header" style="background-color: white; border-bottom-color: white">\n            <img class="mt-3 thumbnail rounded-circle img-thumbnail" src="assets/image/dog2.jpg">\n          </div>\n\n          <h4 class="card-title" style="color: #ce9c6b">{{ \'LOGIN.LOGIN\' | translate }}</h4>\n          <div class="card-body">\n\n            \x3c!--div *ngIf="isloginError" class="alert alert-danger" role="alert">\n              Incorrect username or password\n            </div--\x3e\n            <form class="form-horizontal" [formGroup]="formulario" (ngSubmit)="onSubmit()">\n\n              <div class="row mb-2">\n                <input class="mx-2 form-control" formControlName="email" id="email" type="email" placeholder="{{ \'LOGIN.EMAIL\' | translate }}">\n                <app-error-msg [control]="formulario.get(\'email\')" label="{{ \'LOGIN.EMAIL\' | translate }}"></app-error-msg>\n               \n              </div>\n\n              <div class="row mb-2">\n                <input class="mx-2 form-control" formControlName="password" id="password" type="password" placeholder="{{ \'LOGIN.PASSWORD\' | translate }}">\n                <app-error-msg [control]="formulario.get(\'password\')" label="{{ \'LOGIN.PASSWORD\' | translate }}"></app-error-msg>\n              </div>\n\n       \n\n            <button class="btn btn-primary mb-3" type="submit" >{{ \'LOGIN.AUTH\' | translate }}</button>\n            </form>\n           \n            <div [hidden]="mostraRedefinirSenha" class="row align-items-center justify-content-center">\n               <a href="#" class="card-link" routerLink="/reset" style="color: crimson" >{{ \'LOGIN.RESET\' | translate }}</a>\n            </div>\n\n            <div class="row align-items-center justify-content-center">\n              <span class="mr-2">{{ \'LOGIN.NOACCOUNT\' | translate }}</span>\n              <a href="#" class="card-link" routerLink="/register">{{ \'LOGIN.REGISTER\' | translate }}</a>\n            </div>\n\n          </div>\n        </div>\n\n\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n'},X3zk:function(t,e,n){"use strict";n.r(e);var a=n("CcnG"),r=n("Ip0R"),o=n("gIcY"),s=n("t/Na"),i=n("A7o+"),l=n("ZYCi"),c=n("XFU+"),d=n("vFp4"),f=n("13tP"),u=function(t,e,n,a){var r,o=arguments.length,s=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,a);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},p=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},m=function(){function t(t,e,n,a,r,o){this.authService=t,this.formBuilder=e,this.router=n,this.usuarioService=a,this.userService=r,this.translate=o,this.translate.addLangs(["de","en","es","fr","it","pt"]),this.translate.setDefaultLang("en");var s=this.translate.getBrowserLang();this.translate.use(s.match(/de|en|es|fr|it|pt/)?s:"en")}return t.prototype.ngOnInit=function(){this.formulario=this.formBuilder.group({email:[null,[o.h.required,o.h.email]],password:[null,[o.h.required,o.h.minLength(6),o.h.maxLength(20)]]}),this.mostraRedefinirSenha=!0},t.prototype.onSubmit=function(){var t=this;this.formulario.valid?this.authService.signIn(this.formulario).then(function(){t.router.navigate(["menu"])}).catch(function(e){t.mostraRedefinirSenha=!1}):this.verificaValidacoesForm(this.formulario)},t.prototype.verificaValidacoesForm=function(t){var e=this;Object.keys(t.controls).forEach(function(n){var a=t.get(n);a.markAsDirty(),a.markAsUntouched(),a instanceof o.c&&e.verificaValidacoesForm(a)})},t=u([Object(a.n)({selector:"app-login",template:n("0KVQ"),styles:[n("n7sk")]}),p("design:paramtypes",[f.a,o.a,l.b,c.a,d.a,i.c])],t)}(),v=n("PCNd"),g=function(t,e,n,a){var r,o=arguments.length,s=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,a);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},h=[{path:"",component:m}],b=function(){function t(){}return t=g([Object(a.K)({imports:[l.c.forChild(h)],exports:[l.c]})],t)}();n.d(e,"LoginModule",function(){return O});var y=function(t,e,n,a){var r,o=arguments.length,s=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,a);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},O=function(){function t(){}return t=y([Object(a.K)({imports:[r.b,s.b,o.d,o.g,i.b,v.a,b],declarations:[m]})],t)}()},n7sk:function(t,e){t.exports=""}}]);