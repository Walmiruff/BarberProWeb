(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'calendario', pathMatch: 'prefix' },
            { path: 'calendario', loadChildren: './menu/menu.module#MenuModule' },
            { path: 'config', loadChildren: './config/config.module#ConfigModule' },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light\" style=\"position: absolute\"\n  id=\"ftco-navbar\">\n\n\n  <img class=\"mr-2\" src=\"assets\\image\\LogoBS.png\">\n  <a class=\"navbar-brand\" style=\"color: white\">BarberPro</a>\n\n\n  <button style=\"margin-left: 0px\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n\n\n  <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\n    <ul class=\"navbar-nav ml-auto\">\n\n      <li class=\"nav-item\" *ngIf=\"pmt.membership | async as pro; else elseTemplatePag\">\n        <a *ngIf=\"pro.status == 'active'\" class=\"nav-link\" style=\"cursor: pointer\">\n          <span class=\"far fa-check-circle\"></span>\n          {{ 'NAV.SUB' | translate }}</a>\n\n        <a (click)=\"openHandler()\" *ngIf=\"pro.status != 'active'\" class=\"nav-link\" style=\"cursor: pointer\">\n          <span class=\"fa fa-shopping-bag\"></span>\n          {{price}} <span class=\"badge badge-danger\" *ngIf=\"trial(pro.status)\">{{ badge }}</span> </a>\n      </li>\n\n      <li class=\"nav-item\"> <a routerLink=\"/menu/calendario\" class=\"nav-link\"\n          href=\"#\">{{ 'NAV.MYSCHEDULE' | translate }}</a></li>\n\n      <li class=\"nav-item\"> <a routerLink=\"/menu/config\" class=\"nav-link\" href=\"#\">{{ 'NAV.SETTINGS' | translate }}</a>\n      </li>\n      <li class=\"nav-item\"><a (click)=\"Logout()\" class=\"nav-link\"\n          style=\"cursor: pointer\">{{ 'NAV.LOGOUT' | translate }}</a></li>\n\n    </ul>\n  </div>\n\n</nav>\n\n<ng-template #elseTemplatePag>\n  <li class=\"nav-item\">\n    <a (click)=\"openHandler()\" class=\"nav-link\" style=\"cursor: pointer\">\n      <span class=\"fa fa-shopping-bag\"></span>\n      {{price}} <span class=\"badge badge-danger\" *ngIf=\"trial('noActive')\">{{ badge }}</span> </a>\n  </li>\n</ng-template>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 100px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _login_payment_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/payment-service.service */ "./src/app/login/payment-service.service.ts");
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/auth/auth.service */ "./src/app/shared/service/auth/auth.service.ts");
/* harmony import */ var _shared_service_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/service/user/user.service */ "./src/app/shared/service/user/user.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, authService, afAuth, pmt, translate, userservice) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.afAuth = afAuth;
        this.pmt = pmt;
        this.translate = translate;
        this.userservice = userservice;
        this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (user) {
            _this.dataUserCreate = user.metadata.creationTime;
            _this.dataUserConnect = user.metadata.lastSignInTime;
            _this.codigoUsuario = user.uid;
        });
        this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.browserLg = this.translate.getBrowserCultureLang();
        this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
        this.locale = browserLang;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.oneSignal();
        this.configHandler();
        this.mostrarPreços();
    };
    LayoutComponent.prototype.trial = function (status) {
        if (status !== 'active') {
            this.days = 14 - Math.trunc((Date.parse(this.dataUserConnect) - Date.parse(this.dataUserCreate)) / (24 * 60 * 60 * 1000));
            if (this.days < 0) {
                // open modalAss
                document.getElementById('openModalButton').click();
            }
            else {
                return this.badge = this.days;
            }
        }
    };
    LayoutComponent.prototype.assinar = function () {
        this.openHandler();
        this.router.navigate(['/login']);
    };
    LayoutComponent.prototype.naoAssinar = function () {
        this.userservice.delUser(this.codigoUsuario);
        this.router.navigate(['/login']);
    };
    LayoutComponent.prototype.oneSignal = function () {
        this.userIdOneSignalSalao = localStorage.getItem('userId');
        this.userservice.atualizarOneSignal(this.codigoUsuario, this.userIdOneSignalSalao);
    };
    LayoutComponent.prototype.configHandler = function () {
        var _this = this;
        this.handler = StripeCheckout.configure({
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].stripeKey,
            image: './favicon.ico',
            locale: 'auto',
            token: function (token) {
                _this.pmt.processPayment(token, _this.codigoUsuario, _this.browserLg);
            }
        });
    };
    LayoutComponent.prototype.mostrarPreços = function () {
        if (this.browserLg === 'de') {
            this.price = 'Abonnieren Sie für € 29 pro Monat';
        }
        else if (this.browserLg === 'es') {
            this.price = 'Suscríbete por € 29 por mes';
        }
        else if (this.browserLg === 'fr') {
            this.price = 'Abonnez-vous pour 29 € par mois';
        }
        else if (this.browserLg === 'it') {
            this.price = 'Iscriviti per € 29 al mese';
        }
        else if (this.browserLg === 'pt') {
            this.price = 'Subscrever 29 € por mês';
        }
        else if (this.browserLg === 'en') {
            this.price = 'Subscribe for $ 29 per Month';
        }
        else if (this.browserLg === 'pt-BR') {
            this.price = 'Subscrever R$ 39 por mês';
        }
        else {
            this.price = 'Subscribe for $ 29 per Month';
        }
    };
    LayoutComponent.prototype.openHandler = function () {
        if (this.browserLg === 'de') {
            this.handler.open({
                name: 'BarberPro',
                description: 'PRO-Abonnement',
                amount: 2900,
                currency: 'EUR'
            });
        }
        else if (this.browserLg === 'en') {
            this.handler.open({
                name: 'BarberPro',
                description: 'PRO Subscription',
                amount: 2900,
                currency: 'USD'
            });
        }
        else if (this.browserLg === 'es') {
            this.handler.open({
                name: 'BarberPro',
                description: 'PRO Suscripción',
                amount: 2900,
                currency: 'EUR'
            });
        }
        else if (this.browserLg === 'fr') {
            this.handler.open({
                name: 'BarberPro',
                description: 'Abonnement PRO',
                amount: 2900,
                currency: 'EUR'
            });
        }
        else if (this.browserLg === 'it') {
            this.handler.open({
                name: 'BarberPro',
                description: 'Abbonamento PRO',
                amount: 2900,
                currency: 'EUR'
            });
        }
        else if (this.browserLg === 'pt') {
            this.handler.open({
                name: 'BarberPro',
                description: 'Assinatura PRO',
                amount: 2900,
                currency: 'EUR'
            });
        }
        else if (this.browserLg === 'pt-BR') {
            this.handler.open({
                name: 'BarberPro',
                description: 'Assinatura PRO',
                amount: 3900,
                currency: 'BRL'
            });
        }
        else {
            this.handler.open({
                name: 'BarberPro',
                description: 'PRO Subscription',
                amount: 2900,
                currency: 'USD'
            });
        }
    };
    LayoutComponent.prototype.Logout = function () {
        //  localStorage.removeItem('userToken');
        this.authService.signOutFirebase();
        this.router.navigate(['/login']);
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _login_payment_service_service__WEBPACK_IMPORTED_MODULE_5__["PaymentServiceService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _shared_service_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map