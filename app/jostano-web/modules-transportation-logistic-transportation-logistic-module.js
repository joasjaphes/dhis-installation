(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-transportation-logistic-transportation-logistic-module"],{

/***/ "0jW8":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/transportation-logistic/transportation-logistic.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TransportationLogisticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationLogisticModule", function() { return TransportationLogisticModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _transportation_transportation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transportation/transportation.component */ "GXyA");
/* harmony import */ var _transportation_logistic_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transportation-logistic.routing */ "MVsa");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TransportationLogisticModule {
}
TransportationLogisticModule.ɵfac = function TransportationLogisticModule_Factory(t) { return new (t || TransportationLogisticModule)(); };
TransportationLogisticModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TransportationLogisticModule });
TransportationLogisticModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _transportation_logistic_routing__WEBPACK_IMPORTED_MODULE_2__["TransportationLogisticRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TransportationLogisticModule, { declarations: [_transportation_transportation_component__WEBPACK_IMPORTED_MODULE_1__["TransportationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _transportation_logistic_routing__WEBPACK_IMPORTED_MODULE_2__["TransportationLogisticRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_transportation_transportation_component__WEBPACK_IMPORTED_MODULE_1__["TransportationComponent"]] }); })();


/***/ }),

/***/ "GXyA":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/transportation-logistic/transportation/transportation.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TransportationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationComponent", function() { return TransportationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/top/top.component */ "7djI");


class TransportationComponent {
    constructor() { }
    ngOnInit() {
    }
}
TransportationComponent.ɵfac = function TransportationComponent_Factory(t) { return new (t || TransportationComponent)(); };
TransportationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransportationComponent, selectors: [["app-transportation"]], decls: 1, vars: 2, consts: [[3, "title", "icon"]], template: function TransportationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-banner", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Transportation & Logistic")("icon", "public-transport.png");
    } }, directives: [_shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_1__["TopComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc3BvcnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "MVsa":
/*!************************************************************************************!*\
  !*** ./src/app/modules/transportation-logistic/transportation-logistic.routing.ts ***!
  \************************************************************************************/
/*! exports provided: TransportationLogisticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationLogisticRoutingModule", function() { return TransportationLogisticRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transportation_transportation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transportation/transportation.component */ "GXyA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import { ActionPlansComponent } from './action-plans.component';
const routes = [
    {
        path: '',
        component: _transportation_transportation_component__WEBPACK_IMPORTED_MODULE_1__["TransportationComponent"],
        pathMatch: 'full',
        data: {
            title: 'Transportation & Logistic',
        },
    },
];
class TransportationLogisticRoutingModule {
}
TransportationLogisticRoutingModule.ɵfac = function TransportationLogisticRoutingModule_Factory(t) { return new (t || TransportationLogisticRoutingModule)(); };
TransportationLogisticRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TransportationLogisticRoutingModule });
TransportationLogisticRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TransportationLogisticRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-transportation-logistic-transportation-logistic-module.js.map