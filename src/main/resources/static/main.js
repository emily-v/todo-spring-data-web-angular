(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./todos/todos-routing.module": [
		"./src/app/todos/todos-routing.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-title [title]=\"appTitle\"></app-title>\r\n<router-outlet></router-outlet>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.appTitle = 'Welcome to Angular Todos';
    }
    // number = 4;
    // bool = true;
    // person = {
    //   name: 'August',
    //   age: 35
    // };
    AppComponent.prototype.ngOnInit = function () {
        // setInterval(() => this.bool = !this.bool, 2000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/title/title.component */ "./src/app/components/title/title.component.ts");
/* harmony import */ var _todos_todos_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos/todos.module */ "./src/app/todos/todos.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        loadChildren: './todos/todos-routing.module#TodosRoutingModule'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _todos_todos_module__WEBPACK_IMPORTED_MODULE_5__["TodosModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/title/title.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/title/title.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/title/title.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/title/title.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>"

/***/ }),

/***/ "./src/app/components/title/title.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
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

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TitleComponent.prototype, "title", void 0);
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/components/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.css */ "./src/app/components/title/title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/todos/components/todo-detail/todo-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/todos/components/todo-detail/todo-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todos/components/todo-detail/todo-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/todos/components/todo-detail/todo-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo-item [todoItem]=\"todoItem\"></app-todo-item>\n"

/***/ }),

/***/ "./src/app/todos/components/todo-detail/todo-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/todos/components/todo-detail/todo-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(route) {
        this.route = route;
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        // @ts-ignore
        this.todoItem = this.route.data.value.todo;
    };
    TodoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-detail',
            template: __webpack_require__(/*! ./todo-detail.component.html */ "./src/app/todos/components/todo-detail/todo-detail.component.html"),
            styles: [__webpack_require__(/*! ./todo-detail.component.css */ "./src/app/todos/components/todo-detail/todo-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());



/***/ }),

/***/ "./src/app/todos/components/todo-edit/todo-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/todos/components/todo-edit/todo-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"checkbox\"] {\r\n    width: 1.7em;\r\n    height: 1.7em;\r\n    vertical-align: middle;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    font-size: 2em;\r\n    width: 99.1%\r\n}\r\n\r\ninput[type=\"text\"]:focus {\r\n    box-shadow: 0 0 5px rgba(81, 203, 238, 1);\r\n    border: 1px solid rgba(81, 203, 238, 1);\r\n}"

/***/ }),

/***/ "./src/app/todos/components/todo-edit/todo-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/todos/components/todo-edit/todo-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #input [type]=\"type\" name=\"todo-edit\" id=\"todo-edit\"\n  [value]=\"type === 'text' ? dummy[prop] : null\"\n  (keyup)=\"type === 'text' ? handleInput($event) : null\"\n  (change)=\"type === 'checkbox' ? handleChange($event) : null\"\n  [checked]=\"type === 'checkbox' ? dummy[prop] : false\">\n"

/***/ }),

/***/ "./src/app/todos/components/todo-edit/todo-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/todos/components/todo-edit/todo-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEditComponent", function() { return TodoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/todo */ "./src/app/todos/model/todo.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoEditComponent = /** @class */ (function () {
    function TodoEditComponent() {
        this.editEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TodoEditComponent.prototype.ngOnInit = function () {
        this.dummy = __assign({}, this.editItem);
        this.inputRef.nativeElement.focus();
    };
    TodoEditComponent.prototype.handleInput = function (evt) {
        if (evt.keyCode === 27) {
            this.editEvent.emit({ value: null, update: false, prop: null });
        }
        else if (evt.keyCode === 13) {
            this.editEvent.emit({ value: evt.target.value, update: true, prop: this.prop });
        }
    };
    TodoEditComponent.prototype.handleChange = function (evt) {
        this.editEvent.emit({ value: evt.target.checked, update: true, prop: this.prop });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"])
    ], TodoEditComponent.prototype, "editItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TodoEditComponent.prototype, "prop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TodoEditComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TodoEditComponent.prototype, "editEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TodoEditComponent.prototype, "inputRef", void 0);
    TodoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-edit',
            template: __webpack_require__(/*! ./todo-edit.component.html */ "./src/app/todos/components/todo-edit/todo-edit.component.html"),
            styles: [__webpack_require__(/*! ./todo-edit.component.css */ "./src/app/todos/components/todo-edit/todo-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoEditComponent);
    return TodoEditComponent;
}());



/***/ }),

/***/ "./src/app/todos/components/todo-item/todo-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/todos/components/todo-item/todo-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".done {\r\n    background: linear-gradient(to right, rgba(255, 100, 100) 50%, rgba(100, 255, 100) 50%);\r\n    -webkit-animation: d .5s ease-out;\r\n            animation: d .5s ease-out;\r\n    background-position: right bottom;\r\n}\r\n\r\n.not-done {\r\n    background: linear-gradient(to right, rgba(255, 100, 100) 50%, rgba(100, 255, 100) 50%);\r\n    -webkit-animation: nd .5s ease-out;\r\n            animation: nd .5s ease-out;\r\n    background-position: left bottom;\r\n}\r\n\r\n@-webkit-keyframes nd {\r\n    0%{background-position:100% 0%}\r\n    25%{background-position:75% 25%}\r\n    50%{background-position:50% 50%}\r\n    75%{background-position:25% 75%}\r\n    100%{background-position:0% 100%}\r\n}\r\n\r\n@keyframes nd {\r\n    0%{background-position:100% 0%}\r\n    25%{background-position:75% 25%}\r\n    50%{background-position:50% 50%}\r\n    75%{background-position:25% 75%}\r\n    100%{background-position:0% 100%}\r\n}\r\n\r\n@-webkit-keyframes d {\r\n    0%{background-position:0% 100%}\r\n    25%{background-position:25% 75%}\r\n    50%{background-position:50% 50%}\r\n    75%{background-position:75% 25%}\r\n    100%{background-position:100% 0%}\r\n}\r\n\r\n@keyframes d {\r\n    0%{background-position:0% 100%}\r\n    25%{background-position:25% 75%}\r\n    50%{background-position:50% 50%}\r\n    75%{background-position:75% 25%}\r\n    100%{background-position:100% 0%}\r\n}\r\n\r\n.item-controls {\r\n    display: inline-block;\r\n    width: 20%;\r\n    text-align: right;\r\n}\r\n\r\n.list-item {\r\n    padding: 2em;\r\n    background-size: 200% 100%;\r\n}\r\n\r\n.list-item:hover {\r\n    position: relative;\r\n    left: 10px;\r\n    box-shadow: -10px 0 20px 2px #777;\r\n}\r\n\r\n.list-item .text {\r\n    width: 80%;\r\n    display: inline-block;\r\n}\r\n\r\n.list-item label {\r\n    font-size: 1.75em;\r\n}"

/***/ }),

/***/ "./src/app/todos/components/todo-item/todo-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/todos/components/todo-item/todo-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"list-item\"\n  [ngClass]=\"{ 'not-done': !todoItem.complete, 'done': todoItem.complete }\">\n  <div class=\"text\">\n      <label \n      (click)=\"beginEdit()\"\n      *ngIf=\"!isEditing\">{{ todoItem.title }}</label>\n    <app-todo-edit \n    *ngIf=\"isEditing\"\n    [type]=\"'text'\" \n    [editItem]=\"todoItem\" \n    [prop]=\"'title'\"\n    (editEvent)=\"endEdit($event)\"></app-todo-edit>\n  </div>\n  <div class=\"item-controls\">\n    <a [routerLink]=\"todoItem.id\">View</a>\n    <app-todo-edit \n      [type]=\"'checkbox'\" \n      [editItem]=\"todoItem\" \n      [prop]=\"'complete'\" \n      (editEvent)=\"endEdit($event)\"></app-todo-edit>\n    <button class=\"btn-danger\" (click)=\"deleteClick($event)\">X</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/todos/components/todo-item/todo-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/todos/components/todo-item/todo-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/todo */ "./src/app/todos/model/todo.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent() {
        this.itemEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isEditing = false;
    }
    TodoItemComponent.prototype.ngOnInit = function () {
        this.todoItem = __assign({}, this.todoItem);
    };
    TodoItemComponent.prototype.beginEdit = function () {
        this.isEditing = true;
    };
    TodoItemComponent.prototype.endEdit = function (evt) {
        this.isEditing = false;
        if (!evt.update) {
            return;
        }
        this.todoItem[evt.prop] = evt.value;
        this.itemEdit.emit(this.todoItem);
    };
    TodoItemComponent.prototype.deleteClick = function () {
        this.deleteItem.emit(this.todoItem);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"])
    ], TodoItemComponent.prototype, "todoItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TodoItemComponent.prototype, "itemEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TodoItemComponent.prototype, "deleteItem", void 0);
    TodoItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/todos/components/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/todos/components/todo-item/todo-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/todos/components/todo-list/todo-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/todos/components/todo-list/todo-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.list-container {\r\n    margin: 0 auto;\r\n    width: 50%;\r\n}"

/***/ }),

/***/ "./src/app/todos/components/todo-list/todo-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/todos/components/todo-list/todo-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"list-container\">\n    <app-todo-edit \n      [type]=\"'text'\" \n      (editEvent)=\"handleNew($event)\" \n      [editItem]=\"temp\" \n      [prop]=\"'title'\"></app-todo-edit>\n    <app-todo-item\n      *ngFor=\"let todo of todos\"\n      [todoItem]=\"todo\"\n      (itemEdit)=\"handleEdit($event)\"\n      (deleteItem)=\"handleDelete($event)\"></app-todo-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/todos/components/todo-list/todo-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/todos/components/todo-list/todo-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/todo */ "./src/app/todos/model/todo.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/todo.service */ "./src/app/todos/services/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoService, http) {
        this.todoService = todoService;
        this.http = http;
        this.todos = [];
        this.temp = new _model_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"](null, '', false);
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.todos.push({id: 1, title: 'Get a bigger a boat', complete: false});
        // this.todos.push({id: 2, title: 'Make people afraid to swim in the ocean', complete: true});
        // this.todos.push({title: 'Get TNT', id: 3, complete: false});
        // this.todos.push(new Todo(4, 'Hire Val Kilmer', true));
        this.todoService.getAll()
            .subscribe(function (todos) { return _this.todos = todos; }, function (err) { return console.log(err); });
    };
    TodoListComponent.prototype.handleEdit = function (evt) {
        var index = this.todos.findIndex(function (t) { return t.id === evt.id; });
        if (index >= 0) {
            this.todos[index] = evt;
        }
    };
    TodoListComponent.prototype.handleDelete = function (evt) {
        var index = this.todos.findIndex(function (t) { return t.id === evt.id; });
        if (index >= 0) {
            var todo = this.todos[index];
            //   this.http.delete(`http://localhost:3000/todos/${todo.id}`)
            //     .subscribe(
            //       () => this.todos.splice(index, 1), 
            //       err => console.log(err));
        }
    };
    TodoListComponent.prototype.handleNew = function (evt) {
        var _this = this;
        if (evt.update) {
            this.temp.title = evt.value;
            this.http.post('http://localhost:8080/todos/todos', JSON.stringify(this.temp), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .subscribe(function (todo) {
                _this.todos.push(todo);
                _this.temp = new _model_todo__WEBPACK_IMPORTED_MODULE_1__["Todo"](null, '', false);
            }, function (err) { return console.log(err); });
        }
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todos/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todos/components/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todos/model/todo.ts":
/*!*************************************!*\
  !*** ./src/app/todos/model/todo.ts ***!
  \*************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(id, title, complete) {
        this.id = id;
        this.title = title;
        this.complete = complete;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/todos/services/todo-detail.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/todos/services/todo-detail.resolver.ts ***!
  \********************************************************/
/*! exports provided: TodoDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailResolver", function() { return TodoDetailResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.service */ "./src/app/todos/services/todo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var TodoDetailResolver = /** @class */ (function () {
    function TodoDetailResolver(todoService) {
        this.todoService = todoService;
    }
    TodoDetailResolver.prototype.resolve = function (route) {
        return __awaiter(this, void 0, void 0, function () {
            var t, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = null;
                        id = +route.paramMap.get('id');
                        return [4 /*yield*/, this.todoService.getById(id).toPromise().then(function (td) { return t = td; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, t];
                }
            });
        });
    };
    TodoDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], TodoDetailResolver);
    return TodoDetailResolver;
}());



/***/ }),

/***/ "./src/app/todos/services/todo.service.ts":
/*!************************************************!*\
  !*** ./src/app/todos/services/todo.service.ts ***!
  \************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.getAll = function () {
        return this.http.get('http://localhost:8080/api/todos');
    };
    TodoService.prototype.getById = function (id) {
        return this.http.get("http://localhost:8080/api/todos/todo?id=" + id);
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/app/todos/todos-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/todos/todos-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TodosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosRoutingModule", function() { return TodosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/todos/components/todo-list/todo-list.component.ts");
/* harmony import */ var _components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo-detail/todo-detail.component */ "./src/app/todos/components/todo-detail/todo-detail.component.ts");
/* harmony import */ var _services_todo_detail_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/todo-detail.resolver */ "./src/app/todos/services/todo-detail.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'todos',
        component: _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"]
    },
    {
        path: 'todos/:id',
        component: _components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_4__["TodoDetailComponent"],
        resolve: { todo: _services_todo_detail_resolver__WEBPACK_IMPORTED_MODULE_5__["TodoDetailResolver"] }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/todos'
    }
];
var TodosRoutingModule = /** @class */ (function () {
    function TodosRoutingModule() {
    }
    TodosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TodosRoutingModule);
    return TodosRoutingModule;
}());



/***/ }),

/***/ "./src/app/todos/todos.module.ts":
/*!***************************************!*\
  !*** ./src/app/todos/todos.module.ts ***!
  \***************************************/
/*! exports provided: TodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosModule", function() { return TodosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/todos/components/todo-list/todo-list.component.ts");
/* harmony import */ var _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo-item/todo-item.component */ "./src/app/todos/components/todo-item/todo-item.component.ts");
/* harmony import */ var _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todo-edit/todo-edit.component */ "./src/app/todos/components/todo-edit/todo-edit.component.ts");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/todo.service */ "./src/app/todos/services/todo.service.ts");
/* harmony import */ var _todos_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos-routing.module */ "./src/app/todos/todos-routing.module.ts");
/* harmony import */ var _components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo-detail/todo-detail.component */ "./src/app/todos/components/todo-detail/todo-detail.component.ts");
/* harmony import */ var _services_todo_detail_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/todo-detail.resolver */ "./src/app/todos/services/todo-detail.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TodosModule = /** @class */ (function () {
    function TodosModule() {
    }
    TodosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _todos_routing_module__WEBPACK_IMPORTED_MODULE_6__["TodosRoutingModule"]
            ],
            declarations: [_components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"], _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__["TodoItemComponent"], _components_todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_4__["TodoEditComponent"], _components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_7__["TodoDetailComponent"]],
            providers: [_services_todo_service__WEBPACK_IMPORTED_MODULE_5__["TodoService"], _services_todo_detail_resolver__WEBPACK_IMPORTED_MODULE_8__["TodoDetailResolver"]],
            exports: [_components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]]
        })
    ], TodosModule);
    return TodosModule;
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
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! D:\my_git_repos\spark_nov27_usf\Week8_Spring\web-demo\angular-todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map