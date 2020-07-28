(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagina-nao-encontrada-pagina-nao-encontrada-module"],{

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light\" style=\"position: absolute\" id=\"ftco-navbar\">\n\n    <img class=\"mr-2\" src=\"assets\\image\\LogoBS.png\" >\n    <a class=\"navbar-brand\"  routerLink=\"\"  href=\"#\">BarberPro</a>\n     <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" ><a routerLink=\"\" class=\"nav-link\" href=\"#\">{{ 'NAV.HOME' | translate }}</a></li>\n        <li class=\"nav-item\" > <a routerLink=\"/app\" class=\"nav-link\" href=\"#\">{{ 'NAV.SERVICESSCHED' | translate }}</a></li>\n        <li class=\"nav-item\"><a routerLink=\"/login\" class=\"nav-link\" href=\"#\">{{ 'NAV.LOGIN' | translate }}</a></li>\n       </ul>\n    </div>\n\n</nav>\n\n\n\n\n\n<div class=\"hero-wrap\" style=\"background-image: url('assets/image/b3.jpg')\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\" style=\"opacity: 0\"></div>\n  <div class=\"container\">\n    <div class=\"row no-gutters slider-text\" data-scrollax-parent=\"true\">\n      \n\n      </div>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaginaNaoEncontradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaNaoEncontradaComponent", function() { return PaginaNaoEncontradaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginaNaoEncontradaComponent = /** @class */ (function () {
    function PaginaNaoEncontradaComponent(translate) {
        this.translate = translate;
        this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
    }
    PaginaNaoEncontradaComponent.prototype.ngOnInit = function () {
    };
    PaginaNaoEncontradaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagina-nao-encontrada',
            template: __webpack_require__(/*! ./pagina-nao-encontrada.component.html */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.html"),
            styles: [__webpack_require__(/*! ./pagina-nao-encontrada.component.css */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], PaginaNaoEncontradaComponent);
    return PaginaNaoEncontradaComponent;
}());



/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-nao-encontrada.module.ts ***!
  \***********************************************************************/
/*! exports provided: PaginaNaoEncontradaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaNaoEncontradaModule", function() { return PaginaNaoEncontradaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pagina_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagina-routing.module */ "./src/app/pagina-nao-encontrada/pagina-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PaginaNaoEncontradaModule = /** @class */ (function () {
    function PaginaNaoEncontradaModule() {
    }
    PaginaNaoEncontradaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _pagina_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaginaNaoEncontradaRoutingModule"]
            ],
            declarations: [_pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_2__["PaginaNaoEncontradaComponent"]]
        })
    ], PaginaNaoEncontradaModule);
    return PaginaNaoEncontradaModule;
}());



/***/ }),

/***/ "./src/app/pagina-nao-encontrada/pagina-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pagina-nao-encontrada/pagina-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PaginaNaoEncontradaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaNaoEncontradaRoutingModule", function() { return PaginaNaoEncontradaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagina-nao-encontrada.component */ "./src/app/pagina-nao-encontrada/pagina-nao-encontrada.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _pagina_nao_encontrada_component__WEBPACK_IMPORTED_MODULE_2__["PaginaNaoEncontradaComponent"]
    }
];
var PaginaNaoEncontradaRoutingModule = /** @class */ (function () {
    function PaginaNaoEncontradaRoutingModule() {
    }
    PaginaNaoEncontradaRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PaginaNaoEncontradaRoutingModule);
    return PaginaNaoEncontradaRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pagina-nao-encontrada-pagina-nao-encontrada-module.js.map