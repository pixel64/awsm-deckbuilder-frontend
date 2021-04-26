(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card-search-module/card-search-module.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-search-module/card-search-module.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"searchblock\">\r\n    <input #name (keydown.enter)=\"searchCard(name.value)\" type=\"search\" />\r\n    <button class=\"search-btn\" (click)=\"searchCard(name.value)\">SUCHEN</button>\r\n</div>\r\n<app-card-view [cards]=\"cardList\" [loading]=\"loading\"></app-card-view>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card-view/card-view.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card-view/card-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"loading\" *ngIf=\"loading\">lädt</div>\n  <div class=\"cards\">\n    <app-card *ngFor=\"let card of cardList\" [card]=\"card\"></app-card>\n  </div>\n  <div>\n    <app-decklist></app-decklist>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/card.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/card.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img (click)=\"addCard()\" *ngIf=\"!!card.image_uris\" src=\"{{card.image_uris.png}}\">\r\n<img (click)=\"addCard()\" *ngIf=\"!!card.card_faces\" src=\"{{card.card_faces[0].image_uris.png}}\">\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/decklist/decklist.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/decklist/decklist.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"decklist\">\n  <li *ngFor=\"let pile of cardList\">{{pile.card.name}} {{pile.count}} <button (click)=\"remove(pile)\">remove</button></li>\n</ul>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_search_module_card_search_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-search-module/card-search-module.component */ "./src/app/card-search-module/card-search-module.component.ts");
/* harmony import */ var _service_card_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/card-search.service */ "./src/app/service/card-search.service.ts");





var routes = [
    { path: '', component: _card_search_module_card_search_module_component__WEBPACK_IMPORTED_MODULE_3__["CardSearchModuleComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_service_card_search_service__WEBPACK_IMPORTED_MODULE_4__["CardSearchService"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _card_search_module_card_search_module_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-search-module/card-search-module.component */ "./src/app/card-search-module/card-search-module.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-view/card-view.component */ "./src/app/card-view/card-view.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _decklist_decklist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./decklist/decklist.component */ "./src/app/decklist/decklist.component.ts");
/* harmony import */ var _service_list_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/list-storage.service */ "./src/app/service/list-storage.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _card_search_module_card_search_module_component__WEBPACK_IMPORTED_MODULE_5__["CardSearchModuleComponent"],
                _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_7__["CardViewComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                _decklist_decklist_component__WEBPACK_IMPORTED_MODULE_9__["DecklistComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_service_list_storage_service__WEBPACK_IMPORTED_MODULE_10__["ListStorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-search-module/card-search-module.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/card-search-module/card-search-module.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  padding: 12px;\n  font-size: 16px;\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  border-style: solid;\n  border-right-width: 0px;\n}\n\n.searchblock {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  margin-bottom: 25px;\n  height: 60px;\n  background-color: gray;\n  border-bottom: 10px solid black;\n  padding: 25px;\n}\n\n.searchblock input, .searchblock button {\n  font-size: 20px;\n}\n\n.searchblock input:active, .searchblock input:focus, .searchblock input:hover, .searchblock button:active, .searchblock button:focus, .searchblock button:hover {\n  outline: 0;\n}\n\n.searchblock .search-btn {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-left-width: 0px;\n  border-style: solid;\n  border-color: black;\n  background-color: red;\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BpeGVsL3dvcmtzcGFjZS9hd3NtLWRlY2tidWlsZGVyL3NyYy9hcHAvY2FyZC1zZWFyY2gtbW9kdWxlL2NhcmQtc2VhcmNoLW1vZHVsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FyZC1zZWFyY2gtbW9kdWxlL2NhcmQtc2VhcmNoLW1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FER0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0FDQUo7O0FEQ0k7RUFDSSxlQUFBO0FDQ1I7O0FEQ1E7RUFDSSxVQUFBO0FDQ1o7O0FERUk7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtc2VhcmNoLW1vZHVsZS9jYXJkLXNlYXJjaC1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5zZWFyY2hibG9jayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGlucHV0LCBidXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgICAgICAmOmFjdGl2ZSwgJjpmb2N1cywgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1idG4ge1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xyXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7IFxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSIsImlucHV0IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwcHg7XG59XG5cbi5zZWFyY2hibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG4uc2VhcmNoYmxvY2sgaW5wdXQsIC5zZWFyY2hibG9jayBidXR0b24ge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uc2VhcmNoYmxvY2sgaW5wdXQ6YWN0aXZlLCAuc2VhcmNoYmxvY2sgaW5wdXQ6Zm9jdXMsIC5zZWFyY2hibG9jayBpbnB1dDpob3ZlciwgLnNlYXJjaGJsb2NrIGJ1dHRvbjphY3RpdmUsIC5zZWFyY2hibG9jayBidXR0b246Zm9jdXMsIC5zZWFyY2hibG9jayBidXR0b246aG92ZXIge1xuICBvdXRsaW5lOiAwO1xufVxuLnNlYXJjaGJsb2NrIC5zZWFyY2gtYnRuIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/card-search-module/card-search-module.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/card-search-module/card-search-module.component.ts ***!
  \********************************************************************/
/*! exports provided: CardSearchModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSearchModuleComponent", function() { return CardSearchModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_card_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/card-search.service */ "./src/app/service/card-search.service.ts");



var CardSearchModuleComponent = /** @class */ (function () {
    function CardSearchModuleComponent(cardSearchService) {
        this.cardSearchService = cardSearchService;
    }
    CardSearchModuleComponent.prototype.ngOnInit = function () {
    };
    CardSearchModuleComponent.prototype.searchCard = function (name) {
        var _this = this;
        this.loading = true;
        this.cardSearchService.getCard(name).subscribe(function (e) {
            if (e.data !== null && e.data.length > 0) {
                _this.cardList = e.data;
                _this.loading = false;
            }
        }, function (error) { return _this.loading = false; });
    };
    CardSearchModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-search-module',
            template: __webpack_require__(/*! raw-loader!./card-search-module.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-search-module/card-search-module.component.html"),
            styles: [__webpack_require__(/*! ./card-search-module.component.scss */ "./src/app/card-search-module/card-search-module.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_card_search_service__WEBPACK_IMPORTED_MODULE_2__["CardSearchService"]])
    ], CardSearchModuleComponent);
    return CardSearchModuleComponent;
}());



/***/ }),

/***/ "./src/app/card-view/card-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/card-view/card-view.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n\n.loading {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background-color: darkgray;\n  opacity: 0.5;\n}\n\n.content {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BpeGVsL3dvcmtzcGFjZS9hd3NtLWRlY2tidWlsZGVyL3NyYy9hcHAvY2FyZC12aWV3L2NhcmQtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FyZC12aWV3L2NhcmQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhcmQtdmlldy9jYXJkLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4iLCIuY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/card-view/card-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-view/card-view.component.ts ***!
  \**************************************************/
/*! exports provided: CardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewComponent", function() { return CardViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardViewComponent = /** @class */ (function () {
    function CardViewComponent() {
    }
    CardViewComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("cards"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CardViewComponent.prototype, "cardList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("loading"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardViewComponent.prototype, "loading", void 0);
    CardViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-view',
            template: __webpack_require__(/*! raw-loader!./card-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/card-view/card-view.component.html"),
            styles: [__webpack_require__(/*! ./card-view.component.scss */ "./src/app/card-view/card-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardViewComponent);
    return CardViewComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BpeGVsL3dvcmtzcGFjZS9hd3NtLWRlY2tidWlsZGVyL3NyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59IiwiaW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_CardFromApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/CardFromApi */ "./src/app/model/CardFromApi.ts");
/* harmony import */ var _service_list_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/list-storage.service */ "./src/app/service/list-storage.service.ts");




var CardComponent = /** @class */ (function () {
    function CardComponent(storageService) {
        this.storageService = storageService;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.addCard = function () {
        this.storageService.addCard(this.card);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('card'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_CardFromApi__WEBPACK_IMPORTED_MODULE_2__["CardFromApi"])
    ], CardComponent.prototype, "card", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_list_storage_service__WEBPACK_IMPORTED_MODULE_3__["ListStorageService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/decklist/decklist.component.scss":
/*!**************************************************!*\
  !*** ./src/app/decklist/decklist.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".decklist {\n  width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BpeGVsL3dvcmtzcGFjZS9hd3NtLWRlY2tidWlsZGVyL3NyYy9hcHAvZGVja2xpc3QvZGVja2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlY2tsaXN0L2RlY2tsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGVja2xpc3QvZGVja2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVja2xpc3Qge1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG4iLCIuZGVja2xpc3Qge1xuICB3aWR0aDogNDAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/decklist/decklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/decklist/decklist.component.ts ***!
  \************************************************/
/*! exports provided: DecklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecklistComponent", function() { return DecklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_list_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/list-storage.service */ "./src/app/service/list-storage.service.ts");



var DecklistComponent = /** @class */ (function () {
    function DecklistComponent(storageService) {
        this.storageService = storageService;
        this.decklist = new Map();
        this.cardList = [];
    }
    DecklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storageService.getCards().subscribe(function (payload) {
            _this.decklist = payload;
            var newCardList = [];
            _this.decklist.forEach(function (card) {
                newCardList.push(card);
            });
            _this.cardList = newCardList;
        });
    };
    DecklistComponent.prototype.remove = function (pile) {
        var card = pile.card;
        if (this.decklist.has(card.id)) {
            this.storageService.removeCard(card);
        }
    };
    DecklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-decklist',
            template: __webpack_require__(/*! raw-loader!./decklist.component.html */ "./node_modules/raw-loader/index.js!./src/app/decklist/decklist.component.html"),
            styles: [__webpack_require__(/*! ./decklist.component.scss */ "./src/app/decklist/decklist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_list_storage_service__WEBPACK_IMPORTED_MODULE_2__["ListStorageService"]])
    ], DecklistComponent);
    return DecklistComponent;
}());



/***/ }),

/***/ "./src/app/model/CardFromApi.ts":
/*!**************************************!*\
  !*** ./src/app/model/CardFromApi.ts ***!
  \**************************************/
/*! exports provided: CardFromApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFromApi", function() { return CardFromApi; });
var CardFromApi = /** @class */ (function () {
    function CardFromApi() {
    }
    return CardFromApi;
}());



/***/ }),

/***/ "./src/app/model/DecklistCardPile.ts":
/*!*******************************************!*\
  !*** ./src/app/model/DecklistCardPile.ts ***!
  \*******************************************/
/*! exports provided: DecklistCardPile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecklistCardPile", function() { return DecklistCardPile; });
var DecklistCardPile = /** @class */ (function () {
    function DecklistCardPile(card, count) {
        this.count = count;
        this.card = card;
    }
    return DecklistCardPile;
}());



/***/ }),

/***/ "./src/app/service/card-search.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/card-search.service.ts ***!
  \************************************************/
/*! exports provided: CardSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSearchService", function() { return CardSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CardSearchService = /** @class */ (function () {
    function CardSearchService(http) {
        this.http = http;
    }
    CardSearchService.prototype.getCard = function (cardname) {
        return this.http.get('https://api.scryfall.com/cards/search?q=' + cardname);
    };
    CardSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CardSearchService);
    return CardSearchService;
}());



/***/ }),

/***/ "./src/app/service/list-storage.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/list-storage.service.ts ***!
  \*************************************************/
/*! exports provided: ListStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStorageService", function() { return ListStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_DecklistCardPile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/DecklistCardPile */ "./src/app/model/DecklistCardPile.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm5/ngx-indexed-db.js");





var ListStorageService = /** @class */ (function () {
    function ListStorageService() {
        this.realCards = new Map();
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.db = new ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__["NgxIndexedDB"]('cardLists', 1);
        this.initDB();
    }
    ListStorageService.prototype.getCards = function () {
        return this.subject;
        this.initList();
    };
    ListStorageService.prototype.addCard = function (card) {
        if (this.realCards.has(card.id)) {
            this.addCardToHashmap(card);
        }
        else {
            this.realCards.set(card.id, new _model_DecklistCardPile__WEBPACK_IMPORTED_MODULE_2__["DecklistCardPile"](card, 1));
        }
        this.subject.next(this.realCards);
        this.saveList();
    };
    ListStorageService.prototype.addCardToHashmap = function (card) {
        var cardPileCount = this.realCards.get(card.id).count + 1;
        this.realCards.get(card.id).count = cardPileCount;
    };
    ListStorageService.prototype.removeCard = function (card) {
        if (this.realCards.has(card.id)) {
            this.removeCardFromHashmap(card);
            this.subject.next(this.realCards);
            this.saveList();
        }
    };
    ListStorageService.prototype.removeCardFromHashmap = function (card) {
        var cardPileCount = this.realCards.get(card.id).count - 1;
        if (cardPileCount === 0) {
            this.realCards.delete(card.id);
            return;
        }
        this.realCards.get(card.id).count = cardPileCount;
    };
    ListStorageService.prototype.saveList = function () {
        this.db.update('decklist', { id: 1, key: 'decklist', list: this.mapToJson(this.realCards) }).then(function () {
        }, function (error) {
            console.error(error);
        });
    };
    ListStorageService.prototype.initDB = function () {
        var _this = this;
        this.db.openDatabase(5, function (evt) {
            var objectStore = evt.currentTarget.result.createObjectStore('decklist', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('key', 'key', { unique: false });
            objectStore.createIndex('list', 'list', { unique: true });
        }).then(function () { return _this.initList(); });
    };
    ListStorageService.prototype.initList = function () {
        var _this = this;
        this.db.getByKey('decklist', 1).then(function (list) {
            var cardMap = _this.jsonToMap(list.list);
            _this.realCards = cardMap;
            _this.subject.next(cardMap);
        }, function (error) {
            console.error(error);
        });
    };
    ListStorageService.prototype.mapToJson = function (map) {
        return JSON.stringify(map.slice());
    };
    ListStorageService.prototype.jsonToMap = function (jsonStr) {
        return new Map(JSON.parse(jsonStr));
    };
    ListStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListStorageService);
    return ListStorageService;
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pixel/workspace/awsm-deckbuilder/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map