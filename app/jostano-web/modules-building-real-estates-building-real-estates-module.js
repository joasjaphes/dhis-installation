(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-building-real-estates-building-real-estates-module"],{

/***/ "+M28":
/*!********************************************************************************!*\
  !*** ./src/app/modules/building-real-estates/building-real-estates.routing.ts ***!
  \********************************************************************************/
/*! exports provided: BuildingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingRoutingModule", function() { return BuildingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _build_build_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/build.component */ "BHZS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import {  } from './action-plans.component';
const routes = [
    {
        path: '',
        component: _build_build_component__WEBPACK_IMPORTED_MODULE_1__["BuildComponent"],
        pathMatch: 'full',
        data: {
            title: 'Building & real estates',
        },
    },
];
class BuildingRoutingModule {
}
BuildingRoutingModule.ɵfac = function BuildingRoutingModule_Factory(t) { return new (t || BuildingRoutingModule)(); };
BuildingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BuildingRoutingModule });
BuildingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BuildingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "BHZS":
/*!************************************************************************!*\
  !*** ./src/app/modules/building-real-estates/build/build.component.ts ***!
  \************************************************************************/
/*! exports provided: BuildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildComponent", function() { return BuildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/top/top.component */ "7djI");


class BuildComponent {
    constructor() { }
    ngOnInit() {
    }
}
BuildComponent.ɵfac = function BuildComponent_Factory(t) { return new (t || BuildComponent)(); };
BuildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuildComponent, selectors: [["app-build"]], decls: 1, vars: 2, consts: [[3, "title", "icon"]], template: function BuildComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-banner", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Building & Real Estates")("icon", "building.png");
    } }, directives: [_shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_1__["TopComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidWlsZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "KmvT":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/building-real-estates/building-real-estates.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BuildingRealEstatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingRealEstatesModule", function() { return BuildingRealEstatesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _build_build_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/build.component */ "BHZS");
/* harmony import */ var _building_real_estates_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building-real-estates.routing */ "+M28");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class BuildingRealEstatesModule {
}
BuildingRealEstatesModule.ɵfac = function BuildingRealEstatesModule_Factory(t) { return new (t || BuildingRealEstatesModule)(); };
BuildingRealEstatesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BuildingRealEstatesModule });
BuildingRealEstatesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _building_real_estates_routing__WEBPACK_IMPORTED_MODULE_2__["BuildingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BuildingRealEstatesModule, { declarations: [_build_build_component__WEBPACK_IMPORTED_MODULE_1__["BuildComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _building_real_estates_routing__WEBPACK_IMPORTED_MODULE_2__["BuildingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]], exports: [_build_build_component__WEBPACK_IMPORTED_MODULE_1__["BuildComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-building-real-estates-building-real-estates-module.js.map