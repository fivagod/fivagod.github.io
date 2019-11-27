(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/algorithm-handler/algorithm-handler.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/algorithm-handler/algorithm-handler.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alg-description\">\n    <ng-template alg-host></ng-template>\n    <div class=\"alg-action\">\n        <button (click)=\"Process()\">Process</button>\n        <div *ngIf=\"result\"><div>{{result}}</div><div>{{time}}s</div></div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-algorithm-handler strategy=\"simple\"></app-algorithm-handler>\n<app-algorithm-handler strategy=\"slice\"></app-algorithm-handler>\n<app-algorithm-handler strategy=\"lazy\"></app-algorithm-handler>\n<app-algorithm-handler strategy=\"bigdata\"></app-algorithm-handler>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bigdata-median/bigdata-median.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bigdata-median/bigdata-median.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>Divide and conquer in Median's world (<a href=\"https://brilliant.org/wiki/median-finding-algorithm/\">Median of medians</a>, calculate big data without sorting)</h4>\nThis algorithm based on quick search of Kth element in array. <br />\nNow implemented just a case when array has odd length. <br />\nFor an even lenght we have 2 way:\n<ol>\n<li>dummy way - is find 2 values - length/2 and length/2 - 1, like we do it in simple algorithm. But we should make 2 different searches</li>\n<li>smart way - is always finding closest neihbours for out pivot.</li>\n</ol>\nPossible, in future, i'll implement second way.<br />\nBTW, checking different data, i've found that array.sort (which we use for simple methods) works wrong for arrays with length > 1 milion. i don't know why. But this method (median of medians) has the advantage only when array.length is over 1 million :)");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lazy-median/lazy-median.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lazy-median/lazy-median.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>Dummy trick, if you've confused with array.length calculation. But very sloooow, don't do it in real life</h4>\n<ngx-prism language=\"javascript\">\n    <pre>\n      let array = [1, 23, 14, 432, 34];\n      let arrayCopy = [...array]\n      arrayCopy.sort((a, b) => a - b)\n      while(arrayCopy.length > 2) {{'{'}}\n        arrayCopy.shift()\n        arrayCopy.pop()\n      }\n      let median = (arrayCopy[0] + (arrayCopy[1] || 0)) / arrayCopy.length\n    </pre>\n  </ngx-prism>\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/simple-median/simple-median.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/simple-median/simple-median.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>This is simple median calculation</h4>\n<ngx-prism language=\"javascript\">\n  <pre>\n    let array = [1, 23, 14, 432, 34];\n    array.sort((a, b) => a - b);\n    let median = array.length % 2 === 0 \n      ? (array[array.length/2 - 1] + array[array.length/2]) / 2  \n      : array[Math.floor(array.length/2)]\n  </pre>\n</ngx-prism>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slice-median/slice-median.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slice-median/slice-median.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>Also we can calculate median by splice (it modifies source array, so you should copy it, if want save)</h4>\n<ngx-prism language=\"javascript\">\n  <pre>\n    let array = [...[1, 23, 14, 432, 34]]\n    array.sort((a, b) => a - b)\n    let splice = array.splice(Math.ceil(array.length/2) - 1, 2 - (array.length % 2))\n    let median = (splice[0] + (splice[1] || 0)) / splice.length\n  </pre>\n</ngx-prism>\n  \n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/algorithm-handler/algorithm-handler.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/algorithm-handler/algorithm-handler.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".alg-description {margin-right: 200px;position: relative;} \r\n.alg-action {position: absolute; top: 30px; right: -210px; width: 200px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtLWhhbmRsZXIvYWxnb3JpdGhtLWhhbmRsZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7QUFDekQsYUFBYSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS1oYW5kbGVyL2FsZ29yaXRobS1oYW5kbGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxnLWRlc2NyaXB0aW9uIHttYXJnaW4tcmlnaHQ6IDIwMHB4O3Bvc2l0aW9uOiByZWxhdGl2ZTt9IFxyXG4uYWxnLWFjdGlvbiB7cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDMwcHg7IHJpZ2h0OiAtMjEwcHg7IHdpZHRoOiAyMDBweDt9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/algorithm-handler/algorithm-handler.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/algorithm-handler/algorithm-handler.component.ts ***!
          \******************************************************************/
        /*! exports provided: AlgorithmHandlerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmHandlerComponent", function () { return AlgorithmHandlerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _simple_median_simple_median_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../simple-median/simple-median.component */ "./src/app/simple-median/simple-median.component.ts");
            /* harmony import */ var _slice_median_slice_median_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slice-median/slice-median.component */ "./src/app/slice-median/slice-median.component.ts");
            /* harmony import */ var _lazy_median_lazy_median_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lazy-median/lazy-median.component */ "./src/app/lazy-median/lazy-median.component.ts");
            /* harmony import */ var _bigdata_median_bigdata_median_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bigdata-median/bigdata-median.component */ "./src/app/bigdata-median/bigdata-median.component.ts");
            /* harmony import */ var _algorithm_handler_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./algorithm-handler.directive */ "./src/app/algorithm-handler/algorithm-handler.directive.ts");
            /* harmony import */ var _array_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../array-handler.service */ "./src/app/array-handler.service.ts");
            var componentMap = {
                simple: _simple_median_simple_median_component__WEBPACK_IMPORTED_MODULE_2__["SimpleMedianComponent"],
                slice: _slice_median_slice_median_component__WEBPACK_IMPORTED_MODULE_3__["SliceMedianComponent"],
                bigdata: _bigdata_median_bigdata_median_component__WEBPACK_IMPORTED_MODULE_5__["BigdataMedianComponent"],
                lazy: _lazy_median_lazy_median_component__WEBPACK_IMPORTED_MODULE_4__["LazyMedianComponent"]
            };
            var AlgorithmHandlerComponent = /** @class */ (function () {
                function AlgorithmHandlerComponent(componentFactoryResolver, arrayHandler) {
                    this.componentFactoryResolver = componentFactoryResolver;
                    this.arrayHandler = arrayHandler;
                }
                AlgorithmHandlerComponent.prototype.ngOnInit = function () {
                    this.loadComponent();
                };
                AlgorithmHandlerComponent.prototype.loadComponent = function () {
                    var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentMap[this.strategy]);
                    var viewContainerRef = this.algHost.viewContainerRef;
                    viewContainerRef.clear();
                    var componentRef = viewContainerRef.createComponent(componentFactory);
                };
                // Main processor
                AlgorithmHandlerComponent.prototype.Process = function () {
                    var _this = this;
                    var startTime = performance.now();
                    this.arrayHandler.processStrategy(this.strategy).subscribe(function (value) {
                        _this.result = value;
                        _this.time = ((performance.now() - startTime) / 1000).toFixed(2);
                    });
                };
                return AlgorithmHandlerComponent;
            }());
            AlgorithmHandlerComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
                { type: _array_handler_service__WEBPACK_IMPORTED_MODULE_7__["ArrayHandlerService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AlgorithmHandlerComponent.prototype, "strategy", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_algorithm_handler_directive__WEBPACK_IMPORTED_MODULE_6__["AlgDirective"], { static: true })
            ], AlgorithmHandlerComponent.prototype, "algHost", void 0);
            AlgorithmHandlerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-algorithm-handler',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./algorithm-handler.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/algorithm-handler/algorithm-handler.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./algorithm-handler.component.css */ "./src/app/algorithm-handler/algorithm-handler.component.css")).default]
                })
            ], AlgorithmHandlerComponent);
            /***/ 
        }),
        /***/ "./src/app/algorithm-handler/algorithm-handler.directive.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/algorithm-handler/algorithm-handler.directive.ts ***!
          \******************************************************************/
        /*! exports provided: AlgDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgDirective", function () { return AlgDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AlgDirective = /** @class */ (function () {
                function AlgDirective(viewContainerRef) {
                    this.viewContainerRef = viewContainerRef;
                }
                return AlgDirective;
            }());
            AlgDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
            ]; };
            AlgDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[alg-host]',
                })
            ], AlgDirective);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'median';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_prism_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-prism/core */ "./node_modules/@ngx-prism/core/dist/index.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _simple_median_simple_median_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-median/simple-median.component */ "./src/app/simple-median/simple-median.component.ts");
            /* harmony import */ var _slice_median_slice_median_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slice-median/slice-median.component */ "./src/app/slice-median/slice-median.component.ts");
            /* harmony import */ var _bigdata_median_bigdata_median_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bigdata-median/bigdata-median.component */ "./src/app/bigdata-median/bigdata-median.component.ts");
            /* harmony import */ var _lazy_median_lazy_median_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lazy-median/lazy-median.component */ "./src/app/lazy-median/lazy-median.component.ts");
            /* harmony import */ var _algorithm_handler_algorithm_handler_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./algorithm-handler/algorithm-handler.component */ "./src/app/algorithm-handler/algorithm-handler.component.ts");
            /* harmony import */ var _algorithm_handler_algorithm_handler_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./algorithm-handler/algorithm-handler.directive */ "./src/app/algorithm-handler/algorithm-handler.directive.ts");
            /* harmony import */ var _array_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array-handler.service */ "./src/app/array-handler.service.ts");
            // <----- Here
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _simple_median_simple_median_component__WEBPACK_IMPORTED_MODULE_5__["SimpleMedianComponent"],
                        _slice_median_slice_median_component__WEBPACK_IMPORTED_MODULE_6__["SliceMedianComponent"],
                        _lazy_median_lazy_median_component__WEBPACK_IMPORTED_MODULE_8__["LazyMedianComponent"],
                        _bigdata_median_bigdata_median_component__WEBPACK_IMPORTED_MODULE_7__["BigdataMedianComponent"],
                        _algorithm_handler_algorithm_handler_component__WEBPACK_IMPORTED_MODULE_9__["AlgorithmHandlerComponent"],
                        _algorithm_handler_algorithm_handler_directive__WEBPACK_IMPORTED_MODULE_10__["AlgDirective"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _ngx_prism_core__WEBPACK_IMPORTED_MODULE_3__["PrismModule"]
                    ],
                    providers: [_array_handler_service__WEBPACK_IMPORTED_MODULE_11__["ArrayHandlerService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                    entryComponents: [
                        _simple_median_simple_median_component__WEBPACK_IMPORTED_MODULE_5__["SimpleMedianComponent"],
                        _slice_median_slice_median_component__WEBPACK_IMPORTED_MODULE_6__["SliceMedianComponent"],
                        _lazy_median_lazy_median_component__WEBPACK_IMPORTED_MODULE_8__["LazyMedianComponent"],
                        _bigdata_median_bigdata_median_component__WEBPACK_IMPORTED_MODULE_7__["BigdataMedianComponent"]
                    ]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/array-handler.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/array-handler.service.ts ***!
          \******************************************/
        /*! exports provided: ArrayHandlerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayHandlerService", function () { return ArrayHandlerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _shared_utils_medianOfMedians2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/utils/medianOfMedians2 */ "./src/app/shared/utils/medianOfMedians2.ts");
            // import {MedianOfMedians} from './shared/utils/medianOfMedians';
            var decoder = new TextDecoder('utf-8');
            var ArrayHandlerService = /** @class */ (function () {
                function ArrayHandlerService() {
                    this.observers = {};
                }
                ArrayHandlerService.prototype.processStrategy = function (strategy) {
                    if (strategy === 'bigdata') {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(_shared_utils_medianOfMedians2__WEBPACK_IMPORTED_MODULE_4__["default"])(this.handle(strategy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (a) { return (Array.isArray(a)) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(a) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(a); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (a) { return typeof (a === 'string') ? parseInt(a, 10) : a; }))).then(function (a) { return a; }));
                    }
                    var modifiers = this.getModifiers(strategy);
                    return modifiers.reduce(function (ob, op) { return ob.pipe(op); }, this.handle(strategy));
                };
                ArrayHandlerService.prototype.handle = function (strategy) {
                    var _this = this;
                    // create observer which will emit all data
                    this.observers[strategy] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                    // we use fetch instead of common/http because fetch can return readable stream, is very useful for huge data
                    fetch('/assets/array.txt')
                        .then(function (response) { return response.body.getReader(); })
                        .then(function (reader) {
                        _this.readData(strategy, reader);
                    });
                    return this.observers[strategy];
                };
                ArrayHandlerService.prototype.readData = function (strategy, reader, tail) {
                    var _this = this;
                    if (tail === void 0) { tail = ''; }
                    reader.read().then(function (_a) {
                        var done = _a.done, value = _a.value;
                        // read data by chunks and remember tail
                        var valueStr = (!value ? tail : (tail + decoder.decode(value))).split(/[\r\n]+/);
                        if (!done || (done && valueStr.length === 1 && valueStr[0] === '')) {
                            tail = valueStr.pop();
                        }
                        _this.observers[strategy].next(valueStr);
                        if (!done) {
                            _this.readData(strategy, reader, tail);
                        }
                        else {
                            _this.observers[strategy].complete();
                        }
                    });
                };
                ArrayHandlerService.prototype.getModifiers = function (strategy) {
                    var ret = [
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])(),
                        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (val) { return Array.isArray(val) && val.reduce(function (acc, cur) { return acc.concat(cur.slice()); }, []).map(function (a) { return parseInt(a, 10); }); })
                    ];
                    // algoritm handlers
                    switch (strategy) {
                        case 'simple':
                            ret.push(
                            // main function
                            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) {
                                if (Array.isArray(arr)) {
                                    arr.sort(function (a, b) { return a - b; });
                                    var median = arr.length % 2 === 0
                                        ? (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
                                        : arr[Math.floor(arr.length / 2)];
                                    return median;
                                }
                            }));
                            break;
                        case 'slice':
                            ret.push(
                            // main function
                            // tap(val => console.log(val)),
                            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) {
                                if (Array.isArray(arr)) {
                                    arr.sort(function (a, b) { return a - b; });
                                    var splice = arr.splice(Math.ceil(arr.length / 2) - 1, 2 - (arr.length % 2));
                                    var median = (splice[0] + (splice[1] || 0)) / splice.length;
                                    return median;
                                }
                            }));
                            break;
                        case 'lazy':
                            ret.push(
                            // main function
                            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) {
                                if (Array.isArray(arr)) {
                                    arr.sort(function (a, b) { return a - b; });
                                    while (arr.length > 2) {
                                        arr.shift();
                                        arr.pop();
                                    }
                                    var median = (arr[0] + (arr[1] || 0)) / arr.length;
                                    return median;
                                }
                            }));
                            break;
                    }
                    return ret;
                };
                return ArrayHandlerService;
            }());
            ArrayHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ArrayHandlerService);
            /***/ 
        }),
        /***/ "./src/app/bigdata-median/bigdata-median.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/bigdata-median/bigdata-median.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpZ2RhdGEtbWVkaWFuL2JpZ2RhdGEtbWVkaWFuLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/bigdata-median/bigdata-median.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/bigdata-median/bigdata-median.component.ts ***!
          \************************************************************/
        /*! exports provided: BigdataMedianComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigdataMedianComponent", function () { return BigdataMedianComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BigdataMedianComponent = /** @class */ (function () {
                function BigdataMedianComponent() {
                }
                return BigdataMedianComponent;
            }());
            BigdataMedianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bigdata-median',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bigdata-median.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bigdata-median/bigdata-median.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bigdata-median.component.css */ "./src/app/bigdata-median/bigdata-median.component.css")).default]
                })
            ], BigdataMedianComponent);
            /***/ 
        }),
        /***/ "./src/app/lazy-median/lazy-median.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/lazy-median/lazy-median.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenktbWVkaWFuL2xhenktbWVkaWFuLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/lazy-median/lazy-median.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/lazy-median/lazy-median.component.ts ***!
          \******************************************************/
        /*! exports provided: LazyMedianComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMedianComponent", function () { return LazyMedianComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LazyMedianComponent = /** @class */ (function () {
                function LazyMedianComponent() {
                }
                return LazyMedianComponent;
            }());
            LazyMedianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-lazy-median',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lazy-median.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lazy-median/lazy-median.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lazy-median.component.css */ "./src/app/lazy-median/lazy-median.component.css")).default]
                })
            ], LazyMedianComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/utils/medianOfMedians2.ts": 
        /*!**************************************************!*\
          !*** ./src/app/shared/utils/medianOfMedians2.ts ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getMedianOfMedians; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            // now works only with arrays which have odd length
            // implemented as recursive function from here
            // https://brilliant.org/wiki/median-finding-algorithm/
            // mixed promises with rx.js, if you can avoid promise - please call me :)
            function getMedianOfMedians(sequence$, position) {
                return new Promise(function (resolve, reject) {
                    var left = [];
                    var right = [];
                    var medians = [];
                    var medSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
                    var medians$ = medSubj.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (a) { return medians.push(a); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["last"])());
                    var sourceObs = sequence$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferCount"])(5), 
                    // tap(a => console.log(a)),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (a) {
                        if (Array.isArray(a)) {
                            a.sort();
                            medSubj.next(a[Math.floor(a.length / 2)]);
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(a);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferWhen"])(function () { return medians$; }));
                    sourceObs.subscribe(function (numbers) {
                        // console.log(numbers.length)
                        position = typeof position === 'undefined' ? Math.floor(numbers.length / 2) : position;
                        // console.log(position);
                        if (numbers.length <= 5) {
                            numbers.sort(function (a, b) { return a - b; });
                            resolve(numbers[position]);
                            return;
                        }
                        // can use recursion here too in future
                        medians.sort(function (a, b) { return a - b; });
                        var pivot = medians[Math.floor(medians.length / 2)];
                        var bPivotSelf = false;
                        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
                            var num = numbers_1[_i];
                            if (num < pivot || (bPivotSelf && num === pivot)) {
                                left.push(num);
                            }
                            else if (num > pivot) {
                                right.push(num);
                            }
                            else {
                                // if we don't have distinct values - we should skip just first pivot
                                bPivotSelf = true;
                            }
                        }
                        var k = left.length;
                        // console.log(pivot, left, right);
                        if (position < k) {
                            getMedianOfMedians(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(left), position).then(function (result) { return resolve(result); });
                        }
                        else if (position > k) {
                            getMedianOfMedians(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(right), position - k - 1).then(function (result) { return resolve(result); });
                        }
                        else {
                            resolve(pivot);
                        }
                    });
                });
            }
            /***/ 
        }),
        /***/ "./src/app/simple-median/simple-median.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/simple-median/simple-median.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbXBsZS1tZWRpYW4vc2ltcGxlLW1lZGlhbi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/simple-median/simple-median.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/simple-median/simple-median.component.ts ***!
          \**********************************************************/
        /*! exports provided: SimpleMedianComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleMedianComponent", function () { return SimpleMedianComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SimpleMedianComponent = /** @class */ (function () {
                function SimpleMedianComponent() {
                }
                return SimpleMedianComponent;
            }());
            SimpleMedianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-simple-median',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./simple-median.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/simple-median/simple-median.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./simple-median.component.css */ "./src/app/simple-median/simple-median.component.css")).default]
                })
            ], SimpleMedianComponent);
            /***/ 
        }),
        /***/ "./src/app/slice-median/slice-median.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/slice-median/slice-median.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWNlLW1lZGlhbi9zbGljZS1tZWRpYW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/slice-median/slice-median.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/slice-median/slice-median.component.ts ***!
          \********************************************************/
        /*! exports provided: SliceMedianComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliceMedianComponent", function () { return SliceMedianComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SliceMedianComponent = /** @class */ (function () {
                function SliceMedianComponent() {
                }
                return SliceMedianComponent;
            }());
            SliceMedianComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-slice-median',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slice-median.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slice-median/slice-median.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slice-median.component.css */ "./src/app/slice-median/slice-median.component.css")).default]
                })
            ], SliceMedianComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! H:\www\test\median\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map