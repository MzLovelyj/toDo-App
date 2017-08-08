webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.header {\n  padding: 10px 0;\n  height: 60px;\n  overflow: hidden;\n  line-height: 40px; }\n\n.header__title {\n  float: left;\n  font-size: 0.875rem;\n  font-weight: 400;\n  text-rendering: auto;\n  transform: translate(0, 0); }\n  .header__title:before {\n    content: \"\\F10C\"; }\n  .header__title:before {\n    padding-right: 5px;\n    color: #007341;\n    font-family: 'FontAwesome';\n    line-height: 20px; }\n\n.header__links {\n  float: right;\n  padding: 8px 0;\n  line-height: 24px; }\n  .header__links:after {\n    clear: both;\n    content: '';\n    display: table; }\n  .header__links li {\n    float: left;\n    list-style: none; }\n    .header__links li:last-child {\n      margin-left: 12px;\n      padding-left: 12px;\n      border-left: 1px solid black; }\n    .header__links li:first-of-type {\n      border: none; }\n\n.header__link {\n  display: block;\n  color: inherit;\n  font-size: 0.875rem;\n  text-decoration: none;\n  text-rendering: auto;\n  transform: translate(0, 0); }\n\n.header__link--github {\n  font-size: 1.5rem; }\n  .header__link--github:before {\n    content: \"\\F09B\"; }\n  .header__link--github:before {\n    font-family: FontAwesome;\n    line-height: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
        this.signOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */](false);
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AppHeaderComponent.prototype, "authenticated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
        __metadata("design:type", Object)
    ], AppHeaderComponent.prototype, "signOut", void 0);
    AppHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush,
            selector: 'app-header',
            styles: [__webpack_require__("../../../../../src/app/app-header.component.scss")],
            template: "\n    <header class=\"header\">\n      <div class=\"g-row\">\n        <div class=\"g-col\">\n          <h1 class=\"header__title\">Todo App </h1>\n\n          <ul class=\"header__links\">\n            <li *ngIf=\"authenticated\"><a class=\"header__link\" (click)=\"signOut.emit()\" href=\"#\">Sign out</a></li>\n          </ul>\n        </div>\n      </div>\n    </header>\n  "
        })
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());

//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  padding-bottom: 90px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-root',
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
            template: "\n    <app-header\n      [authenticated]=\"auth.authenticated$ | async\"\n      (signOut)=\"auth.signOut()\"></app-header>\n\n    <main class=\"main\">\n      <router-outlet></router-outlet>\n    </main>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth__["b" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_header_component__ = __webpack_require__("../../../../../src/app/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebase__ = __webpack_require__("../../../../../src/app/firebase/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tasks__ = __webpack_require__("../../../../../src/app/tasks/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// components


// modules



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__app_header_component__["a" /* AppHeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([], { useHash: false }),
                __WEBPACK_IMPORTED_MODULE_5__auth__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_6__firebase__["a" /* FirebaseModule */],
                __WEBPACK_IMPORTED_MODULE_7__tasks__["a" /* TasksModule */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_sign_in__ = __webpack_require__("../../../../../src/app/auth/components/sign-in/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_routes__ = __webpack_require__("../../../../../src/app/auth/auth.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards__ = __webpack_require__("../../../../../src/app/auth/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components

// modules

// services


var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_sign_in__["a" /* SignInComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__auth_routes__["a" /* AuthRoutesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_4__guards__["a" /* RequireAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_4__guards__["b" /* RequireUnauthGuard */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sign_in__ = __webpack_require__("../../../../../src/app/auth/components/sign-in/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards__ = __webpack_require__("../../../../../src/app/auth/guards/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutesModule; });

// components

// guards

var AuthRoutesModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_sign_in__["a" /* SignInComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards__["b" /* RequireUnauthGuard */]]
    }
]);
//# sourceMappingURL=auth.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firebase__ = __webpack_require__("../../../../../src/app/firebase/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.authenticated$ = afAuth.authState.map(function (user) { return !!user; });
        this.uid$ = afAuth.authState.map(function (user) { return user.uid; });
    }
    AuthService.prototype.signIn = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .catch(function (error) { return console.log('ERROR @ AuthService#signIn() :', error); });
    };
    AuthService.prototype.signInAnonymously = function () {
        return this.afAuth.auth.signInAnonymously()
            .catch(function (error) { return console.log('ERROR @ AuthService#signInAnonymously() :', error); });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_3__firebase__["b" /* firebase */].auth.GithubAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_3__firebase__["b" /* firebase */].auth.GoogleAuthProvider());
    };
    AuthService.prototype.signInWithTwitter = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_3__firebase__["b" /* firebase */].auth.TwitterAuthProvider());
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_3__firebase__["b" /* firebase */].auth.FacebookAuthProvider());
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/sign-in/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign_in_component__ = __webpack_require__("../../../../../src/app/auth/components/sign-in/sign-in.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sign_in_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/auth/components/sign-in/sign-in.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-in {\n  margin-top: 90px;\n  max-width: 300px; }\n\n.sign-in__heading {\n  margin-bottom: 36px;\n  font-size: 30px;\n  font-weight: 300;\n  text-align: center; }\n\n.sign-in__button {\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  margin-bottom: 10px;\n  outline: none;\n  border: 1px solid #fff;\n  padding: 0;\n  width: 100%;\n  height: 48px;\n  font-family: inherit;\n  font-size: 1.125rem;\n  line-height: 48px;\n  color: #fff;\n  background: transparent; }\n  .sign-in__button[disabled] {\n    cursor: default; }\n  .sign-in__button:hover {\n    border: 2px solid #fff;\n    line-height: 46px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/components/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = (function () {
    function SignInComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    SignInComponent.prototype.signInAnonymously = function () {
        var _this = this;
        this.auth.signInAnonymously()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.signInWithFacebook()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.signInWithGithub()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.auth.signInWithTwitter()
            .then(function () { return _this.postSignIn(); });
    };
    SignInComponent.prototype.postSignIn = function () {
        this.router.navigate(['/tasks']);
    };
    SignInComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-sign-in',
            styles: [__webpack_require__("../../../../../src/app/auth/components/sign-in/sign-in.component.scss")],
            template: "\n    <div class=\"g-row sign-in\">\n      <div class=\"g-col\">\n        <h1 class=\"sign-in__heading\">Sign in</h1>\n        <button class=\"sign-in__button\" (click)=\"signInAnonymously()\" type=\"button\">Anonymously</button>\n        <button class=\"sign-in__button\" (click)=\"signInWithGoogle()\" type=\"button\">Google</button>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], SignInComponent);
    return SignInComponent;
    var _a, _b;
}());

//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__require_auth_guard__ = __webpack_require__("../../../../../src/app/auth/guards/require-auth.guard.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__require_auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__require_unauth_guard__ = __webpack_require__("../../../../../src/app/auth/guards/require-unauth.guard.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__require_unauth_guard__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/auth/guards/require-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequireAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequireAuthGuard = (function () {
    function RequireAuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RequireAuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.auth.authenticated$
            .take(1)
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/']);
            }
        });
    };
    RequireAuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], RequireAuthGuard);
    return RequireAuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=require-auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/guards/require-unauth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequireUnauthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RequireUnauthGuard = (function () {
    function RequireUnauthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RequireUnauthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.auth.authenticated$
            .take(1)
            .do(function (authenticated) {
            if (authenticated) {
                _this.router.navigate(['/tasks']);
            }
        })
            .map(function (authenticated) { return !authenticated; });
    };
    RequireUnauthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], RequireUnauthGuard);
    return RequireUnauthGuard;
    var _a, _b;
}());

//# sourceMappingURL=require-unauth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards__ = __webpack_require__("../../../../../src/app/auth/guards/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__guards__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_service__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/firebase/firebase.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FirebaseModule = (function () {
    function FirebaseModule() {
    }
    FirebaseModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].firebase)
            ]
        })
    ], FirebaseModule);
    return FirebaseModule;
}());

//# sourceMappingURL=firebase.module.js.map

/***/ }),

/***/ "../../../../../src/app/firebase/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase_app__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0_firebase_app__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase_module__ = __webpack_require__("../../../../../src/app/firebase/firebase.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__firebase_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-form/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_form_component__ = __webpack_require__("../../../../../src/app/tasks/components/task-form/task-form.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__task_form_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-form/task-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-form {\n  margin: 40px 0 10px; }\n  @media screen and (min-width: 33.75em) {\n    .task-form {\n      margin: 80px 0 20px; } }\n\n.task-form__input {\n  outline: none;\n  border: 0;\n  border-bottom: 1px dotted #fff;\n  border-radius: 0;\n  padding: 0 0 5px 0;\n  width: 100%;\n  height: 50px;\n  font-family: inherit;\n  font-size: 1.5rem;\n  font-weight: 300;\n  color: #fff;\n  background: transparent;\n  -webkit-font-smoothing: antialiased; }\n  @media screen and (min-width: 33.75em) {\n    .task-form__input {\n      height: 61px;\n      font-size: 2rem; } }\n  .task-form__input::-webkit-input-placeholder {\n    color: #fff;\n    opacity: 1; }\n  .task-form__input:-ms-input-placeholder {\n    color: #fff;\n    opacity: 1; }\n  .task-form__input::placeholder {\n    color: #fff;\n    opacity: 1; }\n  .task-form__input:focus::-webkit-input-placeholder {\n    color: #fff;\n    opacity: 1; }\n  .task-form__input:focus:-ms-input-placeholder {\n    color: #fff;\n    opacity: 1; }\n  .task-form__input:focus::placeholder {\n    color: #fff;\n    opacity: 1; }\n  .task-form__input::-ms-clear {\n    display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-form/task-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskFormComponent = (function () {
    function TaskFormComponent() {
        this.createTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */](false);
        this.title = '';
    }
    TaskFormComponent.prototype.clear = function () {
        this.title = '';
    };
    TaskFormComponent.prototype.submit = function () {
        var title = this.title.trim();
        if (title.length) {
            this.createTask.emit(title);
        }
        this.clear();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskFormComponent.prototype, "createTask", void 0);
    TaskFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush,
            selector: 'app-task-form',
            styles: [__webpack_require__("../../../../../src/app/tasks/components/task-form/task-form.component.scss")],
            template: "\n    <form class=\"task-form\" (ngSubmit)=\"submit()\" novalidate>\n      <input\n        [(ngModel)]=\"title\"\n        (keyup.escape)=\"clear()\"\n        autocomplete=\"off\"\n        autofocus\n        class=\"task-form__input\"\n        name=\"title\"\n        placeholder=\"What needs to be done?\"\n        required\n        type=\"text\">\n    </form>\n  "
        })
    ], TaskFormComponent);
    return TaskFormComponent;
}());

//# sourceMappingURL=task-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-item/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_item_component__ = __webpack_require__("../../../../../src/app/tasks/components/task-item/task-item.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__task_item_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-item/task-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div\n  [ngClass]=\"{'task-item--completed': task.completed, 'task-item--editing': editing}\"\n  class=\"task-item\"\n  tabindex=\"0\">\n\n  <div class=\"cell\">\n    <button\n      *ngIf=\"!editing\"\n      (click)=\"toggleStatus()\"\n      aria-label=\"Mark task as completed\"\n      class=\"task-item__button\"\n      type=\"button\">\n      <span class=\"icon material-icons\" [ngClass]=\"{'icon--active': task.completed}\">done</span>\n    </button>\n  </div>\n\n  <div class=\"cell\">\n    <div\n      *ngIf=\"!editing\"\n      class=\"task-item__title\"\n      tabindex=\"0\">\n      {{ task.title }}\n    </div>\n\n    <form class=\"task-form\" *ngIf=\"editing\" (ngSubmit)=\"saveTitle()\" novalidate>\n      <input\n        [(ngModel)]=\"title\"\n        (blur)=\"stopEditing()\"\n        (keyup.escape)=\"stopEditing()\"\n        autocomplete=\"off\"\n        autoFocus\n        class=\"task-item__input\"\n        name=\"title\"\n        type=\"text\">\n    </form>\n  </div>\n\n  <div class=\"cell\">\n    <button\n      *ngIf=\"editing\"\n      (click)=\"stopEditing()\"\n      aria-label=\"Cancel editing\"\n      class=\"task-item__button\"\n      type=\"button\">\n      <span class=\"icon material-icons\">&#xe14c;</span>\n    </button>\n    <button\n      *ngIf=\"!editing\"\n      (click)=\"editTitle()\"\n      aria-label=\"Edit task title\"\n      class=\"task-item__button\"\n      type=\"button\">\n      <span class=\"icon material-icons\">edit</span>\n    </button>\n    <button\n      *ngIf=\"!editing\"\n      (click)=\"remove.emit()\"\n      aria-label=\"Delete task\"\n      class=\"task-item__button\"\n      type=\"button\">\n      <span class=\"icon material-icons\">delete</span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-item/task-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-item {\n  display: flex;\n  outline: none;\n  border-bottom: 1px dotted #fff;\n  height: 60px;\n  overflow: hidden;\n  color: #fff;\n  font-size: 1.125rem;\n  font-weight: 300; }\n  @media screen and (min-width: 33.75em) {\n    .task-item {\n      font-size: 1.5rem; } }\n\n.task-item--editing {\n  border-bottom: 1px dotted #fff; }\n\n.cell:first-child, .cell:last-child {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center; }\n\n.cell:first-child {\n  padding-right: 20px; }\n\n.cell:nth-child(2) {\n  flex: 1;\n  padding-right: 30px;\n  overflow: hidden; }\n\n.task-item__button {\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  margin-left: 5px;\n  outline: none;\n  border: 0;\n  border-radius: 100px;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  background: #fff;\n  transform: translate(0, 0); }\n  .task-item__button[disabled] {\n    cursor: default; }\n  .task-item__button:first-child {\n    margin: 0; }\n\n.icon {\n  line-height: 40px !important;\n  color: black; }\n  .task-item__button:hover .icon {\n    color: black; }\n\n.icon--active, .task-item__button:hover .icon--active {\n  color: black; }\n\n@keyframes fade-title {\n  from {\n    color: #fff; }\n  to {\n    color: #fff; } }\n\n@keyframes strike-title {\n  from {\n    width: 0; }\n  to {\n    width: 100%; } }\n\n.task-item__title {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n  line-height: 60px;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .task-item__title:after {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    border-top: 2px solid #fff;\n    width: 0;\n    height: 46%;\n    content: ''; }\n  .task-item--completed .task-item__title {\n    color: #fff; }\n  .task-item--completed .task-item__title:after {\n    width: 100%; }\n  .task-item--completed.task-item--status-updated .task-item__title {\n    animation: fade-title 120ms ease-in-out; }\n  .task-item--completed.task-item--status-updated .task-item__title:after {\n    animation: strike-title 180ms ease-in-out; }\n\n.task-item__input {\n  outline: none;\n  border: 0;\n  padding: 0;\n  width: 100%;\n  height: 60px;\n  color: inherit;\n  font: inherit;\n  background: transparent; }\n  .task-item__input::-ms-clear {\n    display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-item/task-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/tasks/models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskItemComponent = (function () {
    function TaskItemComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */](false);
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */](false);
        this.editing = false;
        this.title = '';
    }
    TaskItemComponent.prototype.editTitle = function () {
        this.editing = true;
        this.title = this.task.title;
    };
    TaskItemComponent.prototype.saveTitle = function () {
        if (this.editing) {
            var title = this.title.trim();
            if (title.length && title !== this.task.title) {
                this.update.emit({ title: title });
            }
            this.stopEditing();
        }
    };
    TaskItemComponent.prototype.stopEditing = function () {
        this.editing = false;
    };
    TaskItemComponent.prototype.toggleStatus = function () {
        this.update.emit({
            completed: !this.task.completed
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models__["b" /* ITask */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models__["b" /* ITask */]) === "function" && _a || Object)
    ], TaskItemComponent.prototype, "task", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskItemComponent.prototype, "remove", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskItemComponent.prototype, "update", void 0);
    TaskItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush,
            selector: 'app-task-item',
            styles: [__webpack_require__("../../../../../src/app/tasks/components/task-item/task-item.component.scss")],
            template: __webpack_require__("../../../../../src/app/tasks/components/task-item/task-item.component.html"),
        })
    ], TaskItemComponent);
    return TaskItemComponent;
    var _a;
}());

//# sourceMappingURL=task-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-list/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task_list_component__ = __webpack_require__("../../../../../src/app/tasks/components/task-list/task-list.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__task_list_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-list/task-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-filters {\n  margin-bottom: 45px;\n  padding-left: 1px;\n  font-size: 1rem;\n  line-height: 24px;\n  list-style-type: none; }\n  .task-filters:after {\n    clear: both;\n    content: '';\n    display: table; }\n  @media screen and (min-width: 33.75em) {\n    .task-filters {\n      margin-bottom: 55px; } }\n  .task-filters li {\n    float: left; }\n    .task-filters li:not(:first-child) {\n      margin-left: 12px; }\n    .task-filters li:not(:first-child):before {\n      padding-right: 12px;\n      content: '/';\n      font-weight: 300; }\n  .task-filters a {\n    color: #999;\n    text-decoration: none; }\n    .task-filters a.active {\n      color: black; }\n\n.task-list {\n  border-top: 1px dotted #007341; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/components/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListComponent = (function () {
    function TaskListComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */](false);
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */](false);
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", String)
    ], TaskListComponent.prototype, "filter", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["c" /* FirebaseListObservable */]) === "function" && _a || Object)
    ], TaskListComponent.prototype, "tasks", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskListComponent.prototype, "remove", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
        __metadata("design:type", Object)
    ], TaskListComponent.prototype, "update", void 0);
    TaskListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ChangeDetectionStrategy */].OnPush,
            selector: 'app-task-list',
            styles: [__webpack_require__("../../../../../src/app/tasks/components/task-list/task-list.component.scss")],
            template: "\n    <ul class=\"task-filters\">\n      <li><a [class.active]=\"!filter\" [routerLink]=\"['/tasks']\">View All</a></li>\n      <li><a [class.active]=\"filter === 'false'\" [routerLink]=\"['/tasks', {completed: false}]\">Active</a></li>\n      <li><a [class.active]=\"filter === 'true'\" [routerLink]=\"['/tasks', {completed: true}]\">Completed</a></li>\n    </ul>\n\n    <div class=\"task-list\">\n      <app-task-item\n        *ngFor=\"let task of tasks | async\"\n        [task]=\"task\"\n        (remove)=\"remove.emit(task)\"\n        (update)=\"update.emit({task: task, changes: $event})\"></app-task-item>\n    </div>\n  "
        })
    ], TaskListComponent);
    return TaskListComponent;
    var _a;
}());

//# sourceMappingURL=task-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/components/tasks/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tasks_component__ = __webpack_require__("../../../../../src/app/tasks/components/tasks/tasks.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tasks_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck__ = __webpack_require__("../../../../rxjs/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_service__ = __webpack_require__("../../../../../src/app/tasks/tasks.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TasksComponent = (function () {
    function TasksComponent(route, tasksService) {
        this.route = route;
        this.tasksService = tasksService;
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.route.params
            .pluck('completed')
            .do(function (value) { return _this.tasksService.filterTasks(value); });
    };
    TasksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_11" /* Component */])({
            selector: 'app-tasks',
            template: "\n    <div class=\"g-row\">\n      <div class=\"g-col\">\n        <app-task-form (createTask)=\"tasksService.createTask($event)\"></app-task-form>\n      </div>\n\n      <div class=\"g-col\">\n        <app-task-list\n          [filter]=\"filter | async\"\n          [tasks]=\"tasksService.visibleTasks$\"\n          (remove)=\"tasksService.removeTask($event)\"\n          (update)=\"tasksService.updateTask($event.task, $event.changes)\"></app-task-list>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tasks_service__["a" /* TasksService */]) === "function" && _b || Object])
    ], TasksComponent);
    return TasksComponent;
    var _a, _b;
}());

//# sourceMappingURL=tasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/directives/auto-focus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoFocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoFocusDirective = (function () {
    function AutoFocusDirective(element) {
        this.element = element;
    }
    AutoFocusDirective.prototype.ngOnInit = function () {
        this.element.nativeElement.focus();
    };
    AutoFocusDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
            selector: '[autoFocus]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
    ], AutoFocusDirective);
    return AutoFocusDirective;
    var _a;
}());

//# sourceMappingURL=auto-focus.directive.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auto_focus_directive__ = __webpack_require__("../../../../../src/app/tasks/directives/auto-focus.directive.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auto_focus_directive__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tasks_module__ = __webpack_require__("../../../../../src/app/tasks/tasks.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tasks_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__task__ = __webpack_require__("../../../../../src/app/tasks/models/task.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__task__["ITask"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__task__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/models/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase__ = __webpack_require__("../../../../../src/app/firebase/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });

var Task = (function () {
    function Task(title) {
        this.completed = false;
        this.createdAt = __WEBPACK_IMPORTED_MODULE_0__firebase__["b" /* firebase */].database.ServerValue.TIMESTAMP;
        this.title = title;
    }
    return Task;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_task_form__ = __webpack_require__("../../../../../src/app/tasks/components/task-form/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_task_item__ = __webpack_require__("../../../../../src/app/tasks/components/task-item/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_task_list__ = __webpack_require__("../../../../../src/app/tasks/components/task-list/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tasks__ = __webpack_require__("../../../../../src/app/tasks/components/tasks/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives__ = __webpack_require__("../../../../../src/app/tasks/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tasks_routes__ = __webpack_require__("../../../../../src/app/tasks/tasks.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tasks_service__ = __webpack_require__("../../../../../src/app/tasks/tasks.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// components




// directives

// modules

// services

var TasksModule = (function () {
    function TasksModule() {
    }
    TasksModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__directives__["a" /* AutoFocusDirective */],
                __WEBPACK_IMPORTED_MODULE_3__components_task_form__["a" /* TaskFormComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_task_item__["a" /* TaskItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_task_list__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_tasks__["a" /* TasksComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__tasks_routes__["a" /* TasksRoutesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__tasks_service__["a" /* TasksService */]
            ]
        })
    ], TasksModule);
    return TasksModule;
}());

//# sourceMappingURL=tasks.module.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tasks__ = __webpack_require__("../../../../../src/app/tasks/components/tasks/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksRoutesModule; });

// components

// guards

var TasksRoutesModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild([
    {
        path: 'tasks',
        component: __WEBPACK_IMPORTED_MODULE_1__components_tasks__["a" /* TasksComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth__["c" /* RequireAuthGuard */]]
    }
]);
//# sourceMappingURL=tasks.routes.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth__ = __webpack_require__("../../../../../src/app/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models__ = __webpack_require__("../../../../../src/app/tasks/models/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TasksService = (function () {
    function TasksService(afDb, auth) {
        var _this = this;
        this.filter$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__["ReplaySubject"](1);
        auth.uid$
            .take(1)
            .subscribe(function (uid) {
            var path = "/tasks/" + uid;
            _this.tasks$ = afDb.list(path);
            _this.filteredTasks$ = afDb.list(path, { query: {
                    orderByChild: 'completed',
                    equalTo: _this.filter$
                } });
            _this.visibleTasks$ = _this.filter$
                .switchMap(function (filter) { return filter === null ? _this.tasks$ : _this.filteredTasks$; });
        });
    }
    TasksService.prototype.filterTasks = function (filter) {
        switch (filter) {
            case 'false':
                this.filter$.next(false);
                break;
            case 'true':
                this.filter$.next(true);
                break;
            default:
                this.filter$.next(null);
                break;
        }
    };
    TasksService.prototype.createTask = function (title) {
        return this.tasks$.push(new __WEBPACK_IMPORTED_MODULE_6__models__["a" /* Task */](title));
    };
    TasksService.prototype.removeTask = function (task) {
        return this.tasks$.remove(task.$key);
    };
    TasksService.prototype.updateTask = function (task, changes) {
        return this.tasks$.update(task.$key, changes);
    };
    TasksService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__auth__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth__["b" /* AuthService */]) === "function" && _b || Object])
    ], TasksService);
    return TasksService;
    var _a, _b;
}());

//# sourceMappingURL=tasks.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase__ = __webpack_require__("../../../../../src/environments/firebase.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });

var environment = {
    production: false,
    firebase: __WEBPACK_IMPORTED_MODULE_0__firebase__["a" /* firebaseConfig */]
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/environments/firebase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: 'AIzaSyDaEW83qAOozjJbbJP1YYbEHxxfFksdSHQ',
    authDomain: 'ng2-todo-app.firebaseapp.com',
    databaseURL: 'https://ng2-todo-app.firebaseio.com',
    storageBucket: 'ng2-todo-app.appspot.com'
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .then(function () {
    if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production && 'serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(function (registration) { return console.log('[Service Worker] registered with scope', registration.scope); });
    }
})
    .catch(function (error) { return console.error(error); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map