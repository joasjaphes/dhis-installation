(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-finance-accounting-finance-accounting-module"],{

/***/ "+bNG":
/*!*************************************************************************!*\
  !*** ./src/app/modules/finance-accounting/finance-accounting.module.ts ***!
  \*************************************************************************/
/*! exports provided: FinanceAccountingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceAccountingModule", function() { return FinanceAccountingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _finance_finance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finance/finance.component */ "ZJaw");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/shared/shared.module */ "PCNd");
/* harmony import */ var _app_material_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/material/material */ "w55g");
/* harmony import */ var _finance_accounting_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./finance-accounting.routing */ "NOnA");
/* harmony import */ var _finance_expenses_expenses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finance/expenses/expenses.component */ "1qTf");
/* harmony import */ var _finance_income_income_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finance/income/income.component */ "77HH");
/* harmony import */ var _finance_expenses_add_edit_expenses_add_edit_expenses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finance/expenses/add-edit-expenses/add-edit-expenses.component */ "KIVK");
/* harmony import */ var _finance_income_add_edit_income_add_edit_income_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finance/income/add-edit-income/add-edit-income.component */ "NeIb");
/* harmony import */ var _finance_balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./finance/balance-sheet/balance-sheet.component */ "VmMj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class FinanceAccountingModule {
}
FinanceAccountingModule.ɵfac = function FinanceAccountingModule_Factory(t) { return new (t || FinanceAccountingModule)(); };
FinanceAccountingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: FinanceAccountingModule });
FinanceAccountingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _finance_accounting_routing__WEBPACK_IMPORTED_MODULE_4__["FinanceAccountingRoutingModule"],
            _app_material_material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](FinanceAccountingModule, { declarations: [_finance_finance_component__WEBPACK_IMPORTED_MODULE_1__["FinanceComponent"],
        _finance_expenses_expenses_component__WEBPACK_IMPORTED_MODULE_5__["ExpensesComponent"],
        _finance_income_income_component__WEBPACK_IMPORTED_MODULE_6__["IncomeComponent"],
        _finance_expenses_add_edit_expenses_add_edit_expenses_component__WEBPACK_IMPORTED_MODULE_7__["AddEditExpensesComponent"],
        _finance_income_add_edit_income_add_edit_income_component__WEBPACK_IMPORTED_MODULE_8__["AddEditIncomeComponent"],
        _finance_balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_9__["BalanceSheetComponent"]
        // TopComponent
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _finance_accounting_routing__WEBPACK_IMPORTED_MODULE_4__["FinanceAccountingRoutingModule"],
        _app_material_material__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]] }); })();


/***/ }),

/***/ "NOnA":
/*!**************************************************************************!*\
  !*** ./src/app/modules/finance-accounting/finance-accounting.routing.ts ***!
  \**************************************************************************/
/*! exports provided: FinanceAccountingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceAccountingRoutingModule", function() { return FinanceAccountingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _finance_finance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finance/finance.component */ "ZJaw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { ActionPlansComponent } from './action-plans.component';



const routes = [
    {
        path: '',
        component: _finance_finance_component__WEBPACK_IMPORTED_MODULE_1__["FinanceComponent"],
        pathMatch: 'full',
        data: {
            title: 'Finance & accounting',
        },
    },
];
class FinanceAccountingRoutingModule {
}
FinanceAccountingRoutingModule.ɵfac = function FinanceAccountingRoutingModule_Factory(t) { return new (t || FinanceAccountingRoutingModule)(); };
FinanceAccountingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FinanceAccountingRoutingModule });
FinanceAccountingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FinanceAccountingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-finance-accounting-finance-accounting-module.js.map