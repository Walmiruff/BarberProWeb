(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{SpYX:function(n,e){n.exports="* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n"},"Tx//":function(n,e,t){"use strict";t.r(e);var a=t("CcnG"),r=t("Ip0R"),o=t("A7o+"),i=t("ZYCi"),s=t("Oipj"),c=t("t9fZ"),l=t("ji6D"),p=t("13tP"),d=t("vFp4"),u=t("AytR"),h=function(n,e,t,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,e,t,a);else for(var s=n.length-1;s>=0;s--)(r=n[s])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},g=function(n,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,e)},f=function(){function n(n,e,t,a,r,o){var i=this;this.router=n,this.authService=e,this.afAuth=t,this.pmt=a,this.translate=r,this.userservice=o,this.afAuth.authState.pipe(Object(c.a)(1)).subscribe(function(n){i.dataUserCreate=n.metadata.creationTime,i.dataUserConnect=n.metadata.lastSignInTime,i.codigoUsuario=n.uid}),this.translate.addLangs(["de","en","es","fr","it","pt"]),this.translate.setDefaultLang("en");var s=this.translate.getBrowserLang();this.browserLg=this.translate.getBrowserCultureLang(),this.translate.use(s.match(/de|en|es|fr|it|pt/)?s:"en"),this.locale=s}return n.prototype.ngOnInit=function(){this.oneSignal(),this.configHandler(),this.mostrarPre\u00e7os()},n.prototype.trial=function(n){if("active"!==n){if(this.days=14-Math.trunc((Date.parse(this.dataUserConnect)-Date.parse(this.dataUserCreate))/864e5),!(this.days<0))return this.badge=this.days;document.getElementById("openModalButton").click()}},n.prototype.assinar=function(){this.openHandler(),this.router.navigate(["/login"])},n.prototype.naoAssinar=function(){this.userservice.delUser(this.codigoUsuario),this.router.navigate(["/login"])},n.prototype.oneSignal=function(){this.userIdOneSignalSalao=localStorage.getItem("userId"),this.userservice.atualizarOneSignal(this.codigoUsuario,this.userIdOneSignalSalao)},n.prototype.configHandler=function(){var n=this;this.handler=StripeCheckout.configure({key:u.a.stripeKey,image:"./favicon.ico",locale:"auto",token:function(e){n.pmt.processPayment(e,n.codigoUsuario,n.browserLg)}})},n.prototype.mostrarPre\u00e7os=function(){"de"===this.browserLg?this.price="Abonnieren Sie f\xfcr \u20ac 29 pro Monat":"es"===this.browserLg?this.price="Suscr\xedbete por \u20ac 29 por mes":"fr"===this.browserLg?this.price="Abonnez-vous pour 29 \u20ac par mois":"it"===this.browserLg?this.price="Iscriviti per \u20ac 29 al mese":"pt"===this.browserLg?this.price="Subscrever 29 \u20ac por m\xeas":"en"===this.browserLg?this.price="Subscribe for $ 29 per Month":"pt-BR"===this.browserLg?this.price="Subscrever R$ 39 por m\xeas":this.price="Subscribe for $ 29 per Month"},n.prototype.openHandler=function(){"de"===this.browserLg?this.handler.open({name:"BarberPro",description:"PRO-Abonnement",amount:2900,currency:"EUR"}):"en"===this.browserLg?this.handler.open({name:"BarberPro",description:"PRO Subscription",amount:2900,currency:"USD"}):"es"===this.browserLg?this.handler.open({name:"BarberPro",description:"PRO Suscripci\xf3n",amount:2900,currency:"EUR"}):"fr"===this.browserLg?this.handler.open({name:"BarberPro",description:"Abonnement PRO",amount:2900,currency:"EUR"}):"it"===this.browserLg?this.handler.open({name:"BarberPro",description:"Abbonamento PRO",amount:2900,currency:"EUR"}):"pt"===this.browserLg?this.handler.open({name:"BarberPro",description:"Assinatura PRO",amount:2900,currency:"EUR"}):"pt-BR"===this.browserLg?this.handler.open({name:"BarberPro",description:"Assinatura PRO",amount:3900,currency:"BRL"}):this.handler.open({name:"BarberPro",description:"PRO Subscription",amount:2900,currency:"USD"})},n.prototype.Logout=function(){this.authService.signOutFirebase(),this.router.navigate(["/login"])},n=h([Object(a.n)({selector:"app-layout",template:t("hCdD"),styles:[t("SpYX")]}),g("design:paramtypes",[i.b,p.a,s.AngularFireAuth,l.a,o.c,d.a])],n)}(),b=function(n,e,t,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,e,t,a);else for(var s=n.length-1;s>=0;s--)(r=n[s])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},m=[{path:"",component:f,children:[{path:"",redirectTo:"calendario",pathMatch:"prefix"},{path:"calendario",loadChildren:"./menu/menu.module#MenuModule"},{path:"config",loadChildren:"./config/config.module#ConfigModule"}]}],v=function(){function n(){}return n=b([Object(a.K)({imports:[i.c.forChild(m)],exports:[i.c]})],n)}();t.d(e,"LayoutModule",function(){return w});var y=function(n,e,t,a){var r,o=arguments.length,i=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,e,t,a);else for(var s=n.length-1;s>=0;s--)(r=n[s])&&(i=(o<3?r(i):o>3?r(e,t,i):r(e,t))||i);return o>3&&i&&Object.defineProperty(e,t,i),i},w=function(){function n(){}return n=y([Object(a.K)({imports:[r.b,o.b,v],declarations:[f]})],n)}()},hCdD:function(n,e){n.exports='<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" style="position: absolute"\n  id="ftco-navbar">\n\n\n  <img class="mr-2" src="assets\\image\\LogoBS.png">\n  <a class="navbar-brand" style="color: white">BarberPro</a>\n\n\n  <button style="margin-left: 0px" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav"\n    aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n\n\n\n  <div class="collapse navbar-collapse" id="ftco-nav">\n    <ul class="navbar-nav ml-auto">\n\n      <li class="nav-item" *ngIf="pmt.membership | async as pro; else elseTemplatePag">\n        <a *ngIf="pro.status == \'active\'" class="nav-link" style="cursor: pointer">\n          <span class="far fa-check-circle"></span>\n          {{ \'NAV.SUB\' | translate }}</a>\n\n        <a (click)="openHandler()" *ngIf="pro.status != \'active\'" class="nav-link" style="cursor: pointer">\n          <span class="fa fa-shopping-bag"></span>\n          {{price}} <span class="badge badge-danger" *ngIf="trial(pro.status)">{{ badge }}</span> </a>\n      </li>\n\n      <li class="nav-item"> <a routerLink="/menu/calendario" class="nav-link"\n          href="#">{{ \'NAV.MYSCHEDULE\' | translate }}</a></li>\n\n      <li class="nav-item"> <a routerLink="/menu/config" class="nav-link" href="#">{{ \'NAV.SETTINGS\' | translate }}</a>\n      </li>\n      <li class="nav-item"><a (click)="Logout()" class="nav-link"\n          style="cursor: pointer">{{ \'NAV.LOGOUT\' | translate }}</a></li>\n\n    </ul>\n  </div>\n\n</nav>\n\n<ng-template #elseTemplatePag>\n  <li class="nav-item">\n    <a (click)="openHandler()" class="nav-link" style="cursor: pointer">\n      <span class="fa fa-shopping-bag"></span>\n      {{price}} <span class="badge badge-danger" *ngIf="trial(\'noActive\')">{{ badge }}</span> </a>\n  </li>\n</ng-template>\n\n<router-outlet></router-outlet>\n\n\n\n<button id="openModalButton" [hidden]="true" data-toggle="modal" data-target="#modalAss">Open Modal</button>\n\n<div class="modal" id="modalAss" data-backdrop="static">\n  <div class="modal-dialog">\n    <div class="modal-content">\n\n      <div class="modal-header" style="border-bottom-width: 0px">\n        <h5 class="modal-title" style="color: gray">BarberPro</h5>\n      </div>\n\n      <div class="modal-body">\n\n\n        <div class="container">\n\n          <div class="row">\n\n\n            <div class="col-md-12 mb-1">\n              <p>{{ \'HOME.TITLE26\' | translate }}</p>\n            </div>\n          </div>\n\n        </div>\n\n\n\n      </div>\n\n\n      <div class="modal-footer" style="padding: 20px; border-top-color: transparent">\n\n        <div>\n          <button class="btn btn-outline-primary mr-2"\n            data-dismiss="modal">{{ \'HOME.TITLE18\' | translate }}</button>\n          <button class="btn btn-primary"\n            data-dismiss="modal">{{ \'HOME.TITLE25\' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n'}}]);