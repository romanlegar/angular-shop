(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/components/book-details/book-details.component */ "./src/app/products/components/book-details/book-details.component.ts");
/* harmony import */ var _products_components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/components/book-list/book-list.component */ "./src/app/products/components/book-list/book-list.component.ts");
/* harmony import */ var _cart_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/components/cart/cart.component */ "./src/app/cart/components/cart/cart.component.ts");
/* harmony import */ var _orders_components_process_order_form_process_order_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders/components/process-order-form/process-order-form.component */ "./src/app/orders/components/process-order-form/process-order-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
var routes = [
    {
        path: 'order',
        component: _orders_components_process_order_form_process_order_form_component__WEBPACK_IMPORTED_MODULE_5__["ProcessOrderFormComponent"]
    },
    {
        path: 'cart',
        component: _cart_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
    },
    {
        path: 'books/:id',
        component: _products_components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_2__["BookDetailsComponent"]
    },
    {
        path: 'books',
        component: _products_components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__["BookListComponent"]
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ".navbar {\r\n  height: 50px;\r\n  background-color: #8A2BE2;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 24px;\r\n\r\n}\r\n.navbar .nav-item {\r\n  color: white;\r\n}\r\n.navbar .nav-item:first-child {\r\n  background-image: url(https://www.qgis.org/en/_static/images/users-docs.png);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  padding-left: 80px;\r\n  font-weight: bold;\r\n}\r\n.navbar .form-control {\r\n  width: 230px;\r\n}\r\n.navbar .cart-item {\r\n  width: 54px;\r\n  height: 44px;\r\n  background-size: cover;\r\n  background-image: url(https://ecaro.ru/local/templates/ecaro/img/u12.png);\r\n}\r\n.navbar .count {\r\n  position: relative;\r\n  left: 50px;\r\n  bottom: 10px;;\r\n  background-color: #FA8072;\r\n  padding: 4px 6px 4px 6px;\r\n  border-radius: 50%;\r\n  font-size: 12px;\r\n  border: 2px solid;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<base href=\"/\">\r\n<nav class=\"navbar\">\r\n\r\n  <a class=\"nav-item\" routerLink=\"/books\" routerLinkActive=\"active\">\r\n      Books-shop\r\n  </a>\r\n  <a class=\"nav-item cart-item\" routerLink=\"/cart\">\r\n    <span class=\"count\">{{this.count}}</span>\r\n  </a>\r\n</nav>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var src_app_shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/Cart/cart.service */ "./src/app/shared/services/Cart/cart.service.ts");
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
    function AppComponent(cartService) {
        this.cartService = cartService;
        this.title = 'Lesson';
        this.components = cartService.getCartItems();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.cust.subscribe(function (comp) {
            var t = _this.cartService.updateTotals();
            _this.count = t.count;
            _this.components = comp;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.module */ "./src/app/cart/cart.module.ts");
/* harmony import */ var _orders_components_orders_orders_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/components/orders/orders.module */ "./src/app/orders/components/orders/orders.module.ts");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.module */ "./src/app/products/products.module.ts");
/* harmony import */ var _shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/Cart/cart.service */ "./src/app/shared/services/Cart/cart.service.ts");
/* harmony import */ var _shared_services_Books_books_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/Books/books.service */ "./src/app/shared/services/Books/books.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _cart_cart_module__WEBPACK_IMPORTED_MODULE_3__["CartModule"],
                _orders_components_orders_orders_module__WEBPACK_IMPORTED_MODULE_4__["OrdersModule"],
                _products_products_module__WEBPACK_IMPORTED_MODULE_5__["ProductsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [_shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"], _shared_services_Books_books_service__WEBPACK_IMPORTED_MODULE_7__["BooksService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/cart/components/cart/cart.component.ts");
/* harmony import */ var _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart-item/cart-item.component */ "./src/app/cart/components/cart-item/cart-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_3__["CartItemComponent"]],
            exports: [_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/cart/components/cart-item/cart-item.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/cart/components/cart-item/cart-item.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    margin: 5px;\r\n}\r\np {\r\n    margin: 5px;\r\n    font-size: 20px;\r\n}\r\n.list-item {\r\n  width: 170px;\r\n  display: inline-block;\r\n}\r\n.cart-text {\r\n  position: relative;\r\n  left: 50px;\r\n  bottom: 35px;\r\n\r\n}\r\n.cart-img {\r\n  width: 170px;\r\n}\r\n.cart-name {\r\n  text-align: center;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n}\r\n.cart-minus {\r\n  position: relative;\r\n  left: 80px;\r\n  bottom: 73px;\r\n\r\n}\r\n.cart-delete {\r\n  position: relative;\r\n  left: 130px;\r\n  bottom: 113px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/cart/components/cart-item/cart-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/cart/components/cart-item/cart-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <figure class=\"list-item\">\r\n\r\n    <figcaption class=\"cart-name\" [innerText]='cartComponent.name | titlecase'></figcaption>\r\n    <img class=\"cart-img\" src={{cartComponent.img}} alt=\"img\">\r\n    <div>\r\n      <button class=\"btn btn-secondary center-block\" (click)=\"onMinusButtonClicked()\">-</button>\r\n      <p class=\"cart-text\">\r\n        {{cartComponent.quantity}}\r\n      </p>\r\n      <button class=\"btn btn-secondary center-block cart-minus\" (click)=\"onPlusButtonClicked()\">+</button>\r\n      <button class=\"btn btn-danger center-block  cart-delete\" (click)=\"onRemoveButtonClicked()\">x</button>\r\n    </div>\r\n\r\n  </figure>\r\n"

/***/ }),

/***/ "./src/app/cart/components/cart-item/cart-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/cart/components/cart-item/cart-item.component.ts ***!
  \******************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_CartItemModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/CartItemModel */ "./src/app/cart/models/CartItemModel.ts");
/* harmony import */ var src_app_shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/Cart/cart.service */ "./src/app/shared/services/Cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(cartService) {
        this.cartService = cartService;
        this.removeButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.minusButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.plusButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CartItemComponent.prototype.ngOnInit = function () { };
    CartItemComponent.prototype.onPlusButtonClicked = function () {
        this.plusButtonClicked.emit(this.cartComponent);
    };
    CartItemComponent.prototype.onMinusButtonClicked = function () {
        this.minusButtonClicked.emit(this.cartComponent);
        // this.cartService.decQuantity(this.cartComponent);
    };
    CartItemComponent.prototype.onRemoveButtonClicked = function () {
        this.removeButtonClicked.emit(this.cartComponent);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_CartItemModel__WEBPACK_IMPORTED_MODULE_1__["CartItemModel"])
    ], CartItemComponent.prototype, "cartComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CartItemComponent.prototype, "removeButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CartItemComponent.prototype, "minusButtonClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CartItemComponent.prototype, "plusButtonClicked", void 0);
    CartItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-item',
            template: __webpack_require__(/*! ./cart-item.component.html */ "./src/app/cart/components/cart-item/cart-item.component.html"),
            styles: [__webpack_require__(/*! ./cart-item.component.css */ "./src/app/cart/components/cart-item/cart-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartItemComponent);
    return CartItemComponent;
}());



/***/ }),

/***/ "./src/app/cart/components/cart/cart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cart/components/cart/cart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    margin: 10px;\r\n}\r\n\r\nimg {\r\n    margin: 20px;\r\n}\r\n\r\n.btn-warning{\r\n    margin-top: 20px;\r\n}\r\n\r\n.btn-row {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.table, .btn-row {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  .table {\r\n    flex-direction: column;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/cart/components/cart/cart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cart/components/cart/cart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"components.length>0\">\r\n    <div >\r\n        <div class=\"col-md-12 btn-row\">\r\n          <button class=\"btn btn-success\" name=\"total\"> Цена: {{total}} </button>\r\n          <button class=\"btn btn-success\" name=\"count\">Количество товаров: {{count}}</button>\r\n          <a  href=\"/order\"\r\n             class=\"btn btn-info pull-right\"\r\n            (click)=\"onCreateOrder()\"\r\n            data-toggle=\"modal\"\r\n            data-target=\"#exampleModalCenter\">\r\n            Оформить\r\n          </a>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"table\">\r\n        <app-cart-item *ngFor=\"let component of components\"\r\n                [cartComponent]=\"component\"\r\n                (removeButtonClicked)=\"onRemoveButtonClicked($event)\"\r\n                (minusButtonClicked)=\"onMinusButtonClicked($event)\"\r\n                (plusButtonClicked)=\"onPlusButtonClicked($event)\"\r\n                ></app-cart-item>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cart/components/cart/cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cart/components/cart/cart.component.ts ***!
  \********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/Cart/cart.service */ "./src/app/shared/services/Cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
        this.components = cartService.getCartItems();
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.cust.subscribe(function (comp) {
            var t = _this.cartService.updateTotals();
            _this.total = t.sum;
            _this.count = t.count;
            _this.components = comp;
        });
    };
    CartComponent.prototype.onRemoveButtonClicked = function (cartItem) {
        this.cartService.delFromCart(cartItem);
    };
    CartComponent.prototype.onMinusButtonClicked = function (cartItem) {
        this.cartService.decQuantity(cartItem);
    };
    CartComponent.prototype.onPlusButtonClicked = function (cartItem) {
        this.cartService.incQuantity(cartItem);
    };
    CartComponent.prototype.onCreateOrder = function () {
        console.log(this.components);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/components/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cart/models/CartItemModel.ts":
/*!**********************************************!*\
  !*** ./src/app/cart/models/CartItemModel.ts ***!
  \**********************************************/
/*! exports provided: CartItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemModel", function() { return CartItemModel; });
/* harmony import */ var src_app_products_models_BookModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/products/models/BookModel */ "./src/app/products/models/BookModel.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CartItemModel = /** @class */ (function (_super) {
    __extends(CartItemModel, _super);
    function CartItemModel(id, name, price, img, quantity) {
        var _this = _super.call(this, id, name, price, img) || this;
        _this.quantity = quantity;
        return _this;
    }
    return CartItemModel;
}(src_app_products_models_BookModel__WEBPACK_IMPORTED_MODULE_0__["BookModel"]));



/***/ }),

/***/ "./src/app/orders/components/orders/orders.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/orders/components/orders/orders.module.ts ***!
  \***********************************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _process_order_form_process_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../process-order-form/process-order-form.component */ "./src/app/orders/components/process-order-form/process-order-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_process_order_form_process_order_form_component__WEBPACK_IMPORTED_MODULE_2__["ProcessOrderFormComponent"]],
            exports: [_process_order_form_process_order_form_component__WEBPACK_IMPORTED_MODULE_2__["ProcessOrderFormComponent"]]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ }),

/***/ "./src/app/orders/components/process-order-form/process-order-form.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/orders/components/process-order-form/process-order-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/components/process-order-form/process-order-form.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/orders/components/process-order-form/process-order-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Оформление заказа</h5>\r\n      </div>\r\n      <div class=\"modal-body\"><form [formGroup]=\"userForm\">\r\n        <label for=\"email\">Фамилия и имя:</label><input name=\"fio\" type=\"text\" value=\"\" class=\"form-control\" formControlName=\"name\"><br />\r\n        <p class=\"help-block\" *ngIf=\"(userForm.get('name').touched || userForm.get('name').dirty) && userForm.get('name').errors\">\r\n          <span class=\"badge badge-danger\" *ngIf=\"userForm.get('name').hasError('required')\">Пожалуйста, укажите свою фамилию и имя.</span>\r\n          <span class=\"badge badge-danger\" *ngIf=\"userForm.get('name').hasError('minlength')\">Поле должно содержать как минимум 5 символов.</span>\r\n          <span class=\"badge badge-danger\" *ngIf=\"userForm.get('name').hasError('maxlength')\">Поле должно содержать не больше 50 символов.</span>\r\n        </p>\r\n\r\n        <label for=\"email\">e-mail:</label><input name=\"email\" type=\"email\" value=\"\" class=\"form-control\" formControlName=\"email\"><br />\r\n        <p class=\"help-block\" *ngIf=\"(userForm.get('email').touched || userForm.get('email').dirty) && userForm.get('email').errors\">\r\n          <span class=\"badge badge-danger\" *ngIf=\"userForm.get('email').hasError('required')\">Пожалуйста, укажите Ваш e-mail.</span>\r\n          <span class=\"badge badge-danger\" *ngIf=\"userForm.get('email').hasError('pattern')\">Пожалуйста, укажите корректный адрес e-mail.</span>\r\n          <span class=\"badge badge-danger\" *ngIf=\"userForm.get('email').hasError('email')\">Пожалуйста, укажите корректный адрес e-mail.</span>\r\n        </p>\r\n\r\n        <label for=\"phone\">Телефон:</label><input name=\"phone\" type=\"text\" value=\"\" class=\"form-control\" placeholder=\"+380XXXXXXXXX\" formControlName=\"phone\"><br />\r\n        <p class=\"help-block\" *ngIf=\"(userForm.get('phone').touched || userForm.get('phone').dirty) && userForm.get('phone').errors\">\r\n          <span class=\"badge badge-danger\" *ngIf=\"userForm.get('phone').hasError('required')\">Пожалуйста, укажите Ваш телефон.</span>\r\n          <span class=\"badge badge-danger\" *ngIf=\"userForm.get('phone').hasError('pattern')\">Пожалуйста, укажите корректный номер телефона.</span>\r\n          <span class=\"badge badge-danger\" *ngIf=\"userForm.get('phone').hasError('phone')\">Пожалуйста, укажите корректный номер телефона.</span>\r\n        </p>\r\n\r\n        <label for=\"dateOrder\">Дата доставки:</label><input name=\"dateOrder\" type=\"date\" value=\"\" class=\"form-control\" formControlName=\"ddate\"><br />\r\n      </form></div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/orders/components/process-order-form/process-order-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/orders/components/process-order-form/process-order-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProcessOrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessOrderFormComponent", function() { return ProcessOrderFormComponent; });
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../order.model */ "./src/app/orders/order.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProcessOrderFormComponent = /** @class */ (function () {
    function ProcessOrderFormComponent(fb) {
        this.fb = fb;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.order = new _order_model__WEBPACK_IMPORTED_MODULE_0__["OrderModel"]();
    }
    ProcessOrderFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ProcessOrderFormComponent.prototype.onClose = function () {
        this.close.emit(1);
    };
    ProcessOrderFormComponent.prototype.buildForm = function () {
        this.userForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]
            ],
            phone: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('\\+380?[0-9]{10}')]
            ],
            ddate: ['']
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProcessOrderFormComponent.prototype, "close", void 0);
    ProcessOrderFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-process-order-form',
            template: __webpack_require__(/*! ./process-order-form.component.html */ "./src/app/orders/components/process-order-form/process-order-form.component.html"),
            styles: [__webpack_require__(/*! ./process-order-form.component.css */ "./src/app/orders/components/process-order-form/process-order-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProcessOrderFormComponent);
    return ProcessOrderFormComponent;
}());



/***/ }),

/***/ "./src/app/orders/order.model.ts":
/*!***************************************!*\
  !*** ./src/app/orders/order.model.ts ***!
  \***************************************/
/*! exports provided: OrderModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return OrderModel; });
var OrderModel = /** @class */ (function () {
    function OrderModel() {
    }
    return OrderModel;
}());



/***/ }),

/***/ "./src/app/products/components/book-details/book-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/products/components/book-details/book-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/components/book-details/book-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/products/components/book-details/book-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item active\"\n    [innerText]='book.name | titlecase'>\n  </li>\n  <li class=\"list-group-item\">Цена: {{book.price}}</li>\n  <li class=\"list-group-item\">\n    <img src={{book.img}}>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/products/components/book-details/book-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/products/components/book-details/book-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: BookDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_Books_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/Books/books.service */ "./src/app/shared/services/Books/books.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(route, booksService) {
        var _this = this;
        this.route = route;
        this.booksService = booksService;
        this.route.paramMap.subscribe(function (params) {
            _this.id = +params.get("id");
        });
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getBook(this.id).then(function (data) {
            _this.book = data;
        });
    };
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/products/components/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/products/components/book-details/book-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_Books_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());



/***/ }),

/***/ "./src/app/products/components/book-list/book-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/products/components/book-list/book-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n}\r\n"

/***/ }),

/***/ "./src/app/products/components/book-list/book-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/products/components/book-list/book-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <app-book *ngFor=\"let book of (booksPromise | async)\" [book]=\"book\" (buyButtonClicked)=\"onBookAdded($event)\"></app-book>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/components/book-list/book-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/products/components/book-list/book-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_Books_books_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/Books/books.service */ "./src/app/shared/services/Books/books.service.ts");
/* harmony import */ var src_app_shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/Cart/cart.service */ "./src/app/shared/services/Cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListComponent = /** @class */ (function () {
    function BookListComponent(booksSerivce, cartService) {
        this.booksSerivce = booksSerivce;
        this.cartService = cartService;
        this.booksPromise = booksSerivce.getBooksAsync();
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    BookListComponent.prototype.onBookAdded = function (book) {
        this.cartService.addToCart(book);
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/products/components/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/products/components/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_Books_books_service__WEBPACK_IMPORTED_MODULE_1__["BooksService"], src_app_shared_services_Cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/products/components/book/book.component.css":
/*!*************************************************************!*\
  !*** ./src/app/products/components/book/book.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  padding: 10px;\r\n  margin: 10px 0px 10px 70px;\r\n  box-shadow: 0 0 2px rgba(0,0,0,0.5);\r\n}\r\nh3 {\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: 28px;\r\n}\r\n.card-img {\r\n  width: 190px;\r\n}\r\n@media only screen and (max-width: 990px) {\r\n  .card {\r\n    margin-left: 0px;\r\n  }\r\n}\r\n.btn{\r\n    margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/products/components/book/book.component.html":
/*!**************************************************************!*\
  !*** ./src/app/products/components/book/book.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card col-md-3 col-xs-12\">\r\n    <div class=\" col-md-12 col-xs-12\">\r\n      <div class=\"col-md-12 col-xs-12\">\r\n          <h3 class=\"bg-dark text-white\">\r\n            {{book.name  | titlecase}}\r\n            <a class=\"btn btn-success\" (click)=\"onBuyButtonClicked()\">\r\n              Купить: <span>{{book.price | currency}}</span>\r\n            </a>\r\n          </h3>\r\n      </div>\r\n\r\n      <img class=\"center-block card-img\" src={{book.img}}>\r\n    </div>\r\n    <div class=\"col-md-12 col-xs-12\">\r\n      <a (click)=\"onViewDetails()\" class=\"btn btn-primary center-block\">Подробности</a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/components/book/book.component.ts":
/*!************************************************************!*\
  !*** ./src/app/products/components/book/book.component.ts ***!
  \************************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_BookModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/BookModel */ "./src/app/products/models/BookModel.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent(router) {
        this.router = router;
        this.buyButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BookComponent.prototype.ngOnInit = function () { };
    BookComponent.prototype.onBuyButtonClicked = function () {
        this.buyButtonClicked.emit(this.book);
    };
    BookComponent.prototype.onViewDetails = function (event) {
        var link = ['/books', this.book.id];
        console.log(link);
        this.router.navigate(link);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_BookModel__WEBPACK_IMPORTED_MODULE_1__["BookModel"])
    ], BookComponent.prototype, "book", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookComponent.prototype, "buyButtonClicked", void 0);
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/products/components/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/products/components/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/products/models/BookModel.ts":
/*!**********************************************!*\
  !*** ./src/app/products/models/BookModel.ts ***!
  \**********************************************/
/*! exports provided: BookModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModel", function() { return BookModel; });
var BookModel = /** @class */ (function () {
    function BookModel(id, name, price, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
    }
    return BookModel;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_book_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/book/book.component */ "./src/app/products/components/book/book.component.ts");
/* harmony import */ var _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/book-list/book-list.component */ "./src/app/products/components/book-list/book-list.component.ts");
/* harmony import */ var _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/book-details/book-details.component */ "./src/app/products/components/book-details/book-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_components_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"], _components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__["BookListComponent"], _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_4__["BookDetailsComponent"]],
            exports: [_components_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_3__["BookListComponent"], _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_4__["BookDetailsComponent"]]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/shared/services/Books/books.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/Books/books.service.ts ***!
  \********************************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_products_models_BookModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/products/models/BookModel */ "./src/app/products/models/BookModel.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksService = /** @class */ (function () {
    function BooksService() {
    }
    BooksService.prototype.getBook = function (id) {
        return this.getBooksAsync()
            .then(function (books) { return books.find(function (book) { return book.id === +id; }); })
            .catch(function () { return Promise.reject('Error'); });
    };
    BooksService.prototype.getBooksAsync = function () {
        var books = [
            new src_app_products_models_BookModel__WEBPACK_IMPORTED_MODULE_1__["BookModel"](1, 'Сонячна машина ', 375, 'https://i1.rozetka.ua/goods/2146720/21120877_images_2146720584.jpg'),
            new src_app_products_models_BookModel__WEBPACK_IMPORTED_MODULE_1__["BookModel"](2, 'Мертві душі', 275, 'https://i1.rozetka.ua/goods/2146720/21120779_images_2146720150.jpg'),
            new src_app_products_models_BookModel__WEBPACK_IMPORTED_MODULE_1__["BookModel"](3, 'Гетсиманський', 310, 'https://i2.rozetka.ua/goods/2146716/21119771_images_2146716223.jpg')
        ];
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(books);
            }, 1000);
        });
    };
    BooksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/shared/services/Cart/cart.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/Cart/cart.service.ts ***!
  \******************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_cart_models_CartItemModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cart/models/CartItemModel */ "./src/app/cart/models/CartItemModel.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = /** @class */ (function () {
    function CartService() {
        this.components = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Array());
        this.cust = this.components.asObservable();
        var cartItem = [
            new src_app_cart_models_CartItemModel__WEBPACK_IMPORTED_MODULE_1__["CartItemModel"](1, 'Сонячна машина ', 375, 'https://i1.rozetka.ua/goods/2146720/21120877_images_2146720584.jpg', 1),
            new src_app_cart_models_CartItemModel__WEBPACK_IMPORTED_MODULE_1__["CartItemModel"](2, 'Мертві душі', 275, 'https://i1.rozetka.ua/goods/2146720/21120779_images_2146720150.jpg', 1),
            new src_app_cart_models_CartItemModel__WEBPACK_IMPORTED_MODULE_1__["CartItemModel"](3, 'Сад гетсиманський', 310, 'https://i2.rozetka.ua/goods/2146716/21119771_images_2146716223.jpg', 1)
        ];
        this.components.next(cartItem);
    }
    CartService.prototype.getCartItems = function () {
        return this.components.value;
    };
    CartService.prototype.addToCart = function (book) {
        if (this.components.value.filter(function (f) { return f.id === book.id; }).length === 1) {
            this.components.value.find(function (f) { return f.id === book.id; }).quantity++;
            this.components.next(this.components.value);
            return;
        }
        this.components.value.push(new src_app_cart_models_CartItemModel__WEBPACK_IMPORTED_MODULE_1__["CartItemModel"](book.id, book.name, book.price, book.img, 1));
    };
    CartService.prototype.delFromCart = function (cartItem) {
        var newComponentsList = this.components.value.filter(function (f) { return f.id !== cartItem.id; });
        this.components.next(newComponentsList);
    };
    CartService.prototype.decQuantity = function (cartItem) {
        if (this.components.value.find(function (f) { return f.id === cartItem.id; }).quantity > 1) {
            this.components.value.find(function (f) { return f.id === cartItem.id; }).quantity--;
            this.components.next(this.components.value);
        }
    };
    CartService.prototype.incQuantity = function (cartItem) {
        this.components.value.find(function (f) { return f.id === cartItem.id; }).quantity++;
        this.components.next(this.components.value);
    };
    CartService.prototype.updateTotals = function () {
        var sum = 0;
        var count = 0;
        this.components.value.forEach(function (element) {
            sum = sum + (element.price * element.quantity);
            count += element.quantity;
        });
        return { sum: sum, count: count };
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\GitHub\angularH\app-hw6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map