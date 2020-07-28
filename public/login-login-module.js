(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light\" style=\"position: absolute\" id=\"ftco-navbar\">\n    \n    <img class=\"mr-2\" src=\"assets\\image\\LogoBS.png\" >\n    <a class=\"navbar-brand\"  routerLink=\"\"  href=\"#\">BarberPro</a>\n     <button   class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" ><a routerLink=\"\" class=\"nav-link\" href=\"#\">{{ 'NAV.HOME' | translate }}</a></li>\n        <li class=\"nav-item\" > <a routerLink=\"/app\" class=\"nav-link\" href=\"#\">{{ 'NAV.SERVICESSCHED' | translate }}</a></li>\n        <li class=\"nav-item active\"><a (click)=\"Logout()\" class=\"nav-link\" href=\"#\">{{ 'NAV.LOGIN' | translate }}</a></li>\n       </ul>\n    </div>\n\n</nav>\n\n\n\n<div class=\"hero-wrap\" style=\"background-image: url('assets/image/b1.jpg');\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\"  data-scrollax-parent=\"true\">\n\n      <div class=\"col-md-6 mt-5 text-center \" data-scrollax=\" properties: { translateY: '70%' }\">\n\n        <div class=\"card  mt-5\">\n          <div class=\"card-header\" style=\"background-color: white; border-bottom-color: white\">\n            <img class=\"mt-3 thumbnail rounded-circle img-thumbnail\" src=\"assets/image/dog2.jpg\">\n          </div>\n\n          <h4 class=\"card-title\" style=\"color: #ce9c6b\">{{ 'LOGIN.LOGIN' | translate }}</h4>\n          <div class=\"card-body\">\n\n            <!--div *ngIf=\"isloginError\" class=\"alert alert-danger\" role=\"alert\">\n              Incorrect username or password\n            </div-->\n            <form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n\n              <div class=\"row mb-2\">\n                <input class=\"mx-2 form-control\" formControlName=\"email\" id=\"email\" type=\"email\" placeholder=\"{{ 'LOGIN.EMAIL' | translate }}\">\n                <app-error-msg [control]=\"formulario.get('email')\" label=\"{{ 'LOGIN.EMAIL' | translate }}\"></app-error-msg>\n               \n              </div>\n\n              <div class=\"row mb-2\">\n                <input class=\"mx-2 form-control\" formControlName=\"password\" id=\"password\" type=\"password\" placeholder=\"{{ 'LOGIN.PASSWORD' | translate }}\">\n                <app-error-msg [control]=\"formulario.get('password')\" label=\"{{ 'LOGIN.PASSWORD' | translate }}\"></app-error-msg>\n              </div>\n\n       \n\n            <button class=\"btn btn-primary mb-3\" type=\"submit\" >{{ 'LOGIN.AUTH' | translate }}</button>\n            </form>\n           \n            <div [hidden]=\"mostraRedefinirSenha\" class=\"row align-items-center justify-content-center\">\n               <a href=\"#\" class=\"card-link\" routerLink=\"/reset\" style=\"color: crimson\" >{{ 'LOGIN.RESET' | translate }}</a>\n            </div>\n\n            <div class=\"row align-items-center justify-content-center\">\n              <span class=\"mr-2\">{{ 'LOGIN.NOACCOUNT' | translate }}</span>\n              <a href=\"#\" class=\"card-link\" routerLink=\"/register\">{{ 'LOGIN.REGISTER' | translate }}</a>\n            </div>\n\n          </div>\n        </div>\n\n\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/usuario/usuario.service */ "./src/app/shared/service/usuario/usuario.service.ts");
/* harmony import */ var _shared_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/user/user.service */ "./src/app/shared/service/user/user.service.ts");
/* harmony import */ var _shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/auth/auth.service */ "./src/app/shared/service/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, formBuilder, router, usuarioService, userService, translate) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.usuarioService = usuarioService;
        this.userService = userService;
        this.translate = translate;
        this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]]
        });
        this.mostraRedefinirSenha = true;
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formulario.valid) {
            this.authService.signIn(this.formulario)
                .then(function () {
                _this.router.navigate(['menu']);
            })
                .catch(function (error) {
                _this.mostraRedefinirSenha = false;
            });
        }
        else {
            this.verificaValidacoesForm(this.formulario);
        }
    };
    LoginComponent.prototype.verificaValidacoesForm = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (campo) {
            // console.log(campo);
            var controle = formGroup.get(campo);
            controle.markAsDirty();
            controle.markAsUntouched();
            if (controle instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.verificaValidacoesForm(controle);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _shared_service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_7__["LoginRoutingModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map