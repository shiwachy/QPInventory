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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hyperlink_hyperlink_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hyperlink/hyperlink.component */ "./src/app/hyperlink/hyperlink.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");






var routes = [
    { path: 'hyperlinks', component: _hyperlink_hyperlink_component__WEBPACK_IMPORTED_MODULE_3__["HyperlinkComponent"] },
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"] },
    { path: 'searchBar', component: _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_5__["SearchBarComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "/* Styling for router links */\r\n/* a {\r\n    display: inline-block;\r\n    margin: 0 10px;\r\n    padding: 5px 10px;\r\n    background-color: #f0f0f0;\r\n    color: #333;\r\n    text-decoration: none;\r\n    border-radius: 5px;\r\n    transition: background-color 0.3s ease;\r\n  } */\r\n/* a:hover {\r\n    background-color: #ddd;\r\n  } */\r\n/* Styling for router outlet \r\n  router-outlet {\r\n    display: block;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    background-color: #f9f9f9;\r\n  }\r\n  */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCOzs7Ozs7Ozs7S0FTSztBQUVIOztLQUVHO0FBRUg7Ozs7Ozs7OztHQVNDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsaW5nIGZvciByb3V0ZXIgbGlua3MgKi9cclxuLyogYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIC8qIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9ICovXHJcbiAgXHJcbiAgLyogU3R5bGluZyBmb3Igcm91dGVyIG91dGxldCBcclxuICByb3V0ZXItb3V0bGV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICB9XHJcbiAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<notifier-container style=\"position: absolute;\"></notifier-container>\n<!-- <div class=\"\">\n    <a routerLink=\"/hyperlinks\">HyperLinks</a>\n    <a routerLink=\"/searchBar\"> Search</a>\n</div> -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link navbar-brand\" routerLink=\"/hyperlinks\">HyperLinks</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link navbar-brand\" routerLink=\"/searchBar\"> Search</a>\n        </li>\n    </ul>\n</nav>\n\n<br><br>\n<router-outlet></router-outlet>\n"

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
        this.title = 'INVENTORY';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hyperlink_hyperlink_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hyperlink/hyperlink.component */ "./src/app/hyperlink/hyperlink.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm5/angular-notifier.js");













var notifierDefaultOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12,
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10,
        },
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4,
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease',
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50,
        },
        shift: {
            speed: 300,
            easing: 'ease',
        },
        overlap: 150,
    },
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _hyperlink_hyperlink_component__WEBPACK_IMPORTED_MODULE_6__["HyperlinkComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__["SearchBarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_12__["NotifierModule"].withConfig(notifierDefaultOptions)
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getSuggestions = function (keyword) {
        var url = 'https://localhost:7004/api/Inventory/getkeywords?keyword=' + keyword;
        console.log('GET request URL:', url); // Log the URL being requested
        return this.http.get(url);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/hyperlink/hyperlink.component.css":
/*!***************************************************!*\
  !*** ./src/app/hyperlink/hyperlink.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* External stylesheet styles.css */\r\n.form-container {\r\n    width: 400px;\r\n    margin: 0 auto;\r\n  }\r\nlabel {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\ninput[type=\"text\"] {\r\n    width: calc(100% - 80px); /* Adjust the width as needed */\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n  }\r\nbutton {\r\n    padding: 5px 10px;\r\n    margin: 10px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n  }\r\nbutton[type=\"submit\"] {\r\n    background-color: #007bff;\r\n    color: white;\r\n    border: none;\r\n  }\r\nbutton[type=\"submit\"]:hover {\r\n    background-color: #0056b3;\r\n  }\r\nbutton[type=\"button\"]:hover {\r\n    background-color: #ddc0b7;\r\n  }\r\n.keyword-input-container {\r\n    margin-bottom: 10px;\r\n  }\r\n.keyword-input-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n.keyword-input-wrapper input[type=\"text\"] {\r\n    flex: 1;\r\n    margin-right: 5px; /* Adjust the spacing between input and button */\r\n  }\r\n.remove-button {\r\n    background-color: #dc3545;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n.remove-button:hover {\r\n    background-color: #bd2130;\r\n  }\r\n.keywordList{\r\n    display: flex;\r\n    flex-direction: row;\r\n  }\r\n.key{\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    background-color: #a9bedc;\r\n    padding: 0px 4px;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    border-radius: 3px;\r\n    margin: 0px 5px;\r\n    border: none;\r\n  }\r\n.key a{\r\n    color: white;\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHlwZXJsaW5rL2h5cGVybGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1DQUFtQztBQUNuQztJQUNJLFlBQVk7SUFDWixjQUFjO0VBQ2hCO0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSx3QkFBd0IsRUFBRSwrQkFBK0I7SUFDekQsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsT0FBTztJQUNQLGlCQUFpQixFQUFFLGdEQUFnRDtFQUNyRTtBQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtFQUNqQjtBQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSx1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaHlwZXJsaW5rL2h5cGVybGluay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXh0ZXJuYWwgc3R5bGVzaGVldCBzdHlsZXMuY3NzICovXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTsgLyogQWRqdXN0IHRoZSB3aWR0aCBhcyBuZWVkZWQgKi9cclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICB9XHJcblxyXG4gIGJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGMwYjc7XHJcbiAgfVxyXG4gIFxyXG4gIC5rZXl3b3JkLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAua2V5d29yZC1pbnB1dC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAua2V5d29yZC1pbnB1dC13cmFwcGVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgLyogQWRqdXN0IHRoZSBzcGFjaW5nIGJldHdlZW4gaW5wdXQgYW5kIGJ1dHRvbiAqL1xyXG4gIH1cclxuICAucmVtb3ZlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQyMTMwO1xyXG4gIH1cclxuXHJcbiAgLmtleXdvcmRMaXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG5cclxuICAua2V5e1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5YmVkYztcclxuICAgIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICAua2V5IGF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/hyperlink/hyperlink.component.html":
/*!****************************************************!*\
  !*** ./src/app/hyperlink/hyperlink.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form [formGroup]=\"form\" class=\"form-container\" (ngSubmit)=\"onSubmit()\">\n  <label for=\"hyperlink\">Hyperlink:</label>\n  <input type=\"text\" id=\"hyperlink\" formControlName=\"hyperlink\">\n\n  <label for=\"keywords\">Keywords:</label>\n  <div formArrayName=\"keywords\">\n    <div class=\"keyword-input-container\">\n      <div *ngFor=\"let keyword of keywordForms.controls; let i = index\" class=\"keyword-input-wrapper\">\n        <input type=\"text\" [formControlName]=\"i\" list=\"datalistOptions\" [(ngModel)]=\"searchTerm\"\n          (input)=\"onSearchInputChange()\">\n        <button type=\"button\" class=\"remove-button\" (click)=\"removeKeyword(i)\">Remove</button>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" (click)=\"addKeyword()\">Add Keyword</button>\n  <button type=\"submit\">Submit</button>\n</form> -->\n\n\n<div class=\"form-container\">\n  <div class=\"hyperlink\">\n    <label for=\"hyperlink\">Hyperlink:</label>\n    <input type=\"text\" id=\"hyperlink\" (focusout)=\"onHyperlinkEntered()\" [(ngModel)]=\"dataToAdd.hyperlink\">\n  </div>\n  <div class=\"keyword\">\n    <label for=\"keywords\">Keywords:</label>\n    <input type=\"text\" id=\"keywords\" list=\"datalistOptions\" [(ngModel)]=\"searchTerm\" (input)=\"onSearchInputChange()\">  \n  </div>\n  <div class=\"keywordList\"> \n    <div class=\"key\" *ngFor=\"let key of dataToAdd.keyWords\">\n      <a (click)=\"removeKeyword(key)\">&#10005;</a>\n      <h5>{{key}}</h5>\n    </div>\n  </div>\n  <button type=\"button\" (click)=\"addKeyword()\">Add Keyword</button>\n  <button type=\"submit\" (click)=\"actionControl()\">{{actionName}}</button>\n</div>\n\n\n<!-- This provides auto complete while adding keyword -->\n<datalist id=\"datalistOptions\" *ngIf=\"showAutocomplete\">\n  <option *ngFor=\"let keyword of filteredKeywords\">\n    <li (click)=\"onKeywordSelected(keyword)\">{{ keyword }}</li>\n  </option>\n</datalist>"

/***/ }),

/***/ "./src/app/hyperlink/hyperlink.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hyperlink/hyperlink.component.ts ***!
  \**************************************************/
/*! exports provided: HyperlinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HyperlinkComponent", function() { return HyperlinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm5/angular-notifier.js");
/* harmony import */ var _hyperlink_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hyperlink.model */ "./src/app/hyperlink/hyperlink.model.ts");






var HyperlinkComponent = /** @class */ (function () {
    function HyperlinkComponent(fb, http, notifierService) {
        var _this = this;
        this.fb = fb;
        this.http = http;
        this.notifierService = notifierService;
        this.responseReceived = false;
        this.isSuccess = false;
        this.dataToAdd = new _hyperlink_model__WEBPACK_IMPORTED_MODULE_5__["linkData"]();
        this.actionName = "Submit";
        this.actionControlFlag = false;
        this.searchTerm = '';
        this.keywords = [];
        this.filteredKeywords = [];
        this.showAutocomplete = false;
        this.notifier = notifierService;
        this.http.get('/api/Hyperlink/GetKeywords')
            .subscribe(function (data) {
            _this.keywords = data;
        });
    }
    HyperlinkComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            hyperlink: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            keywords: this.fb.array([
                this.fb.control('')
            ])
        });
    };
    Object.defineProperty(HyperlinkComponent.prototype, "keywordForms", {
        get: function () {
            return this.form.get('keywords');
        },
        enumerable: true,
        configurable: true
    });
    HyperlinkComponent.prototype.addKeyword = function () {
        //this.keywordForms.push(this.fb.control(''));
        if (this.searchTerm != "") {
            this.dataToAdd.keyWords.push(this.searchTerm.toLocaleLowerCase());
            this.searchTerm = "";
        }
        else {
            alert("Empty Field");
        }
    };
    HyperlinkComponent.prototype.removeKeyword = function (key) {
        //this.keywordForms.removeAt(index);
        var index = this.dataToAdd.keyWords.indexOf(key);
        this.dataToAdd.keyWords.splice(index, 1);
    };
    HyperlinkComponent.prototype.onSearchInputChange = function () {
        var _this = this;
        this.showAutocomplete = this.searchTerm.length > 0;
        this.filteredKeywords = this.keywords.filter(function (keyword) {
            return keyword.toLowerCase().includes(_this.searchTerm.toLowerCase());
        });
    };
    HyperlinkComponent.prototype.onKeywordSelected = function (keyword) {
        this.searchTerm = keyword;
        this.showAutocomplete = false;
        // Do something with the selected keyword, like search or perform an action
    };
    HyperlinkComponent.prototype.onHyperlinkEntered = function () {
        var _this = this;
        this.dataToAdd.keyWords.length = 0;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        if (this.dataToAdd.hyperlink.length > 0) {
            this.http.post("/api/Hyperlink/GetLinkInfo", JSON.stringify(this.dataToAdd.hyperlink), { headers: headers })
                .subscribe(function (response) { return _this.onLinkFound(response); }, function (error) {
                _this.actionName = "Submit";
                _this.actionControlFlag = false;
            });
        }
    };
    HyperlinkComponent.prototype.onLinkFound = function (res) {
        var keywordLst = res;
        for (var i = 0; i < keywordLst.length; i++) {
            console.log(keywordLst[i]);
            this.dataToAdd.keyWords.push(keywordLst[i]);
        }
        this.actionControlFlag = true;
        this.actionName = "UPDATE";
    };
    HyperlinkComponent.prototype.actionControl = function () {
        if (!this.actionControlFlag) {
            this.onSubmit();
        }
        else {
            this.onUpdate();
        }
    };
    HyperlinkComponent.prototype.onUpdate = function () {
        var _this = this;
        this.http.put('/api/Hyperlink/Update', this.dataToAdd).subscribe(function (response) {
            _this.dataToAdd.keyWords.length = 0;
            _this.dataToAdd.hyperlink = "";
            alert("Updated Successfully");
        }, function (error) {
            alert("Something went wrong");
        });
    };
    HyperlinkComponent.prototype.onSubmit = function () {
        var _this = this;
        this.responseReceived = false;
        this.isSuccess = false;
        //var data = JSON.stringify(this.dataToAdd);
        if (this.dataToAdd.hyperlink != "" || this.dataToAdd.keyWords != null) {
            // Send POST request to API
            //const formData = this.form.value;
            this.http.post('/api/Hyperlink', this.dataToAdd).subscribe(function (response) { return _this.success(response); }, function (error) { return _this.handleError(error); });
        }
        else {
            // Mark all form controls as touched to display validation errors
            //this.form.markAsTouched();
            alert("some fields are empty");
        }
    };
    HyperlinkComponent.prototype.success = function (response) {
        this.dataToAdd.hyperlink = "";
        this.dataToAdd.keyWords = [];
        this.notifier.notify('success', 'Successful');
        console.log('Successfully Stored:', response);
    };
    HyperlinkComponent.prototype.handleError = function (error) {
        this.notifier.notify('error', 'Failed');
        console.error('Error Response:', error);
    };
    HyperlinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-hyperlink',
            template: __webpack_require__(/*! ./hyperlink.component.html */ "./src/app/hyperlink/hyperlink.component.html"),
            styles: [__webpack_require__(/*! ./hyperlink.component.css */ "./src/app/hyperlink/hyperlink.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
    ], HyperlinkComponent);
    return HyperlinkComponent;
}());



/***/ }),

/***/ "./src/app/hyperlink/hyperlink.model.ts":
/*!**********************************************!*\
  !*** ./src/app/hyperlink/hyperlink.model.ts ***!
  \**********************************************/
/*! exports provided: linkData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkData", function() { return linkData; });
var linkData = /** @class */ (function () {
    function linkData() {
        this.hyperlink = '';
        this.keyWords = new Array();
    }
    return linkData;
}());



/***/ }),

/***/ "./src/app/search-bar/search-bar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  height: 100vh; /* Set the height of the container to 100% of the viewport height */\r\n}\r\n\r\n.search-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.search-container input[type=\"text\"] {\r\n  margin-right: 10px; /* Add margin between input and button */\r\n}\r\n\r\n.link-button{\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s; /* Smooth transition for background color change */\r\n}\r\n\r\n.link-button:hover {\r\n  background-color: darkblue; /* Darker color on hover */\r\n}\r\n\r\n.link-button.clicked {\r\n  background-color: red;\r\n}\r\n\r\n.autocomplete {\r\n  margin-top: 10px; /* Add margin to separate autocomplete list from search input */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsYUFBYSxFQUFFLG1FQUFtRTtBQUNwRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSx3Q0FBd0M7QUFDOUQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQyxFQUFFLGtEQUFrRDtBQUN2Rjs7QUFFQTtFQUNFLDBCQUEwQixFQUFFLDBCQUEwQjtBQUN4RDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQixFQUFFLCtEQUErRDtBQUNuRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGhlaWdodDogMTAwdmg7IC8qIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgdG8gMTAwJSBvZiB0aGUgdmlld3BvcnQgaGVpZ2h0ICovXHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IC8qIEFkZCBtYXJnaW4gYmV0d2VlbiBpbnB1dCBhbmQgYnV0dG9uICovXHJcbn1cclxuXHJcbi5saW5rLWJ1dHRvbntcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zczsgLyogU21vb3RoIHRyYW5zaXRpb24gZm9yIGJhY2tncm91bmQgY29sb3IgY2hhbmdlICovXHJcbn1cclxuXHJcbi5saW5rLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7IC8qIERhcmtlciBjb2xvciBvbiBob3ZlciAqL1xyXG59XHJcblxyXG4ubGluay1idXR0b24uY2xpY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYXV0b2NvbXBsZXRlIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4OyAvKiBBZGQgbWFyZ2luIHRvIHNlcGFyYXRlIGF1dG9jb21wbGV0ZSBsaXN0IGZyb20gc2VhcmNoIGlucHV0ICovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.html":
/*!******************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"search-container\">\n    <input  type=\"text\" style=\"padding: 10px; width: 100%;\" list=\"datalistOptions\" [(ngModel)]=\"searchTerm\" (input)=\"onSearchInputChange()\" placeholder=\"Type to search...\">\n    <button (click)=\"getLink()\" class=\"btn btn-primary link-button\">GetLink</button>\n  </div>\n  <h3>URL Links</h3>\n  <!-- <ul>\n    <li *ngFor=\"let url of urls\">{{ url }}</li>\n  </ul> -->\n  <table class=\"table\">\n    <tr *ngFor=\"let url of urls, let i=index\">\n      <td>{{i+1}}</td>\n      <td>{{ url }}</td>\n      <button type=\"button\" \n        class=\"btn btn-dark btn-sm\"\n       (click)=\"copyValue(url)\">CopyLink</button>\n    </tr>\n  </table>\n</div>\n\n\n<!-- <button (click)=\"copyValue()\">Copy text</button> -->\n\n<!-- This provides auto complete while adding keyword -->\n<datalist id=\"datalistOptions\" *ngIf=\"showAutocomplete\">\n  <option *ngFor=\"let keyword of filteredKeywords\" >\n    <li (click)=\"onKeywordSelected(keyword)\">{{ keyword }}</li>    \n  </option>\n</datalist>\n\n\n"

/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm5/angular-notifier.js");




var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(http, notifierService) {
        var _this = this;
        this.http = http;
        this.notifierService = notifierService;
        this.responseReceived = false;
        this.isSuccess = false;
        this.searchTerm = '';
        this.keywords = [];
        this.filteredKeywords = [];
        this.showAutocomplete = false;
        this.urls = [];
        //copy link
        this.copyValue = function (url) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!navigator.clipboard) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(url)];
                    case 1:
                        _a.sent();
                        alert('Link copied to clipboard');
                        return [3 /*break*/, 3];
                    case 2:
                        alert('Clipboard API not supported');
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        alert('Failed to copy: ' + err_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.notifier = notifierService;
        this.http.get('/api/Hyperlink/GetKeywords')
            .subscribe(function (data) {
            _this.keywords = data;
        });
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        // Fetch keywords from backend
    };
    SearchBarComponent.prototype.onSearchInputChange = function () {
        var _this = this;
        this.showAutocomplete = this.searchTerm.length > 0;
        this.filteredKeywords = this.keywords.filter(function (keyword) {
            return keyword.toLowerCase().includes(_this.searchTerm.toLowerCase());
        });
    };
    SearchBarComponent.prototype.onKeywordSelected = function (keyword) {
        this.searchTerm = keyword;
        this.showAutocomplete = false;
        // Do something with the selected keyword, like search or perform an action
    };
    SearchBarComponent.prototype.getLink = function () {
        var _this = this;
        this.responseReceived = false;
        this.isSuccess = false;
        // Assuming you want to send the searchTerm to the API controller
        //const dataToSend =this.searchTerm;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        // Assuming your API endpoint is '/api/getLink' , { headers: headers }
        this.http.post('/api/Hyperlink/GetLinks', JSON.stringify(this.searchTerm), { headers: headers }).subscribe(function (response) { return _this.success(response); }, function (error) { return _this.handleError(error); });
    };
    SearchBarComponent.prototype.success = function (response) {
        if (response.length <= 0) {
            alert("No Links Found with given keywords");
            this.searchTerm = "";
        }
        this.urls = response;
    };
    SearchBarComponent.prototype.handleError = function (error) {
        this.notifier.notify('error', 'Failed');
        console.error('Error Response:', error);
    };
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/search-bar/search-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"Enter keywords\" matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"keyword\" (input)=\"onInputChange($event)\">\n<mat-autocomplete #auto=\"matAutocomplete\">\n  <mat-option *ngFor=\"let suggestion of filteredSuggestions\" [value]=\"suggestion\">\n    {{ suggestion }}\n  </mat-option>\n</mat-autocomplete>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(dataService) {
        this.dataService = dataService;
        this.keyword = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.suggestions = [];
        this.filteredSuggestions = [];
        this.keywordInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keywordInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (keyword) { return console.log('Keyword input:', keyword); }), // Log the keyword input
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (keyword) { return _this.dataService.getSuggestions(keyword); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { return console.log('Response from backend:', response); }) // Logging the response
        ).subscribe(function (suggestions) {
            _this.suggestions = suggestions;
            _this.filteredSuggestions = _this.suggestions.slice();
        });
        // Log a message to indicate that the HTTP GET call is being made
        console.log('HTTP GET call initiated');
    };
    SearchComponent.prototype.onInputChange = function (event) {
        var keyword = event.target.value.trim();
        this.keywordInput$.next(keyword);
    };
    SearchComponent.prototype.onSelectKeyword = function (keyword) {
        this.keyword.setValue(keyword);
        this.keywordInput$.next(keyword);
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], SearchComponent);
    return SearchComponent;
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

module.exports = __webpack_require__(/*! G:\InternTask\QuestPondInventoryManagement\Inventory App\INVENTORY\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map