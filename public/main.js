(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./config/config.module": [
		"./src/app/layout/config/config.module.ts",
		"config-config-module~layout-layout-module~login-login-module~menu-menu-module",
		"common",
		"config-config-module"
	],
	"./contact/contact.module": [
		"./src/app/contact/contact.module.ts",
		"contact-contact-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"config-config-module~layout-layout-module~login-login-module~menu-menu-module",
		"common",
		"layout-layout-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"config-config-module~layout-layout-module~login-login-module~menu-menu-module",
		"common",
		"login-login-module"
	],
	"./menu/menu.module": [
		"./src/app/layout/menu/menu.module.ts",
		"config-config-module~layout-layout-module~login-login-module~menu-menu-module",
		"common",
		"menu-menu-module"
	],
	"./pagina-nao-encontrada/pagina-nao-encontrada.module": [
		"./src/app/pagina-nao-encontrada/pagina-nao-encontrada.module.ts",
		"pagina-nao-encontrada-pagina-nao-encontrada-module"
	],
	"./register/register.module": [
		"./src/app/register/register.module.ts",
		"common",
		"register-register-module"
	],
	"./reset/reset.module": [
		"./src/app/reset/reset.module.ts",
		"common",
		"reset-reset-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { MenuComponent } from './menu/menu.component';
// import { ConfigComponent } from './config/config.component';
var routes = [
    { path: 'menu', loadChildren: './layout/layout.module#LayoutModule', canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    { path: 'reset', loadChildren: './reset/reset.module#ResetModule' },
    { path: 'app', loadChildren: './contact/contact.module#ContactModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'paginanaoencontrada', loadChildren: './pagina-nao-encontrada/pagina-nao-encontrada.module#PaginaNaoEncontradaModule' },
    // { path: 'menu', component: MenuComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
    // { path: 'config', component: ConfigComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'paginanaoencontrada' } // pagina 404}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_ngx_bootstrap_ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/ngx-bootstrap/ngx-bootstrap.module */ "./src/app/shared/ngx-bootstrap/ngx-bootstrap.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { HomeModule } from './home/home.module';
// import { LoginModule } from './login/login.module';
// import { PaginaNaoEncontradaModule } from './pagina-nao-encontrada/pagina-nao-encontrada.module';
// import { ContactModule } from './contact/contact.module';
// import { RegisterModule } from './register/register.module';
// import { MenuModule } from './menu/menu.module';
// import { ResetModule } from './reset/reset.module';

// import { AuthInterceptor } from './guards/auth.interceptor';
// import { ConfigModule } from './config/config.module';



// AoT requires an exported function for factories
var createTranslateLoader = function (http) {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
                _shared_ngx_bootstrap_ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_16__["NgxBootstrapModule"],
                // RegisterModule,
                // MenuModule,
                // HomeModule,
                // ContactModule,
                //  LoginModule,
                //  ResetModule,
                //  PaginaNaoEncontradaModule,
                // ConfigModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/error-msg/error-msg.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/error-msg/error-msg.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"errorMessage !=null\" >\n\n  <span class=\"glyphicon glyphicon-remove form-control-feedback\"> </span>\n  <span class=\"sr-only\">(error)</span>\n  <div  id=\"erroDiv\" class=\"alert alert-danger\" role=\"alert\">{{ errorMessage }}</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/error-msg/error-msg.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/error-msg/error-msg.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#erroDiv {\n  background-color: transparent;\n  margin-bottom: 0px;\n  border-color: transparent; }\n"

/***/ }),

/***/ "./src/app/shared/error-msg/error-msg.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/error-msg/error-msg.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsgComponent", function() { return ErrorMsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_form_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/form-validations */ "./src/app/shared/models/form-validations.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorMsgComponent = /** @class */ (function () {
    function ErrorMsgComponent(translate) {
        this.translate = translate;
        this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
        this.browserLg = browserLang;
    }
    ErrorMsgComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ErrorMsgComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) &&
                    this.control.touched) {
                    if (this.browserLg === 'en') {
                        return _models_form_validations__WEBPACK_IMPORTED_MODULE_2__["FormValidations"].getErrorMsgEN(this.label, propertyName, this.control.errors[propertyName]);
                    }
                    if (this.browserLg === 'pt') {
                        return _models_form_validations__WEBPACK_IMPORTED_MODULE_2__["FormValidations"].getErrorMsgPT(this.label, propertyName, this.control.errors[propertyName]);
                    }
                    if (this.browserLg === 'de') {
                        return _models_form_validations__WEBPACK_IMPORTED_MODULE_2__["FormValidations"].getErrorMsgDE(this.label, propertyName, this.control.errors[propertyName]);
                    }
                    if (this.browserLg === 'es') {
                        return _models_form_validations__WEBPACK_IMPORTED_MODULE_2__["FormValidations"].getErrorMsgES(this.label, propertyName, this.control.errors[propertyName]);
                    }
                    if (this.browserLg === 'fr') {
                        return _models_form_validations__WEBPACK_IMPORTED_MODULE_2__["FormValidations"].getErrorMsgFR(this.label, propertyName, this.control.errors[propertyName]);
                    }
                    if (this.browserLg === 'it') {
                        return _models_form_validations__WEBPACK_IMPORTED_MODULE_2__["FormValidations"].getErrorMsgIT(this.label, propertyName, this.control.errors[propertyName]);
                    }
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], ErrorMsgComponent.prototype, "control", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ErrorMsgComponent.prototype, "label", void 0);
    ErrorMsgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-msg',
            template: __webpack_require__(/*! ./error-msg.component.html */ "./src/app/shared/error-msg/error-msg.component.html"),
            styles: [__webpack_require__(/*! ./error-msg.component.scss */ "./src/app/shared/error-msg/error-msg.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ErrorMsgComponent);
    return ErrorMsgComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth) {
        var _this = this;
        this.router = router;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (user) {
            _this.codigoUsuario = user.uid;
        });
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.verificarAcesso();
    };
    AuthGuard.prototype.canLoad = function (route) {
        return this.verificarAcesso();
    };
    AuthGuard.prototype.verificarAcesso = function () {
        if (this.codigoUsuario) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/modal/editar/editar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/modal/editar/editar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modal/editar/editar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/modal/editar/editar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\" style=\"border-bottom-width: 0px\">\n    <h4 class=\"modal-title\" style=\"color: gray\">BarberPro</h4>\n    <button class=\"close float-right\" (click)=\"fecharModal()\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">x</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n<p>Information from the barbershop has been update!</p>\n  </div>\n\n  <div class=\"modal-footer\" style=\"padding: 20px; border-top-color: transparent\">\n<button class=\"btn btn-primary\" (click)=\"fecharModal()\">ok</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/shared/modal/editar/editar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/modal/editar/editar.component.ts ***!
  \*********************************************************/
/*! exports provided: EditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarComponent", function() { return EditarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditarComponent = /** @class */ (function () {
    function EditarComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EditarComponent.prototype.ngOnInit = function () {
    };
    EditarComponent.prototype.fecharModal = function () {
        this.activeModal.close({ result: 'ok' });
    };
    EditarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editar',
            template: __webpack_require__(/*! ./editar.component.html */ "./src/app/shared/modal/editar/editar.component.html"),
            styles: [__webpack_require__(/*! ./editar.component.css */ "./src/app/shared/modal/editar/editar.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], EditarComponent);
    return EditarComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal/erro-modal/erro-modal.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/modal/erro-modal/erro-modal.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modal/erro-modal/erro-modal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/modal/erro-modal/erro-modal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-body\">\n    <div class=\"container\" style=\"padding-left:0px\">\n      <div class=\"modal-header\" style=\"border-bottom-width: 0px\">\n        <h4 class=\"modal-title\" style=\"color: gray\">BarberPro</h4>\n        <button class=\"close float-right\" (click)=\"fecharModal()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">x</span>\n        </button>\n      </div>\n    \n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <p>{{ 'ERROMODAL.ERROMODAL' | translate }}</p>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n  <div class=\"modal-footer\" style=\"padding: 20px; border-top-color: transparent\">\n    <button class=\"btn btn-secondary\" (click)=\"fecharModal()\" data-dismiss=\"modal\">ok</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/modal/erro-modal/erro-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modal/erro-modal/erro-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: ErroModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErroModalComponent", function() { return ErroModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErroModalComponent = /** @class */ (function () {
    function ErroModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ErroModalComponent.prototype.ngOnInit = function () {
    };
    ErroModalComponent.prototype.fecharModal = function () {
        this.activeModal.close({ result: 'ok' });
    };
    ErroModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-erro-modal',
            template: __webpack_require__(/*! ./erro-modal.component.html */ "./src/app/shared/modal/erro-modal/erro-modal.component.html"),
            styles: [__webpack_require__(/*! ./erro-modal.component.css */ "./src/app/shared/modal/erro-modal/erro-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ErroModalComponent);
    return ErroModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/modal/gravar/gravar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/modal/gravar/gravar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modal/gravar/gravar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/modal/gravar/gravar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\n  <div class=\"modal-header\" style=\"border-bottom-width: 0px\">\n    <h4 class=\"modal-title\" style=\"color: gray\">BarberPro</h4>\n    <button class=\"close float-right\" (click)=\"fecharModal()\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">x</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n<p>Information from the barbershop has been saved!</p>\n  </div>\n\n  <div class=\"modal-footer\" style=\"padding: 20px; border-top-color: transparent\">\n<button class=\"btn btn-primary\" (click)=\"fecharModal()\">ok</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/modal/gravar/gravar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/modal/gravar/gravar.component.ts ***!
  \*********************************************************/
/*! exports provided: GravarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravarComponent", function() { return GravarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GravarComponent = /** @class */ (function () {
    function GravarComponent(activeModal) {
        this.activeModal = activeModal;
    }
    GravarComponent.prototype.ngOnInit = function () {
    };
    GravarComponent.prototype.fecharModal = function () {
        this.activeModal.close({ result: 'ok' });
    };
    GravarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gravar',
            template: __webpack_require__(/*! ./gravar.component.html */ "./src/app/shared/modal/gravar/gravar.component.html"),
            styles: [__webpack_require__(/*! ./gravar.component.css */ "./src/app/shared/modal/gravar/gravar.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], GravarComponent);
    return GravarComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/form-validations.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/form-validations.ts ***!
  \***************************************************/
/*! exports provided: FormValidations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidations", function() { return FormValidations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormValidations = /** @class */ (function () {
    function FormValidations() {
    }
    FormValidations.getErrorMsgEN = function (fieldName, validatorName, validatorValue) {
        var config = {
            'required': fieldName + " is required.",
            'minlength': fieldName + " must have at least " + validatorValue.requiredLength + " digits.",
            'maxlength': fieldName + " should be at most " + validatorValue.requiredLength + " digits.",
            'email': "Invalid " + fieldName,
        };
        return config[validatorName];
    };
    FormValidations.getErrorMsgPT = function (fieldName, validatorName, validatorValue) {
        var config = {
            'required': fieldName + " \u00E9 necess\u00E1rio.",
            'minlength': fieldName + " deve ter pelo menos " + validatorValue.requiredLength + " d\u00EDgitos.",
            'maxlength': fieldName + " deve ser no m\u00E1ximo " + validatorValue.requiredLength + " d\u00EDgitos.",
            'email': "Inv\u00E1lido " + fieldName,
        };
        return config[validatorName];
    };
    FormValidations.getErrorMsgDE = function (fieldName, validatorName, validatorValue) {
        var config = {
            'required': fieldName + " wird ben\u00F6tigt.",
            'minlength': fieldName + " muss mindestens haben " + validatorValue.requiredLength + " ziffern.",
            'maxlength': fieldName + " sollte h\u00F6chstens sein " + validatorValue.requiredLength + " ziffern.",
            'email': "Ung\u00FCltig " + fieldName,
        };
        return config[validatorName];
    };
    FormValidations.getErrorMsgES = function (fieldName, validatorName, validatorValue) {
        var config = {
            'required': fieldName + " es requerido.",
            'minlength': fieldName + " debe tener al menos " + validatorValue.requiredLength + " d\u00EDgitos.",
            'maxlength': fieldName + " deber\u00EDa ser a lo sumo " + validatorValue.requiredLength + " d\u00EDgitos.",
            'email': "Inv\u00E1lido " + fieldName,
        };
        return config[validatorName];
    };
    FormValidations.getErrorMsgFR = function (fieldName, validatorName, validatorValue) {
        var config = {
            'required': fieldName + " est requis.",
            'minlength': fieldName + " doit avoir au moins " + validatorValue.requiredLength + " chiffres.",
            'maxlength': fieldName + " devrait \u00EAtre au plus " + validatorValue.requiredLength + " chiffres.",
            'email': "Invalide " + fieldName,
        };
        return config[validatorName];
    };
    FormValidations.getErrorMsgIT = function (fieldName, validatorName, validatorValue) {
        var config = {
            'required': fieldName + " \u00E8 obbligatorio.",
            'minlength': fieldName + " deve avere almeno " + validatorValue.requiredLength + " cifre.",
            'maxlength': fieldName + " dovrebbe essere al massimo " + validatorValue.requiredLength + " cifre.",
            'email': "Non valido " + fieldName,
        };
        return config[validatorName];
    };
    FormValidations = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FormValidations);
    return FormValidations;
}());



/***/ }),

/***/ "./src/app/shared/ngx-bootstrap/ngx-bootstrap.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/ngx-bootstrap/ngx-bootstrap.module.ts ***!
  \**************************************************************/
/*! exports provided: NgxBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxBootstrapModule", function() { return NgxBootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NgxBootstrapModule = /** @class */ (function () {
    function NgxBootstrapModule() {
    }
    NgxBootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalModule"].forRoot(),
            ],
            declarations: [],
            exports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModalModule"],
            ]
        })
    ], NgxBootstrapModule);
    return NgxBootstrapModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-msg/error-msg.component */ "./src/app/shared/error-msg/error-msg.component.ts");
/* harmony import */ var _ngx_bootstrap_ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngx-bootstrap/ngx-bootstrap.module */ "./src/app/shared/ngx-bootstrap/ngx-bootstrap.module.ts");
/* harmony import */ var _modal_editar_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal/editar/editar.component */ "./src/app/shared/modal/editar/editar.component.ts");
/* harmony import */ var _modal_gravar_gravar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/gravar/gravar.component */ "./src/app/shared/modal/gravar/gravar.component.ts");
/* harmony import */ var _modal_erro_modal_erro_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/erro-modal/erro-modal.component */ "./src/app/shared/modal/erro-modal/erro-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                _ngx_bootstrap_ngx_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["NgxBootstrapModule"],
            ],
            declarations: [
                _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_5__["ErrorMsgComponent"],
                _modal_editar_editar_component__WEBPACK_IMPORTED_MODULE_7__["EditarComponent"],
                _modal_gravar_gravar_component__WEBPACK_IMPORTED_MODULE_8__["GravarComponent"],
                _modal_erro_modal_erro_modal_component__WEBPACK_IMPORTED_MODULE_9__["ErroModalComponent"],
            ],
            exports: [
                _error_msg_error_msg_component__WEBPACK_IMPORTED_MODULE_5__["ErrorMsgComponent"]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    stripeKey: 'pk_test_E5N3vaoJGxK2OV9zKl2ST26H',
    API: 'http://localhost:3000/',
    //  AIzaSyACaAqb5pMAj8oqa9tfWSzPVe66oj-8nQk
    firebase: {
        apiKey: 'AIzaSyC0WzoeylMBXxO4UEjXzHN2ncFydq8rSH0',
        authDomain: 'projetobarbershop-1620.firebaseapp.com',
        databaseURL: 'https://projetobarbershop-1620.firebaseio.com',
        projectId: 'projetobarbershop-1620',
        storageBucket: 'projetobarbershop-1620.appspot.com',
        messagingSenderId: '1004432841462'
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\walmircastro\Downloads\BarberShop\WebBarberShop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map