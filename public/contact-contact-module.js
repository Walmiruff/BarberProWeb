(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./src/app/contact/contact-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]
    }
];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light\" style=\"position: absolute\" id=\"ftco-navbar\">\n\n    <img class=\"mr-2\" src=\"assets\\image\\LogoBS.png\">\n    <a class=\"navbar-brand\" routerLink=\"\" href=\"#\">BarberPro</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\"><a routerLink=\"\" class=\"nav-link\" href=\"#\">{{ 'NAV.HOME' | translate }}</a></li>\n        <li class=\"nav-item active\"> <a routerLink=\"/app\" class=\"nav-link\" href=\"#\">{{ 'NAV.SERVICESSCHED' | translate }}</a></li>\n        <li class=\"nav-item\"><a routerLink=\"/login\" class=\"nav-link\" href=\"#\">{{ 'NAV.LOGIN' | translate }}</a></li>\n      </ul>\n    </div>\n\n</nav>\n\n\n<div class=\"hero-wrap js-fullheight\" style=\"background-image: url('assets/image/b2.jpg')\"\n  data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n\n\n    <div class=\"row no-gutters slider-text js-fullheight align-items-center justify-content-start\"\n      data-scrollax-parent=\"true\">\n\n      <div class=\"col-md-6 \" data-scrollax=\" properties: { translateY: '70%' }\">\n\n        <h1 class=\"mb-5\" data-scrollax=\"properties: { translateY: '30%', opacity: 1.6 }\">{{ 'CONTACT.TITLE' | translate }}</h1>\n\n        <div class=\"row\">\n          <p class=\"mr-2\" data-scrollax=\"properties: { translateY: '30%', opacity: 1.6 }\"><a\n              class=\"btn btn-primary px-4 py-3\">{{ 'CONTACT.BUTTON1' | translate }}</a></p>\n          <p data-scrollax=\"properties: { translateY: '30%', opacity: 1.6 }\"><a routerLink=\"/login\" href=\"#\"\n              class=\"btn btn-secondary px-4 py-3\">{{ 'CONTACT.BUTTON2' | translate }}</a></p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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


var ContactComponent = /** @class */ (function () {
    function ContactComponent(translate) {
        this.translate = translate;
        this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/contact/contact-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _contact_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactRoutingModule"]
            ],
            declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map