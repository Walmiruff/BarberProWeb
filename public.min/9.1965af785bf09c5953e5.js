(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/cdV":function(n,l,t){"use strict";t.r(l);var a=t("CcnG"),u=function(){},e=t("pMnS"),r=t("A7o+"),o=t("Ip0R"),i=t("ZYCi"),s=(t("Oipj"),t("t9fZ")),c=t("ji6D"),p=t("13tP"),f=t("vFp4"),g=t("AytR"),b=function(){function n(n,l,t,a,u,e){var r=this;this.router=n,this.authService=l,this.afAuth=t,this.pmt=a,this.translate=u,this.userservice=e,this.afAuth.authState.pipe(Object(s.a)(1)).subscribe(function(n){r.dataUserCreate=n.metadata.creationTime,r.dataUserConnect=n.metadata.lastSignInTime,r.codigoUsuario=n.uid}),this.translate.addLangs(["de","en","es","fr","it","pt"]),this.translate.setDefaultLang("en");var o=this.translate.getBrowserLang();this.browserLg=this.translate.getBrowserCultureLang(),this.translate.use(o.match(/de|en|es|fr|it|pt/)?o:"en"),this.locale=o}return n.prototype.ngOnInit=function(){this.oneSignal(),this.configHandler(),this.mostrarPre\u00e7os()},n.prototype.trial=function(n){if("active"!==n){if(this.days=14-Math.trunc((Date.parse(this.dataUserConnect)-Date.parse(this.dataUserCreate))/864e5),!(this.days<0))return this.badge=this.days;document.getElementById("openModalButton").click()}},n.prototype.assinar=function(){this.openHandler(),this.router.navigate(["/login"])},n.prototype.naoAssinar=function(){this.userservice.delUser(this.codigoUsuario),this.router.navigate(["/login"])},n.prototype.oneSignal=function(){this.userIdOneSignalSalao=localStorage.getItem("userId"),this.userservice.atualizarOneSignal(this.codigoUsuario,this.userIdOneSignalSalao)},n.prototype.configHandler=function(){var n=this;this.handler=StripeCheckout.configure({key:g.a.stripeKey,image:"./favicon.ico",locale:"auto",token:function(l){n.pmt.processPayment(l,n.codigoUsuario,n.browserLg)}})},n.prototype.mostrarPre\u00e7os=function(){this.price="de"===this.browserLg?"Abonnieren Sie f\xfcr \u20ac 29 pro Monat":"es"===this.browserLg?"Suscr\xedbete por \u20ac 29 por mes":"fr"===this.browserLg?"Abonnez-vous pour 29 \u20ac par mois":"it"===this.browserLg?"Iscriviti per \u20ac 29 al mese":"pt"===this.browserLg?"Subscrever 29 \u20ac por m\xeas":"en"===this.browserLg?"Subscribe for $ 29 per Month":"pt-BR"===this.browserLg?"Subscrever R$ 39 por m\xeas":"Subscribe for $ 29 per Month"},n.prototype.openHandler=function(){this.handler.open("de"===this.browserLg?{name:"BarberPro",description:"PRO-Abonnement",amount:2900,currency:"EUR"}:"en"===this.browserLg?{name:"BarberPro",description:"PRO Subscription",amount:2900,currency:"USD"}:"es"===this.browserLg?{name:"BarberPro",description:"PRO Suscripci\xf3n",amount:2900,currency:"EUR"}:"fr"===this.browserLg?{name:"BarberPro",description:"Abonnement PRO",amount:2900,currency:"EUR"}:"it"===this.browserLg?{name:"BarberPro",description:"Abbonamento PRO",amount:2900,currency:"EUR"}:"pt"===this.browserLg?{name:"BarberPro",description:"Assinatura PRO",amount:2900,currency:"EUR"}:"pt-BR"===this.browserLg?{name:"BarberPro",description:"Assinatura PRO",amount:3900,currency:"BRL"}:{name:"BarberPro",description:"PRO Subscription",amount:2900,currency:"USD"})},n.prototype.Logout=function(){this.authService.signOutFirebase(),this.router.navigate(["/login"])},n}(),m=t("VRCc"),d=a.Ta({encapsulation:0,styles:[["*[_ngcontent-%COMP%]{transition:margin-left .2s ease-in-out}.main-container[_ngcontent-%COMP%]{margin-top:56px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}.collapsed[_ngcontent-%COMP%]{margin-left:100px}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}@media print{.main-container[_ngcontent-%COMP%]{margin-top:0!important;margin-left:0!important}}"]],data:{}});function h(n){return a.ob(0,[(n()(),a.Va(0,0,null,null,3,"a",[["class","nav-link"],["style","cursor: pointer"]],null,null,null,null,null)),(n()(),a.Va(1,0,null,null,0,"span",[["class","far fa-check-circle"]],null,null,null,null,null)),(n()(),a.mb(2,null,[" ",""])),a.gb(131072,r.i,[r.j,a.i])],null,function(n,l){n(l,2,0,a.nb(l,2,0,a.fb(l,3).transform("NAV.SUB")))})}function v(n){return a.ob(0,[(n()(),a.Va(0,0,null,null,1,"span",[["class","badge badge-danger"]],null,null,null,null,null)),(n()(),a.mb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.badge)})}function y(n){return a.ob(0,[(n()(),a.Va(0,0,null,null,4,"a",[["class","nav-link"],["style","cursor: pointer"]],null,[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==n.component.openHandler()&&a),a},null,null)),(n()(),a.Va(1,0,null,null,0,"span",[["class","fa fa-shopping-bag"]],null,null,null,null,null)),(n()(),a.mb(2,null,[" "," "])),(n()(),a.Ma(16777216,null,null,1,null,v)),a.Ua(4,16384,null,0,o.m,[a.T,a.P],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,4,0,l.component.trial(l.parent.context.ngIf.status))},function(n,l){n(l,2,0,l.component.price)})}function k(n){return a.ob(0,[(n()(),a.Va(0,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),a.Ma(16777216,null,null,1,null,h)),a.Ua(2,16384,null,0,o.m,[a.T,a.P],{ngIf:[0,"ngIf"]},null),(n()(),a.Ma(16777216,null,null,1,null,y)),a.Ua(4,16384,null,0,o.m,[a.T,a.P],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,"active"==l.context.ngIf.status),n(l,4,0,"active"!=l.context.ngIf.status)},null)}function L(n){return a.ob(0,[(n()(),a.Va(0,0,null,null,1,"span",[["class","badge badge-danger"]],null,null,null,null,null)),(n()(),a.mb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.badge)})}function P(n){return a.ob(0,[(n()(),a.Va(0,0,null,null,5,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),a.Va(1,0,null,null,4,"a",[["class","nav-link"],["style","cursor: pointer"]],null,[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==n.component.openHandler()&&a),a},null,null)),(n()(),a.Va(2,0,null,null,0,"span",[["class","fa fa-shopping-bag"]],null,null,null,null,null)),(n()(),a.mb(3,null,[" "," "])),(n()(),a.Ma(16777216,null,null,1,null,L)),a.Ua(5,16384,null,0,o.m,[a.T,a.P],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,5,0,l.component.trial("noActive"))},function(n,l){n(l,3,0,l.component.price)})}function S(n){return a.ob(0,[(n()(),a.Va(0,0,null,null,24,"nav",[["class","navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"],["id","ftco-navbar"],["style","position: absolute"]],null,null,null,null,null)),(n()(),a.Va(1,0,null,null,0,"img",[["class","mr-2"],["src","assets\\image\\LogoBS.png"]],null,null,null,null,null)),(n()(),a.Va(2,0,null,null,1,"a",[["class","navbar-brand"],["style","color: white"]],null,null,null,null,null)),(n()(),a.mb(-1,null,["BarberPro"])),(n()(),a.Va(4,0,null,null,1,"button",[["aria-controls","ftco-nav"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler"],["data-target","#ftco-nav"],["data-toggle","collapse"],["style","margin-left: 0px"],["type","button"]],null,null,null,null,null)),(n()(),a.Va(5,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(n()(),a.Va(6,0,null,null,18,"div",[["class","collapse navbar-collapse"],["id","ftco-nav"]],null,null,null,null,null)),(n()(),a.Va(7,0,null,null,17,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(n()(),a.Ma(16777216,null,null,2,null,k)),a.Ua(9,16384,null,0,o.m,[a.T,a.P],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),a.gb(131072,o.b,[a.i]),(n()(),a.Va(11,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),a.Va(12,0,null,null,3,"a",[["class","nav-link"],["href","#"],["routerLink","/menu/calendario"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==a.fb(n,13).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),a.Ua(13,671744,null,0,i.l,[i.k,i.a,o.j],{routerLink:[0,"routerLink"]},null),(n()(),a.mb(14,null,["",""])),a.gb(131072,r.i,[r.j,a.i]),(n()(),a.Va(16,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),a.Va(17,0,null,null,3,"a",[["class","nav-link"],["href","#"],["routerLink","/menu/config"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==a.fb(n,18).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),a.Ua(18,671744,null,0,i.l,[i.k,i.a,o.j],{routerLink:[0,"routerLink"]},null),(n()(),a.mb(19,null,["",""])),a.gb(131072,r.i,[r.j,a.i]),(n()(),a.Va(21,0,null,null,3,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),a.Va(22,0,null,null,2,"a",[["class","nav-link"],["style","cursor: pointer"]],null,[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==n.component.Logout()&&a),a},null,null)),(n()(),a.mb(23,null,["",""])),a.gb(131072,r.i,[r.j,a.i]),(n()(),a.Ma(0,[["elseTemplatePag",2]],null,0,null,P)),(n()(),a.Va(26,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a.Ua(27,212992,null,0,i.n,[i.b,a.T,a.k,[8,null],a.i],null,null)],function(n,l){var t=l.component;n(l,9,0,a.nb(l,9,0,a.fb(l,10).transform(t.pmt.membership)),a.fb(l,25)),n(l,13,0,"/menu/calendario"),n(l,18,0,"/menu/config"),n(l,27,0)},function(n,l){n(l,12,0,a.fb(l,13).target,a.fb(l,13).href),n(l,14,0,a.nb(l,14,0,a.fb(l,15).transform("NAV.MYSCHEDULE"))),n(l,17,0,a.fb(l,18).target,a.fb(l,18).href),n(l,19,0,a.nb(l,19,0,a.fb(l,20).transform("NAV.SETTINGS"))),n(l,23,0,a.nb(l,23,0,a.fb(l,24).transform("NAV.LOGOUT")))})}var V=a.Ra("app-layout",b,function(n){return a.ob(0,[(n()(),a.Va(0,0,null,null,1,"app-layout",[],null,null,null,S,d)),a.Ua(1,114688,null,0,b,[i.k,p.a,m.a,c.a,r.j,f.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),w=function(){};t.d(l,"LayoutModuleNgFactory",function(){return U});var U=a.Sa(u,[],function(n){return a.cb([a.db(512,a.k,a.Ga,[[8,[e.a,V]],[3,a.k],a.A]),a.db(4608,o.o,o.n,[a.x,[2,o.E]]),a.db(1073742336,o.c,o.c,[]),a.db(1073742336,r.g,r.g,[]),a.db(1073742336,i.m,i.m,[[2,i.s],[2,i.k]]),a.db(1073742336,w,w,[]),a.db(1073742336,u,u,[]),a.db(1024,i.i,function(){return[[{path:"",component:b,children:[{path:"",redirectTo:"calendario",pathMatch:"prefix"},{path:"calendario",loadChildren:"./menu/menu.module#MenuModule"},{path:"config",loadChildren:"./config/config.module#ConfigModule"}]}]]},[])])})}}]);