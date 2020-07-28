(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module~layout-layout-module~login-login-module~menu-menu-module"],{

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



/***/ }),

/***/ "./src/app/shared/service/user/user.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/service/user/user.service.ts ***!
  \*****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(httpclient, http, router, db) {
        this.httpclient = httpclient;
        this.http = http;
        this.router = router;
        this.db = db;
        this.API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API + "userconfig";
        this.PATH = 'userconfig/';
        this.Keybing = 'Am06s4u9v3iDlgSdztJsrlkC-fFQg8LlFcSfqNc5hFxodfxnxqApuwEqKVH5vp-i';
    }
    UserService.prototype.postUsuario = function (formulario) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.db.object(_this.PATH + formulario.get('fk').value)
                .set({
                fk: formulario.get('fk').value,
                id: formulario.get('id').value,
                lat: formulario.get('lat').value,
                long: formulario.get('long').value,
                txt_NomeSalao: formulario.get('txt_NomeSalao').value,
                txt_NomeResp: formulario.get('txt_NomeResp').value,
                txt_pais: formulario.get('txt_pais').value,
                txt_End: formulario.get('txt_End').value,
                txt_CEP: formulario.get('txt_CEP').value,
                txt_Cidade: formulario.get('txt_Cidade').value,
                txt_UF: formulario.get('txt_UF').value,
                txt_Numero: formulario.get('txt_Numero').value,
                txt_Cel: formulario.get('txt_Cel').value,
                txt_Tel: formulario.get('txt_Tel').value,
                txt_email: formulario.get('txt_email').value,
                url: formulario.get('url').value,
                urlLogo: formulario.get('urlLogo').value
            })
                .then(function () { return resolve(); });
        });
        /*
        const body = JSON.stringify(formulario.value);
        const headerOptions = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(this.API, body, requestOptions).pipe(map(x => x.json())); */
    };
    UserService.prototype.putUsuario = function (formulario) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.object(_this.PATH + formulario.get('fk').value)
                .update({
                lat: formulario.get('lat').value,
                long: formulario.get('long').value,
                txt_NomeSalao: formulario.get('txt_NomeSalao').value,
                txt_NomeResp: formulario.get('txt_NomeResp').value,
                txt_pais: formulario.get('txt_pais').value,
                txt_End: formulario.get('txt_End').value,
                txt_CEP: formulario.get('txt_CEP').value,
                txt_Cidade: formulario.get('txt_Cidade').value,
                txt_UF: formulario.get('txt_UF').value,
                txt_Numero: formulario.get('txt_Numero').value,
                txt_Cel: formulario.get('txt_Cel').value,
                txt_Tel: formulario.get('txt_Tel').value,
                txt_email: formulario.get('txt_email').value,
                url: formulario.get('url').value,
                urlLogo: formulario.get('urlLogo').value
            })
                .then(function () { return resolve(); })
                .catch(function (e) { return reject(e); });
        });
        /*
        const body = JSON.stringify(formulario.value);
        const headerOptions = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
        return this.http.put(this.API + '/' + id, body, requestOptions).pipe(map(x => x.json())); */
    };
    UserService.prototype.buscarPorCodigo = function (key) {
        // this.db.object<CalendarEvent[]>(this.PATH + codigo).valueChanges().subscribe(console.log);
        return this.db.object(this.PATH + key).valueChanges();
    };
    /*
      buscarPorCodigo(codigo: number): Promise<User> {
        return this.http.get(`${this.API}/${codigo}`)
          .toPromise()
          .then(response => {
            const usuario = response.json() as User;
            return usuario;
          });
      }
    */
    UserService.prototype.putImage = function (url1, formulario) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.object(_this.PATH + formulario.get('fk').value)
                .update({
                lat: formulario.get('lat').value,
                long: formulario.get('long').value,
                txt_NomeSalao: formulario.get('txt_NomeSalao').value,
                txt_NomeResp: formulario.get('txt_NomeResp').value,
                txt_pais: formulario.get('txt_pais').value,
                txt_End: formulario.get('txt_End').value,
                txt_CEP: formulario.get('txt_CEP').value,
                txt_Cidade: formulario.get('txt_Cidade').value,
                txt_UF: formulario.get('txt_UF').value,
                txt_Numero: formulario.get('txt_Numero').value,
                txt_Cel: formulario.get('txt_Cel').value,
                txt_Tel: formulario.get('txt_Tel').value,
                txt_email: formulario.get('txt_email').value,
                url: url1,
                urlLogo: formulario.get('urlLogo').value
            })
                .then(function () { return resolve(); })
                .catch(function (e) { return reject(e); });
        });
    };
    UserService.prototype.putImageLogo = function (url1, formulario) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.db.object(_this.PATH + formulario.get('fk').value)
                .update({
                lat: formulario.get('lat').value,
                long: formulario.get('long').value,
                txt_NomeSalao: formulario.get('txt_NomeSalao').value,
                txt_NomeResp: formulario.get('txt_NomeResp').value,
                txt_pais: formulario.get('txt_pais').value,
                txt_End: formulario.get('txt_End').value,
                txt_CEP: formulario.get('txt_CEP').value,
                txt_Cidade: formulario.get('txt_Cidade').value,
                txt_UF: formulario.get('txt_UF').value,
                txt_Numero: formulario.get('txt_Numero').value,
                txt_Cel: formulario.get('txt_Cel').value,
                txt_Tel: formulario.get('txt_Tel').value,
                txt_email: formulario.get('txt_email').value,
                url: formulario.get('url').value,
                urlLogo: url1
            })
                .then(function () { return resolve(); })
                .catch(function (e) { return reject(e); });
        });
    };
    UserService.prototype.getListaLocalizacao = function (formulario) {
        return this.http.get('https://dev.virtualearth.net/REST/v1/Locations/' +
            ((formulario.get('txt_pais').value).trim() + "/") +
            ((formulario.get('txt_UF').value).trim() + "/") +
            ((formulario.get('txt_CEP').value).trim() + "/") +
            ((formulario.get('txt_Cidade').value).trim() + "/") +
            ((formulario.get('txt_NomeResp').value).trim() + "/") +
            ((formulario.get('txt_End').value).trim() + "/") +
            ((formulario.get('txt_Numero').value).trim() + "/") +
            '1%20Microsoft%20Way?o=json&key=' +
            this.Keybing)
            .toPromise()
            .then(function (response) {
            var dados = response.json();
            return dados;
        });
    };
    UserService.prototype.getPaises = function () {
        return this.http.get('assets/dados/paises.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.delUser = function (user) {
        return this.db.object(this.PATH + user).remove();
    };
    UserService.prototype.atualizarOneSignal = function (user, oneSignal) {
        return this.db.object("/precos/" + user + "/array/0").update({ userIdOneSignalSalao: oneSignal });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=config-config-module~layout-layout-module~login-login-module~menu-menu-module.js.map