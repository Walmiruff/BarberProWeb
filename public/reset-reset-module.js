(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-reset-module"],{

/***/ "./src/app/reset/reset-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/reset/reset-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ResetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetRoutingModule", function() { return ResetRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset.component */ "./src/app/reset/reset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _reset_component__WEBPACK_IMPORTED_MODULE_2__["ResetComponent"]
    }
];
var ResetRoutingModule = /** @class */ (function () {
    function ResetRoutingModule() {
    }
    ResetRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ResetRoutingModule);
    return ResetRoutingModule;
}());



/***/ }),

/***/ "./src/app/reset/reset.component.css":
/*!*******************************************!*\
  !*** ./src/app/reset/reset.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reset/reset.component.html":
/*!********************************************!*\
  !*** ./src/app/reset/reset.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light\" style=\"position: absolute\" id=\"ftco-navbar\">\n    \n    <img class=\"mr-2\" src=\"assets\\image\\LogoBS.png\" >\n    <a class=\"navbar-brand\"  routerLink=\"\"  href=\"#\">BarberPro</a>\n     <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\n      <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\"><a routerLink=\"\" class=\"nav-link\" href=\"#\">{{ 'NAV.HOME' | translate }}</a></li>\n          <li class=\"nav-item active\"> <a routerLink=\"/app\" class=\"nav-link\" href=\"#\">{{ 'NAV.SERVICESSCHED' | translate }}</a></li>\n          <li class=\"nav-item\"><a routerLink=\"/login\" class=\"nav-link\" href=\"#\">{{ 'NAV.LOGIN' | translate }}</a></li>\n       </ul>\n    </div>\n\n</nav>\n\n\n\n<div class=\"hero-wrap\" style=\"background-image: url('assets/image/b1.jpg');\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\"  data-scrollax-parent=\"true\">\n\n      <div class=\"col-md-6 mt-5 text-center \" data-scrollax=\" properties: { translateY: '70%' }\">\n\n        <div class=\"card  mt-5\">\n          <div class=\"card-header\" style=\"background-color: white; border-bottom-color: white\">\n            <img class=\"mt-3 thumbnail rounded-circle img-thumbnail\" src=\"assets/image/dog2.jpg\">\n          </div>\n\n          <h4 class=\"card-title\" style=\"color: #ce9c6b\">{{ 'RESET.TITLERESET' | translate }}</h4>\n          <div class=\"card-body\">\n\n\n            <form class=\"form-horizontal\" [formGroup]=\"formulario\" (ngSubmit)=\"onSubmit()\">\n\n              <div class=\"row mb-2\"  [ngClass]=\"aplicaCssErro('email')\">\n                <input class=\"mx-2 form-control\" formControlName=\"email\" id=\"email\" type=\"email\" placeholder=\"{{ 'LOGIN.EMAIL' | translate }}\">\n                <app-error-msg [control]=\"formulario.get('email')\" label=\"{{ 'LOGIN.EMAIL' | translate }}\"></app-error-msg>\n                <!--Mensagem de erro de validaçao assyncrona-->\n                <!--app-campo-control-erro [mostrarErro]=\"formulario.get('email').status === 'PENDING'\" msgErro=\"Validating email...\"></app-campo-control-erro>\n                <app-campo-control-erro [mostrarErro]=\"formulario.get('email').status === 'VALID'\" msgErro=\"Valid email\"></app-campo-control-erro>\n                <app-campo-control-erro [mostrarErro]=\"formulario.get('email').hasError('emailInvalido')\" msgErro=\"Email in use!\"></app-campo-control-erro-->\n              </div>\n\n              <!--div class=\"row mb-2\"  [ngClass]=\"aplicaCssErro('password')\">\n                <input class=\"mx-2 form-control\" formControlName=\"password\" id=\"password\" type=\"password\" placeholder=\"Password\">\n                <app-error-msg [control]=\"formulario.get('password')\" label=\"Password\"></app-error-msg>\n              </div-->\n\n              \n              <button class=\"btn btn-primary mb-3\" type=\"submit\">{{ 'RESET.BUTTONRESET' | translate }}</button>\n            </form>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reset/reset.component.ts":
/*!******************************************!*\
  !*** ./src/app/reset/reset.component.ts ***!
  \******************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/usuario/usuario.service */ "./src/app/shared/service/usuario/usuario.service.ts");
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







var ResetComponent = /** @class */ (function () {
    function ResetComponent(authService, formBuilder, usuarioService, router, toastr, translate) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.usuarioService = usuarioService;
        this.router = router;
        this.toastr = toastr;
        this.translate = translate;
        this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
        this.browserLg = browserLang;
    }
    ResetComponent.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    ResetComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.formulario.valid) {
            this.authService.resetPassword(this.formulario)
                .then(function (user) {
                _this.router.navigate(['/login']);
                _this.toastRedefSenha();
            })
                .catch(function (error) {
                _this.toastError();
            });
        }
        else {
            this.verificaValidacoesForm(this.formulario);
        }
    };
    ResetComponent.prototype.verificaValidacoesForm = function (formGroup) {
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
    ResetComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo),
        };
    };
    ResetComponent.prototype.verificaValidTouched = function (campo) {
        return !this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
    };
    ResetComponent.prototype.toastError = function () {
        if (this.browserLg === 'de') {
            this.toastr.error('E-Mail-Adresse falsch!');
        }
        if (this.browserLg === 'en') {
            this.toastr.error('Email address incorrect!');
        }
        if (this.browserLg === 'es') {
            this.toastr.error('Dirección de correo electrónico incorrecta!');
        }
        if (this.browserLg === 'fr') {
            this.toastr.error('Adresse email incorrecte!');
        }
        if (this.browserLg === 'it') {
            this.toastr.error('Indirizzo email errato!');
        }
        if (this.browserLg === 'pt') {
            this.toastr.error('Endereço de email incorreto!');
        }
    };
    ResetComponent.prototype.toastRedefSenha = function () {
        if (this.browserLg === 'de') {
            this.toastr.success('Eine E-Mail zum Zurücksetzen des Passworts wurde gesendet.');
        }
        if (this.browserLg === 'en') {
            this.toastr.success('A password reset email has been sent.');
        }
        if (this.browserLg === 'es') {
            this.toastr.success('Se ha enviado un correo electrónico para restablecer la contraseña.');
        }
        if (this.browserLg === 'fr') {
            this.toastr.success('Un email de réinitialisation de mot de passe a été envoyé.');
        }
        if (this.browserLg === 'it') {
            this.toastr.success('È stata inviata un\'email di reimpostazione della password.');
        }
        if (this.browserLg === 'pt') {
            this.toastr.success('Um e-mail de redefinição de senha foi enviado.');
        }
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.css */ "./src/app/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _shared_service_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/reset/reset.module.ts":
/*!***************************************!*\
  !*** ./src/app/reset/reset.module.ts ***!
  \***************************************/
/*! exports provided: ResetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetModule", function() { return ResetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset.component */ "./src/app/reset/reset.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _reset_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-routing.module */ "./src/app/reset/reset-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ResetModule = /** @class */ (function () {
    function ResetModule() {
    }
    ResetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _reset_routing_module__WEBPACK_IMPORTED_MODULE_7__["ResetRoutingModule"]
            ],
            declarations: [_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResetComponent"]]
        })
    ], ResetModule);
    return ResetModule;
}());



/***/ }),

/***/ "./src/app/shared/service/auth/auth.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/service/auth/auth.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(httpClient, angularFireAuth, db) {
        this.httpClient = httpClient;
        this.angularFireAuth = angularFireAuth;
        this.db = db;
        this.API = "" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API;
    }
    // Login email-senha
    AuthService.prototype.createUser = function (userForm) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(userForm.get('email').value, userForm.get('password').value);
    };
    AuthService.prototype.signIn = function (userForm) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(userForm.get('email').value, userForm.get('password').value);
    };
    AuthService.prototype.resetPassword = function (userForm) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(userForm.get('email').value);
    };
    AuthService.prototype.signOutFirebase = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], AuthService);
    return AuthService;
}());



/***/ })

}]);
//# sourceMappingURL=reset-reset-module.js.map