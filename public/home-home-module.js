(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light\" style=\"position: absolute\"\n  id=\"ftco-navbar\">\n \n    <img class=\"mr-2\" src=\"assets\\image\\LogoBS.png\">\n    <a class=\"navbar-brand\" routerLink=\"\" href=\"#\">BarberPro</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\"><a routerLink=\"\" class=\"nav-link\" href=\"#\">{{ 'NAV.HOME' | translate }}</a></li>\n        <li class=\"nav-item\"> <a routerLink=\"/app\" class=\"nav-link\" href=\"#\">{{ 'NAV.SERVICESSCHED' | translate }}</a></li>\n        <li class=\"nav-item\"><a routerLink=\"/login\" class=\"nav-link\" href=\"#\">{{ 'NAV.LOGIN' | translate }}</a></li>\n      </ul>\n    </div>\n\n\n</nav>\n\n\n\n<div class=\"hero-wrap\" style=\"background-image: url('assets/image/barber.gif');\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\n\n      <div class=\"col-md-6 text-center \" data-scrollax=\" properties: { translateY: '70%' }\">\n\n        <h1 class=\"mb-3 mt-5 bread\" data-scrollax=\"properties: { translateY: '30%', opacity: 1.6 }\">{{ 'HOME.TITLE1' | translate }}\n          <wbr>{{ 'HOME.TITLE1CONT' | translate }}<wbr></h1>\n          <p class=\"breadcrumbs\" data-scrollax=\"properties: { translateY: '30%', opacity: 1.6 }\"><span class=\"mr-2\"><a\n                routerLink=\"/login\" href=\"#\">{{ 'NAV.LOGIN' | translate }}</a></span> <span> <a routerLink=\"/app\">{{ 'NAV.SERVICESSCHED' | translate }}</a></span></p>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n\n\n\n\n<section class=\"ftco-section ftco-intro\" style=\"margin: 0\">\n  <div class=\"container\">\n\n\n    <div class=\"row justify-content-center  mb-3 pb-3\" data-scrollax-parent=\"true\">\n      <div class=\"col-md-7 heading-section text-center fadeInUp ftco-animated \" style=\"margin-top: 2rem\"\n        data-scrollax=\" properties: { translateY: '70%' }\">\n        <h3 class=\"mb-4\">{{ 'HOME.TITLE2' | translate }}</h3>\n        <p class=\"flip\">\n          <span class=\"deg1\"></span>\n          <span class=\"deg2\"></span>\n          <span class=\"deg3\"></span>\n        </p>\n      </div>\n    </div>\n\n\n    <div class=\"row justify-content-center\">\n\n\n\n\n      <div id=\"carouselSiteCN\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n\n        <!--ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselSiteCN\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselSiteCN\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselSiteCN\" data-slide-to=\"2\"></li>\n        </ol-->\n\n        <div class=\"carousel-inner\">\n\n\n\n          <div class=\"carousel-item active\">\n\n            <div class=\"row\">\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 justify-content-center\"\n                style=\"max-width: 429px; max-height:  100vh\">\n                <div></div>\n                <div>\n                  <img class=\" mx-auto d-block\" src=\"{{ 'HOME.FOTO1' | translate }}\" style=\"max-height: 78vh\" alt=\"\">\n                </div>\n                <div></div>\n              </div>\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 pl-5 mt-5\" style=\"padding-right: 48px\">\n\n                <div class=\"row text-center\" style=\"max-width: 479px\">\n\n                  <blockquote class=\"blockquote text-center\">\n                    <p class=\"mb-0\" style=\"height: 138px\">{{ 'HOME.TITLE3' | translate }}</p>\n                  </blockquote>\n\n                </div>\n\n                <br>\n                <div class=\"row\" style=\"margin-left: 0\">\n                  <button class=\"btn btn-outline-primary mr-3\">\n                    <div class=\"row\">\n                      <div class=\"col-3\" style=\"padding-left: 10px; padding-right: 10px\">\n                        <i class=\"fab fa-apple fa-3x\"></i>\n                      </div>\n                      <div class=\"col-8\" style=\"padding-left: 5px; padding-right: 5px\">\n                        <span>{{ 'HOME.TITLE4' | translate }}</span>\n                        <p style=\"margin: 0px\">{{ 'HOME.TITLE5' | translate }}</p>\n                      </div>\n                    </div>\n                  </button>\n\n                  <button class=\"btn btn-primary\">\n                    <div class=\"row\">\n                      <div class=\"col-3\" style=\"padding-left: 10px; padding-right: 10px\">\n                        <i class=\"fab fa-android fa-3x\"></i>\n                      </div>\n                      <div class=\"col-8\" style=\"padding-left: 5px; padding-right: 5px\">\n                        <span>{{ 'HOME.TITLE6' | translate }}</span>\n                        <p style=\"margin: 0px\">{{ 'HOME.TITLE7' | translate }}</p>\n                      </div>\n                    </div>\n                  </button>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n          <div class=\"carousel-item\">\n\n            <div class=\"row\">\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 justify-content-center\"\n                style=\"max-width: 429px; max-height:  100vh\">\n                <img class=\" mx-auto d-block\" src=\"{{ 'HOME.FOTO2' | translate }}\" style=\"max-height: 78vh;  \" alt=\"\">\n              </div>\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 pl-5 mt-5\" style=\"padding-right: 48px\">\n\n                <div class=\"row text-center\" style=\"max-width: 479px\">\n\n                  <blockquote class=\"blockquote text-center\">\n                    <p class=\"mb-0\" style=\"height: 138px\">{{ 'HOME.TITLE8' | translate }}\n                    </p>\n                  </blockquote>\n\n                </div>\n\n                <br>\n                <div class=\"row\" style=\"margin-left: 0\">\n                  <button class=\"btn btn-outline-primary mr-3\">\n                    <div class=\"row\">\n                      <div class=\"col-3\" style=\"padding-left: 10px; padding-right: 10px\">\n                        <i class=\"fab fa-apple fa-3x\"></i>\n                      </div>\n                      <div class=\"col-8\" style=\"padding-left: 5px; padding-right: 5px\">\n                        <span>{{ 'HOME.TITLE4' | translate }}</span>\n                        <p style=\"margin: 0px\">{{ 'HOME.TITLE5' | translate }}</p>\n                      </div>\n                    </div>\n                  </button>\n\n                  <button class=\"btn btn-primary\">\n                    <div class=\"row\">\n                      <div class=\"col-3\" style=\"padding-left: 10px; padding-right: 10px\">\n                        <i class=\"fab fa-android fa-3x\"></i>\n                      </div>\n                      <div class=\"col-8\" style=\"padding-left: 5px; padding-right: 5px\">\n                        <span>{{ 'HOME.TITLE6' | translate }}</span>\n                        <p style=\"margin: 0px\">{{ 'HOME.TITLE7' | translate }}</p>\n                      </div>\n                    </div>\n                  </button>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n\n\n\n          <div class=\"carousel-item\">\n\n            <div class=\"row\">\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 justify-content-center\"\n                style=\"max-width: 429px; max-height:  100vh\">\n                <img class=\" mx-auto d-block\" src=\"{{ 'HOME.FOTO3' | translate }}\" style=\"max-height: 78vh ;  \" alt=\"\">\n              </div>\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 pl-5 mt-5\" style=\"padding-right: 48px\">\n\n                <div class=\"row text-center\">\n\n                  <blockquote class=\"blockquote text-center\" style=\"max-width: 479px\">\n                    <p class=\"mb-0\" style=\"height: 138px\">{{ 'HOME.TITLE9' | translate }}</p>\n                  </blockquote>\n\n                </div>\n\n                <br>\n                <div class=\"row\" style=\"margin-left: 0\">\n                  <button class=\"btn btn-outline-primary mr-3\">\n                    <div class=\"row\">\n                      <div class=\"col-3\" style=\"padding-left: 10px; padding-right: 10px\">\n                        <i class=\"fab fa-apple fa-3x\"></i>\n                      </div>\n                      <div class=\"col-8\" style=\"padding-left: 5px; padding-right: 5px\">\n                        <span>{{ 'HOME.TITLE4' | translate }}</span>\n                        <p style=\"margin: 0px\">{{ 'HOME.TITLE5' | translate }}</p>\n                      </div>\n                    </div>\n                  </button>\n\n                  <button class=\"btn btn-primary\">\n                    <div class=\"row\">\n                      <div class=\"col-3\" style=\"padding-left: 10px; padding-right: 10px\">\n                        <i class=\"fab fa-android fa-3x\"></i>\n                      </div>\n                      <div class=\"col-8\" style=\"padding-left: 5px; padding-right: 5px\">\n                        <span>{{ 'HOME.TITLE6' | translate }}</span>\n                        <p style=\"margin: 0px\">{{ 'HOME.TITLE7' | translate }}</p>\n                      </div>\n                    </div>\n                  </button>\n\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>\n\n\n\n\n\n        </div>\n\n        <a class=\"carousel-control-prev\" href=\"#carouselSiteCN\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" style=\"width: 15px\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n\n\n        <a class=\"carousel-control-next\" href=\"#carouselSiteCN\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" style=\"width: 15px\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n\n      </div>\n\n\n\n\n\n    </div>\n  </div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n<section class=\"ftco-section ftco-bg-dark\" style=\"margin: 0; padding-bottom: 0\">\n  <div class=\"container\">\n\n\n    <div class=\"row justify-content-center  mb-3 pb-3\" data-scrollax-parent=\"true\">\n      <div class=\"col-md-7 heading-section text-center fadeInUp ftco-animated \" style=\"margin-top: 2rem\"\n        data-scrollax=\" properties: { translateY: '70%' }\">\n        <h3 class=\"mb-4\">{{ 'HOME.TITLE10' | translate }}</h3>\n        <p class=\"flip\">\n          <span class=\"deg1\"></span>\n          <span class=\"deg2\"></span>\n          <span class=\"deg3\"></span>\n        </p>\n      </div>\n    </div>\n\n\n    <div class=\"row justify-content-center\">\n\n\n\n      <div id=\"carouselSiteCN2\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselSiteCN2\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselSiteCN2\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselSiteCN2\" data-slide-to=\"2\"></li>\n        </ol>\n\n        <div class=\"carousel-inner\">\n\n          <div class=\"carousel-item active\">\n\n            <div class=\"row\">\n\n\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 pl-5 mt-5\" style=\"max-width: 479px\">\n\n\n\n                <blockquote class=\"blockquote text-center\">\n                  <p class=\"mb-0 mr-4\" style=\"height: 150px\">{{ 'HOME.TITLE11' | translate }}</p>\n                </blockquote>\n\n\n\n              </div>\n\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 mt-2 justify-content-center\" style=\"max-height:  100vh\">\n                <img style=\"float: right\" class=\" mx-auto d-block\" src=\"{{ 'HOME.FOTO4' | translate }}\"\n                  style=\"max-height: 78vh;  \" alt=\"\">\n              </div>\n\n            </div>\n\n          </div>\n\n          <div class=\"carousel-item\">\n            <div class=\"row\">\n\n\n              <div class=\"col-md-6 col-sm-12 col-12 pl-5 mt-5\" style=\"max-width: 479px\">\n\n\n\n\n                <blockquote class=\"blockquote text-center\">\n                  <p class=\"mb-0 mr-4\" style=\"height: 150px\">{{ 'HOME.TITLE12' | translate }}</p>\n\n                </blockquote>\n\n\n\n\n              </div>\n\n              <div class=\"col-md-6 col-sm-12 col-12 mt-2 justify-content-center\" style=\"max-height:  100vh\">\n                <img style=\"float: right\" class=\" mx-auto d-block\" src=\"{{ 'HOME.FOTO5' | translate }}\"\n                  style=\"max-height: 78vh;  \" alt=\"\">\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"carousel-item\">\n\n            <div class=\"row\">\n\n\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 pl-5 mt-5\" style=\"max-width: 479px\">\n\n\n                <blockquote class=\"blockquote text-center\">\n                  <p class=\"mb-0 mr-4\" style=\"height: 150px\">{{ 'HOME.TITLE13' | translate }}<a href=\"#\" routerLink=\"/login\">{{ 'HOME.TITLE14' | translate }}</a>{{ 'HOME.TITLE15' | translate }}</p>\n                </blockquote>\n\n\n              </div>\n\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 col-12 mt-2 justify-content-center\" style=\"max-height:  100vh\">\n                <img style=\"float: right\" class=\" mx-auto d-block\" src=\"{{ 'HOME.FOTO4' | translate }}\"\n                  style=\"max-height: 78vh;  \" alt=\"\">\n              </div>\n\n            </div>\n\n          </div>\n\n\n        </div>\n\n        <a class=\"carousel-control-prev\" href=\"#carouselSiteCN2\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" style=\"width: 0px\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n\n\n        <a class=\"carousel-control-next\" href=\"#carouselSiteCN2\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" style=\"width: 0px\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n</section>\n\n<section style=\"background: #000\">\n  <div class=\"container\" style=\"padding-top: 30px; padding-bottom: 5px\">\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <p style=\"cursor: pointer\" data-toggle=\"modal\" data-target=\"#contatoModal\"><i class=\"fas fa-envelope\"></i>\n          {{ 'HOME.TITLE16' | translate }}</p>\n      </div>\n\n      <div class=\"col-4\">\n        <p style=\"float: right\" (click)=\"openUrlLinkedin()\"><i class=\"fab fa-linkedin\"></i></p>\n        <p class=\"mx-3\" style=\"float: right\"><i class=\"fab fa-instagram\"></i></p>\n        <p style=\"float: right\"><i class=\"fab fa-facebook-square\"></i></p>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n\n\n<div class=\"modal\" id=\"contatoModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\" style=\"border-bottom-width: 0px\">\n        <h5 class=\"modal-title\" style=\"color: gray\">{{ 'HOME.TITLE17' | translate }}</h5>\n        <button class=\"close float-right\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">x</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n\n\n\n\n\n        \n        <div class=\"container\">\n\n          <div class=\"row\">\n\n\n            <div class=\"col-md-12 col-xl-6 mb-1\">\n              <p>\n                <span><i class=\"fas fa-phone\"></i></span>\n                <a href=\"tel:+5524998132757\"> +55 24 9 9813 2757\n                </a>\n              </p>\n            </div>\n\n\n            <div class=\"col-md-12 col-xl-6 mb-1\">\n              <p>\n                <span><i class=\"fas fa-headset\"></i></span>\n                <a href=\"mailto:walmiruff@gmail.com\"> suport@barberpro.com\n                </a>\n              </p>\n            </div>\n\n            <div class=\"col-md-12 mb-1\">\n              <p>\n                <span><i class=\"fas fa-map-marked-alt\"></i></span> Av do Contorno 1620 PTE ALTA, 27200-000 Volta\n                Redonda-RJ, Brazil\n              </p>\n            </div>\n          </div>\n\n        </div>\n\n\n\n\n        <div class=\"container mt-3\">\n          <img style=\"float: right\" class=\"mr-2   img-fluid\" src=\"assets\\image\\mapa.png\" alt=\"\">\n          \n        </div>\n\n\n\n\n      </div>\n\n\n      <div class=\"modal-footer\" style=\"padding: 20px; border-top-color: transparent\">\n\n        <div>\n          <button class=\"btn btn-outline-primary mr-2\" data-dismiss=\"modal\">{{ 'HOME.TITLE18' | translate }}</button>\n          <button class=\"btn btn-primary\"  data-dismiss=\"modal\">{{ 'HOME.TITLE19' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, formBuilder, translate) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.translate.addLangs(['de', 'en', 'es', 'fr', 'it', 'pt']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/de|en|es|fr|it|pt/) ? browserLang : 'en');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.openUrlLinkedin = function () {
        window.open('https://www.linkedin.com/in/walmir-castro-83011869', '_system', 'location=yes');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"]
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map