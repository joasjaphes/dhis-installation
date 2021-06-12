(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-shops-hardware-shops-hardware-module"],{

/***/ "CHBc":
/*!*****************************************************************!*\
  !*** ./src/app/modules/shops-hardware/shops/shops.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsComponent", function() { return ShopsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/top/top.component */ "7djI");


class ShopsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShopsComponent.ɵfac = function ShopsComponent_Factory(t) { return new (t || ShopsComponent)(); };
ShopsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopsComponent, selectors: [["app-shops"]], decls: 1, vars: 2, consts: [[3, "title", "icon"]], template: function ShopsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-banner", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Shops & Hardware")("icon", "shop.png");
    } }, directives: [_shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_1__["TopComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "fyZ0":
/*!*****************************************************************!*\
  !*** ./src/app/modules/shops-hardware/shops-hardware.module.ts ***!
  \*****************************************************************/
/*! exports provided: ShopsHardwareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsHardwareModule", function() { return ShopsHardwareModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shops_shops_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shops/shops.component */ "CHBc");
/* harmony import */ var _shops_hardware_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shops-hardware.routing */ "teik");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ShopsHardwareModule {
}
ShopsHardwareModule.ɵfac = function ShopsHardwareModule_Factory(t) { return new (t || ShopsHardwareModule)(); };
ShopsHardwareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ShopsHardwareModule });
ShopsHardwareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shops_hardware_routing__WEBPACK_IMPORTED_MODULE_2__["ShopsHardwareRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ShopsHardwareModule, { declarations: [_shops_shops_component__WEBPACK_IMPORTED_MODULE_1__["ShopsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shops_hardware_routing__WEBPACK_IMPORTED_MODULE_2__["ShopsHardwareRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_shops_shops_component__WEBPACK_IMPORTED_MODULE_1__["ShopsComponent"]] }); })();


/***/ }),

/***/ "teik":
/*!******************************************************************!*\
  !*** ./src/app/modules/shops-hardware/shops-hardware.routing.ts ***!
  \******************************************************************/
/*! exports provided: ShopsHardwareRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopsHardwareRoutingModule", function() { return ShopsHardwareRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shops_shops_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shops/shops.component */ "CHBc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import { ActionPlansComponent } from './action-plans.component';
const routes = [
    {
        path: '',
        component: _shops_shops_component__WEBPACK_IMPORTED_MODULE_1__["ShopsComponent"],
        pathMatch: 'full',
        data: {
            title: 'Shops & hardware',
        },
    },
];
class ShopsHardwareRoutingModule {
}
ShopsHardwareRoutingModule.ɵfac = function ShopsHardwareRoutingModule_Factory(t) { return new (t || ShopsHardwareRoutingModule)(); };
ShopsHardwareRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ShopsHardwareRoutingModule });
ShopsHardwareRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShopsHardwareRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-shops-hardware-shops-hardware-module.js.map