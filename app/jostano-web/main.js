(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joas/Documents/joas/projects/Angular/jostano-web/src/main.ts */"zUnb");


/***/ }),

/***/ "0fL3":
/*!******************************************************!*\
  !*** ./src/app/store/metadata-mappings.ts/income.ts ***!
  \******************************************************/
/*! exports provided: Income */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Income", function() { return Income; });
const Income = {
    id: null,
    name: 'Income',
    program: 'w7x6iq6dImd',
    stage: {
        Income: {
            id: 'W9hhsYpFhad',
            name: 'Income',
            dataElements: [
                {
                    id: 'VeFqHTn3JKw',
                    name: 'Income Amount',
                    key: 'incomeAmount'
                },
                {
                    id: 'EciXnJP4nrV',
                    name: 'Income Date',
                    key: 'incomeDate'
                },
                {
                    id: 'J9bboPQnAcI',
                    name: 'Income Description',
                    key: 'incomeDescription'
                },
                {
                    id: 'KKAgGRP8kdw',
                    name: 'Income From',
                    key: 'incomeFrom'
                }
            ]
        }
    }
};


/***/ }),

/***/ "1qTf":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/finance-accounting/finance/expenses/expenses.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function() { return ExpensesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _add_edit_expenses_add_edit_expenses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-edit-expenses/add-edit-expenses.component */ "KIVK");
/* harmony import */ var _store_finance_accounting_expenses_expenses_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/finance-accounting/expenses/expenses.selectors */ "kETu");
/* harmony import */ var src_app_store_finance_accounting_expenses_expenses_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/finance-accounting/expenses/expenses.actions */ "lD+8");
/* harmony import */ var src_app_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tracker.service */ "ddZv");
/* harmony import */ var _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/data-table/data-table.component */ "lkLn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");











class ExpensesComponent {
    constructor(dialog, store, trackerService) {
        this.dialog = dialog;
        this.store = store;
        this.trackerService = trackerService;
        this.expenses = [];
        this.tableConfigurations = {
            showAddButton: true,
            addText: 'New Expense',
            tableColumns: [
                { label: 'Expense Date', name: 'expenseDate' },
                { label: 'Expense From', name: 'expenseFrom' },
                { label: 'Amount', name: 'expenseAmount', type: 'number' },
                { label: 'Description', name: 'expenseDescription' }
            ]
        };
        this.loading = false;
    }
    ngOnInit() {
        this.expenses$ = this.store.select(_store_finance_accounting_expenses_expenses_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAll"]);
        this.getData().then();
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const expenses = yield this.trackerService.getEvents('Expense', 'm0frOspS7JY', 'Expense', 'DESCENDANTS').toPromise();
            this.store.dispatch(Object(src_app_store_finance_accounting_expenses_expenses_actions__WEBPACK_IMPORTED_MODULE_3__["addExpenses"])({ expenses }));
            this.loading = false;
        });
    }
    onAdd() {
        this.dialog.open(_add_edit_expenses_add_edit_expenses_component__WEBPACK_IMPORTED_MODULE_1__["AddEditExpensesComponent"], {
            width: '90%',
            disableClose: true
        });
        console.log('delete');
    }
}
ExpensesComponent.ɵfac = function ExpensesComponent_Factory(t) { return new (t || ExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_8__["TrackerService"])); };
ExpensesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ExpensesComponent, selectors: [["app-expenses"]], decls: 3, vars: 6, consts: [[3, "tableConfigurations", "tableList", "loading", "add"]], template: function ExpensesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-data-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("add", function ExpensesComponent_Template_app_data_table_add_1_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tableConfigurations", ctx.tableConfigurations)("tableList", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx.expenses$))("loading", ctx.loading);
    } }, directives: [_shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_9__["DataTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlcy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [src_app_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]] } });


/***/ }),

/***/ "2szt":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/save/save.component.ts ***!
  \**********************************************************/
/*! exports provided: SaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveComponent", function() { return SaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/router-animation */ "fT3M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");






function SaveComponent_span_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveComponent_span_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cancel\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SaveComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SaveComponent_span_0_button_1_Template, 3, 0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveComponent_span_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.confirming = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showCancel);
} }
function SaveComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveComponent_span_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveComponent_span_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.confirming = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.confirmText, "\u00A0\u00A0\u00A0 ");
} }
function SaveComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.loadingMessage, "\n");
} }
class SaveComponent {
    constructor() {
        this.showCancel = true;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.savingData = false;
        this.loadingMessage = 'Saving data...';
        this.confirmText = 'Are sure you want save?';
        this.confirming = false;
    }
    ngOnInit() {
    }
    onCancel() {
        this.cancel.emit();
    }
    onSave() {
        this.save.emit();
        this.confirming = false;
    }
}
SaveComponent.ɵfac = function SaveComponent_Factory(t) { return new (t || SaveComponent)(); };
SaveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaveComponent, selectors: [["app-save"]], inputs: { showCancel: "showCancel", savingData: "savingData", loadingMessage: "loadingMessage", confirmText: "confirmText" }, outputs: { save: "save", cancel: "cancel" }, decls: 3, vars: 3, consts: [["style", "float: right;", 4, "ngIf"], [4, "ngIf"], [2, "float", "right"], ["mat-flat-button", "", "class", "cancel-btn", "role", "button", 3, "click", 4, "ngIf"], ["role", "button", 1, "save-btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-floppy-o"], ["mat-flat-button", "", "role", "button", 1, "cancel-btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["mat-flat-button", "", 2, "color", "green", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], ["mat-flat-button", "", 2, "color", "red", 3, "click"], ["mode", "indeterminate"]], template: function SaveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SaveComponent_span_0_Template, 5, 2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SaveComponent_span_1_Template, 9, 2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SaveComponent_span_2_Template, 3, 2, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.confirming);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirming);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.savingData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"]], styles: [".cancel-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: red;\n}\n\n.save-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #2e0101;\n  color: #2e0101;\n  border-radius: 20px;\n  padding: 3px 20px 3px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUNKIiwiZmlsZSI6InNhdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FuY2VsLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnNhdmUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDQ2LCAxLCAxKTtcbiAgICBjb2xvcjpyZ2JhKDQ2LCAxLCAxKSA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAzcHggMjBweCAzcHggMjBweDtcbn0iXX0= */"], data: { animation: [_animations_router_animation__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]] } });


/***/ }),

/***/ "77HH":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/finance-accounting/finance/income/income.component.ts ***!
  \*******************************************************************************/
/*! exports provided: IncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeComponent", function() { return IncomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_store_finance_accounting_income_income_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/finance-accounting/income/income.actions */ "Y3/W");
/* harmony import */ var _store_finance_accounting_income_income_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/finance-accounting/income/income.selectors */ "taDA");
/* harmony import */ var _add_edit_income_add_edit_income_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-income/add-edit-income.component */ "NeIb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tracker.service */ "ddZv");
/* harmony import */ var _shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/data-table/data-table.component */ "lkLn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










class IncomeComponent {
    constructor(store, dialog, trackerService) {
        this.store = store;
        this.dialog = dialog;
        this.trackerService = trackerService;
        this.loading = false;
        this.tableConfigurations = {
            showAddButton: true,
            addText: 'Income',
            tableColumns: [
                { label: 'Income Date', name: 'incomeDate' },
                { label: 'Income From', name: 'incomeFrom' },
                { label: 'Amount', name: 'incomeAmount', type: 'number' },
                { label: 'Description', name: 'incomeDescription' }
            ]
        };
    }
    ngOnInit() {
        this.incomes$ = this.store.select(_store_finance_accounting_income_income_selectors__WEBPACK_IMPORTED_MODULE_2__["selectAll"]);
        this.getData().then();
    }
    onAdd() {
        this.dialog.open(_add_edit_income_add_edit_income_component__WEBPACK_IMPORTED_MODULE_3__["AddEditIncomeComponent"], {
            width: '90%',
            disableClose: true
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const incomes = yield this.trackerService.getEvents('Income', 'm0frOspS7JY', 'Income', 'DESCENDANTS').toPromise();
            this.store.dispatch(Object(src_app_store_finance_accounting_income_income_actions__WEBPACK_IMPORTED_MODULE_1__["addIncomes"])({ incomes }));
            this.loading = false;
        });
    }
}
IncomeComponent.ɵfac = function IncomeComponent_Factory(t) { return new (t || IncomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_7__["TrackerService"])); };
IncomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: IncomeComponent, selectors: [["app-income"]], decls: 2, vars: 4, consts: [[3, "tableConfigurations", "tableList", "add"]], template: function IncomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-data-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("add", function IncomeComponent_Template_app_data_table_add_0_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tableConfigurations", ctx.tableConfigurations)("tableList", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, ctx.incomes$));
    } }, directives: [_shared_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmNvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "7djI":
/*!********************************************************!*\
  !*** ./src/app/shared/components/top/top.component.ts ***!
  \********************************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");


class TopComponent {
    constructor() {
        this.title = '';
        this.icon = '';
    }
    ngOnInit() {
    }
}
TopComponent.ɵfac = function TopComponent_Factory(t) { return new (t || TopComponent)(); };
TopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopComponent, selectors: [["app-top-banner"]], inputs: { title: "title", icon: "icon" }, decls: 6, vars: 2, consts: [[1, "container-fluid"], ["alt", "", "height", "20px", "width", "20px", 3, "src"]], template: function TopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/icons/", ctx.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx.title, "");
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");







function HomeComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menu_r4.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/icons/", menu_r4.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menu_r4.name);
} }
class HomeComponent {
    constructor(router) {
        this.router = router;
        this.menus = [
            {
                name: 'Finance & Accounting',
                route: '/finance-accounting',
                icon: 'coin.png'
            },
            {
                name: 'Transportation & Logistic',
                route: '/transportation-logistic',
                icon: 'public-transport.png'
            },
            {
                name: 'Building & Real estates',
                route: '/building-real-estates',
                icon: 'building.png'
            },
            {
                name: 'Shops & Hardware',
                route: '/shops-hardware',
                icon: 'shop.png'
            }
        ];
    }
    ngOnInit() {
        const user = localStorage.getItem('current-user');
        this.currentUser = JSON.parse(user);
        console.log(this.currentUser);
        console.log('home page');
    }
    onLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('current-user');
        this.router.navigate(['login']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 36, vars: 5, consts: [["autosize", "", 1, "example-container"], ["mode", "side", "opened", "", 1, "example-sidenav"], ["drawer", ""], [2, "padding-bottom", "20px", "text-align", "center"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa-5x", 2, "color", "gray"], [2, "font-weight", "bold", "font-size", "20px", "color", "rgb(46, 1, 1)"], [2, "margin-top", "10px"], [4, "ngFor", "ngForOf"], [1, "example-sidenav-content"], [1, "navbar", "navbar-expand-lg", "navbar-light", 2, "background-color", "rgb(46, 1, 1)"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [2, "padding-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-bars", 2, "color", "white", "cursor", "pointer", 3, "click"], ["src", "assets/jostano-logo.png", "height", "50px", "width", "50px", 1, "avatar"], [2, "color", "white", "letter-spacing", "5px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0"], [1, "nav-item", "dropdown"], ["id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "white", 3, "matMenuTriggerFor"], ["appMenu", "matMenu"], [1, "text-muted", "logout-btn", 3, "click"], [1, "fas", "fa-sign-out-alt"], ["o", "outlet"], ["routerLinkActive", "active", 2, "padding", "10px"], ["href", "#", 2, "text-decoration", "none", "color", "black", 3, "routerLink"], ["height", "20px", "width", "20px", 3, "src"], [2, "font-family", "serif", "letter-spacing", "2px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HomeComponent_ng_container_10_Template, 8, 3, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_i_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "JOSTANO INVESTMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-menu", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_30_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "router-outlet", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentUser.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.currentUser.displayName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routeAnimations", _r3.isActivated ? _r3.activatedRoute : "");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n\n.namespace[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  margin: 0px 10px 0px 20px;\n  background-color: transparent;\n  border: none;\n  font-weight: bold;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px 0px 20px 0px;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.active[_ngcontent-%COMP%] {\n  border-left: 2px solid #3b3b3b;\n  background-color: #dddddd;\n  font-weight: bold;\n  z-index: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUlFO0VBQ0UsWUFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURKOztBQUdFO0VBRUUsYUFBQTtFQUNBLFdBQUE7QUFESjs7QUFNRTtFQUNFLDBCQUFBO0FBSEo7O0FBTUU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUhKOztBQU1FO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUhKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgXG4gIC5uYW1lc3BhY2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ291dC1idG4ge1xuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuZXhhbXBsZS1zaWRlbmF2IHtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcbiAgfVxuXG4gIC5hdmF0YXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5hY3RpdmV7IFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDU5LCA1OSwgNTkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB6LWluZGV4OiAzO1xuICB9Il19 */"], data: { animation: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_0__["routeAnimations"]] } });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Emfe":
/*!*********************************************************!*\
  !*** ./src/app/shared/animations/animations.service.ts ***!
  \*********************************************************/
/*! exports provided: AnimationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return AnimationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AnimationsService {
    constructor() { }
    static isRouteAnimationsType(type) {
        return AnimationsService.routeAnimationType === type;
    }
    updateRouteAnimationType(pageAnimations, elementsAnimations) {
        AnimationsService.routeAnimationType =
            pageAnimations && elementsAnimations
                ? 'ALL'
                : pageAnimations
                    ? 'PAGE'
                    : elementsAnimations
                        ? 'ELEMENTS'
                        : 'NONE';
    }
}
AnimationsService.routeAnimationType = 'ALL';
AnimationsService.ɵfac = function AnimationsService_Factory(t) { return new (t || AnimationsService)(); };
AnimationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnimationsService, factory: AnimationsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HH8J":
/*!***********************************************************************!*\
  !*** ./src/app/store/finance-accounting/expenses/expenses.reducer.ts ***!
  \***********************************************************************/
/*! exports provided: expensesFeatureKey, adapter, initialState, expenseReducer, reducer, selectLoading, selectLoaded, selectIds, selectEntities, selectAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expensesFeatureKey", function() { return expensesFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expenseReducer", function() { return expenseReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoaded", function() { return selectLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _expenses_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenses.actions */ "lD+8");



const expensesFeatureKey = 'expenses';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    loading: false,
    loaded: false
});
const expenseReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_expenses_actions__WEBPACK_IMPORTED_MODULE_2__["StartLoading"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_expenses_actions__WEBPACK_IMPORTED_MODULE_2__["DoneLoading"], (state) => {
    return Object.assign(Object.assign({}, state), { loaded: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_expenses_actions__WEBPACK_IMPORTED_MODULE_2__["addExpense"], (state, { expense }) => {
    return adapter.addOne(expense, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_expenses_actions__WEBPACK_IMPORTED_MODULE_2__["addExpenses"], (state, { expenses }) => {
    return adapter.addMany(expenses, state);
}));
function reducer(state, action) {
    return expenseReducer(state, action);
}
const selectLoading = (state) => state.loading;
const selectLoaded = (state) => state.loaded;
const { selectIds, selectEntities, selectAll, } = adapter.getSelectors();


/***/ }),

/***/ "KIVK":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/finance-accounting/finance/expenses/add-edit-expenses/add-edit-expenses.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddEditExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditExpensesComponent", function() { return AddEditExpensesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_store_finance_accounting_expenses_expenses_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/finance-accounting/expenses/expenses.actions */ "lD+8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/common.service */ "OlR4");
/* harmony import */ var src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tracker.service */ "ddZv");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_components_save_save_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/save/save.component */ "2szt");
















class AddEditExpensesComponent {
    constructor(formBuilder, dialog, store, commonService, trackerService) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.store = store;
        this.commonService = commonService;
        this.trackerService = trackerService;
        this.savingData = false;
    }
    ngOnInit() {
        this.expenseForm = this.formBuilder.group({
            expenseDate: [''],
            expenseFrom: [''],
            amount: [''],
            description: [''],
        });
        this.expenseForm.patchValue({
            expenseDate: new Date()
        });
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.savingData = true;
            const formValue = this.expenseForm.value;
            const expenseDate = moment__WEBPACK_IMPORTED_MODULE_1__(formValue.expenseDate).format('YYYY-MM-DD');
            const expense = {
                id: this.commonService.makeId(),
                expenseDate,
                expenseAmount: formValue.amount,
                expenseDescription: formValue.description,
                expenseFrom: formValue.expenseFrom
            };
            try {
                const payload = this.trackerService.prepareEvents('Expense', 'm0frOspS7JY', null, 'Expense', null, expense);
                yield this.trackerService.saveEvent(payload).toPromise();
                // console.log('payload', payload);
            }
            catch (_a) {
            }
            this.store.dispatch(Object(src_app_store_finance_accounting_expenses_expenses_actions__WEBPACK_IMPORTED_MODULE_2__["addExpense"])({ expense }));
            this.savingData = false;
            this.onCancel();
        });
    }
    onCancel() {
        console.log('closing');
        this.dialog.closeAll();
    }
}
AddEditExpensesComponent.ɵfac = function AddEditExpensesComponent_Factory(t) { return new (t || AddEditExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_8__["TrackerService"])); };
AddEditExpensesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddEditExpensesComponent, selectors: [["app-add-edit-expenses"]], decls: 38, vars: 7, consts: [[1, "row"], [2, "text-align", "center", "color", "rgb(46, 1, 1)"], [1, "row", "mt-2"], [3, "formGroup"], [1, "row", "container"], [1, "col-sm-12"], ["appearance", "outline"], ["matInput", "", "formControlName", "expenseDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datePicker", ""], ["matInput", "", "formControlName", "expenseFrom"], [3, "value"], ["type", "text", "matInput", "", "autocomplete", "off", "formControlName", "amount"], ["cols", "30", "rows", "5", "matInput", "", "autocomplete", "off", "formControlName", "description"], [3, "savingData", "save", "cancel"]], template: function AddEditExpensesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add New Expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Expense Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Expense From");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Transportation & Logistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Building & Real Estates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Shops & Hardware");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "app-save", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("save", function AddEditExpensesComponent_Template_app_save_save_37_listener() { return ctx.onSave(); })("cancel", function AddEditExpensesComponent_Template_app_save_cancel_37_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.expenseForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "Transportation & Logistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "Building & Real Estates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "Shops & Hardware");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("savingData", ctx.savingData);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _shared_components_save_save_component__WEBPACK_IMPORTED_MODULE_15__["SaveComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC1leHBlbnNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "N09b":
/*!**********************************************!*\
  !*** ./src/app/website/website.component.ts ***!
  \**********************************************/
/*! exports provided: WebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteComponent", function() { return WebsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _website_header_website_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../website-header/website-header.component */ "PmRS");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");



class WebsiteComponent {
    constructor() { }
    ngOnInit() {
    }
}
WebsiteComponent.ɵfac = function WebsiteComponent_Factory(t) { return new (t || WebsiteComponent)(); };
WebsiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebsiteComponent, selectors: [["app-website"]], decls: 49, vars: 0, consts: [[1, "header"], [1, "top-layer"], [1, "center"], [2, "font-weight", "bold", "letter-spacing", "5px"], [1, "row", "container", "mt-3"], [1, "col-sm-6"], [1, "text-muted", "block-text"], [1, "row", "footer"], [1, "col-sm-4"], [1, "col-sm-12", "mt-20", 2, "text-align", "center"], ["src", "assets/jostano-logo.png", "width", "50px", "height", "50px", "alt", ""]], template: function WebsiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-website-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Jostano Investment And General Supplies Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Head Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "P.o.box 71214");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Dar es salaam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "0784909266");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "0746909266");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "jostanoinvestments1@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " copyright\u00A92021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_website_header_website_header_component__WEBPACK_IMPORTED_MODULE_1__["WebsiteHeaderComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 100%;\n  background-image: url('invest.jpg');\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.top-layer[_ngcontent-%COMP%] {\n  height: 60vh;\n  background-color: black;\n  opacity: 0.7;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 30%;\n  border: 1px solid white;\n  border-radius: 20px;\n  color: white;\n  background: transparent;\n  position: absolute;\n  text-align: center;\n  top: 30%;\n  padding: 30px;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.block-text[_ngcontent-%COMP%] {\n  border-left: 3px solid #440505;\n  font-family: Arial, Helvetica, sans-serif;\n  letter-spacing: 2px;\n  padding-left: 5px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  height: 70vh;\n  background-color: #440505;\n  color: gray;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dlYnNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUVBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUFKOztBQUdBO0VBQ0ksOEJBQUE7RUFFQSx5Q0FBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUZKIiwiZmlsZSI6IndlYnNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW52ZXN0LmpwZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udG9wLWxheWVyIHtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jZW50ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAzMCU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG59XG5cbi5ibG9jay10ZXh0IHtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYig2OCwgNSwgNSk7XG4gICAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5mb290ZXIge1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDUsIDUpO1xuICAgIGNvbG9yOmdyYXk7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "NeIb":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/finance-accounting/finance/income/add-edit-income/add-edit-income.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AddEditIncomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditIncomeComponent", function() { return AddEditIncomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_finance_accounting_income_income_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../store/finance-accounting/income/income.actions */ "Y3/W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../services/common.service */ "OlR4");
/* harmony import */ var src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tracker.service */ "ddZv");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_components_save_save_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/save/save.component */ "2szt");
















class AddEditIncomeComponent {
    constructor(formBuilder, store, dialog, commonService, trackerService) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.dialog = dialog;
        this.commonService = commonService;
        this.trackerService = trackerService;
        this.savingData = false;
    }
    ngOnInit() {
        this.incomeForm = this.formBuilder.group({
            incomeDate: [''],
            incomeFrom: [''],
            amount: [''],
            description: ['']
        });
        this.incomeForm.patchValue({
            incomeDate: new Date()
        });
    }
    onSave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.savingData = true;
            const formValue = this.incomeForm.value;
            const incomeDate = moment__WEBPACK_IMPORTED_MODULE_1__(formValue.incomeDate).format('YYYY-MM-DD');
            const income = {
                id: this.commonService.makeId(),
                incomeDate,
                incomeAmount: formValue.amount,
                incomeFrom: formValue.incomeFrom,
                incomeDescription: formValue.description
            };
            try {
                const incomePayload = this.trackerService.prepareEvents('Income', 'm0frOspS7JY', null, 'Income', null, income);
                yield this.trackerService.saveEvent(incomePayload).toPromise();
                this.store.dispatch(Object(_store_finance_accounting_income_income_actions__WEBPACK_IMPORTED_MODULE_2__["addIncome"])({ income }));
            }
            catch (e) {
                console.error('Error', e);
            }
            this.savingData = false;
            this.onCancel();
        });
    }
    onCancel() {
        this.dialog.closeAll();
    }
}
AddEditIncomeComponent.ɵfac = function AddEditIncomeComponent_Factory(t) { return new (t || AddEditIncomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_8__["TrackerService"])); };
AddEditIncomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddEditIncomeComponent, selectors: [["app-add-edit-income"]], decls: 38, vars: 7, consts: [[1, "row"], [2, "text-align", "center", "color", "rgb(46, 1, 1)"], [1, "row", "mt-2"], [3, "formGroup"], [1, "row", "container"], [1, "col-sm-12"], ["appearance", "outline"], ["matInput", "", "formControlName", "incomeDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["datePicker", ""], ["matInput", "", "formControlName", "incomeFrom"], [3, "value"], ["type", "text", "matInput", "", "autocomplete", "off", "formControlName", "amount"], ["cols", "30", "rows", "5", "matInput", "", "autocomplete", "off", "formControlName", "description"], [3, "savingData", "save", "cancel"]], template: function AddEditIncomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add New Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Income Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-datepicker-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "mat-datepicker", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Income From");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Transportation & Logistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Building & Real Estates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Shops & Hardware");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "app-save", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("save", function AddEditIncomeComponent_Template_app_save_save_37_listener() { return ctx.onSave(); })("cancel", function AddEditIncomeComponent_Template_app_save_cancel_37_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.incomeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "Transportation & Logistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "Building & Real Estates");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "Shops & Hardware");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("savingData", ctx.savingData);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _shared_components_save_save_component__WEBPACK_IMPORTED_MODULE_15__["SaveComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZWRpdC1pbmNvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "OlR4":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CommonService {
    constructor() { }
    makeId() {
        let text = '';
        const firstLetterPossibleCombination = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const PossibleCombination = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 11; i++) {
            if (i === 0) {
                text += firstLetterPossibleCombination.charAt(Math.floor(Math.random() * firstLetterPossibleCombination.length));
            }
            else {
                text += PossibleCombination.charAt(Math.floor(Math.random() * PossibleCombination.length));
            }
        }
        return text;
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Orhp":
/*!*******************************************************!*\
  !*** ./src/app/store/metadata-mappings.ts/expense.ts ***!
  \*******************************************************/
/*! exports provided: Expense */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expense", function() { return Expense; });
const Expense = {
    id: null,
    name: 'Expense',
    program: 'AyXKTdE3J2y',
    stage: {
        Expense: {
            id: 'IvjsLxefMCb',
            name: 'Expenses',
            dataElements: [
                {
                    id: 'UQdLmrOrGXd',
                    name: 'Expense Date',
                    key: 'expenseDate'
                },
                {
                    id: 't002Fi99KwR',
                    name: 'Expense Description',
                    key: 'expenseDescription'
                },
                {
                    id: 'eNwca7pbwwx',
                    name: 'Expense From',
                    key: 'expenseFrom'
                },
                {
                    id: 'GCKSOWDVDaH',
                    name: 'Expense Amount',
                    key: 'expenseAmount'
                }
            ]
        }
    }
};


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_top_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/top/top.component */ "7djI");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material/material */ "w55g");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/data-table/data-table.component */ "lkLn");
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ "2szt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







// import { FinanceComponent } from './finance/finance.component';
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _material_material__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [
        // FinanceComponent
        _components_top_top_component__WEBPACK_IMPORTED_MODULE_1__["TopComponent"],
        _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"],
        _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__["SaveComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _material_material__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]], exports: [_components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"],
        _components_top_top_component__WEBPACK_IMPORTED_MODULE_1__["TopComponent"],
        _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__["SaveComponent"]] }); })();


/***/ }),

/***/ "PmRS":
/*!************************************************************!*\
  !*** ./src/app/website-header/website-header.component.ts ***!
  \************************************************************/
/*! exports provided: WebsiteHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteHeaderComponent", function() { return WebsiteHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WebsiteHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
WebsiteHeaderComponent.ɵfac = function WebsiteHeaderComponent_Factory(t) { return new (t || WebsiteHeaderComponent)(); };
WebsiteHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebsiteHeaderComponent, selectors: [["app-website-header"]], decls: 4, vars: 0, consts: [[1, "navbar", "navbar-default", 2, "background-color", "transparent"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "assets/jostano-logo.png", "alt", "", "width", "100", "height", "104", 1, "d-inline-block", "align-text-top"]], template: function WebsiteHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWJzaXRlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "PyL1":
/*!********************************************************!*\
  !*** ./src/app/store/metadata-mappings.ts/programs.ts ***!
  \********************************************************/
/*! exports provided: TrackedEntityTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackedEntityTypes", function() { return TrackedEntityTypes; });
/* harmony import */ var _income__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./income */ "0fL3");
/* harmony import */ var _expense__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense */ "Orhp");


const TrackedEntityTypes = {
    Income: _income__WEBPACK_IMPORTED_MODULE_0__["Income"],
    Expense: _expense__WEBPACK_IMPORTED_MODULE_1__["Expense"],
};


/***/ }),

/***/ "RlXv":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");


class AppEffects {
    constructor(actions$) {
        this.actions$ = actions$;
    }
}
AppEffects.ɵfac = function AppEffects_Factory(t) { return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
AppEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppEffects, factory: AppEffects.ɵfac });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "RtZI":
/*!**********************************************!*\
  !*** ./src/app/services/manifest.service.ts ***!
  \**********************************************/
/*! exports provided: ManifestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManifestService", function() { return ManifestService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ManifestService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.defaultRootUrl = '/api/';
        this.manifestLoaded = false;
    }
    getManifest() {
        return this.manifestLoaded ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this.manifest) : this.httpClient.get('manifest.webapp').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            console.warn('Manifest file could not be loaded, default options have been used instead');
            console.error({ error });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((manifest) => {
            this.manifest = manifest;
            this.manifestLoaded = true;
        }));
    }
    getRootUrl() {
        return this.getManifest().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((manifest) => {
            console.log('manifest', manifest);
            if (!manifest) {
                return this.defaultRootUrl;
            }
            return manifest.activities && manifest.activities.dhis && manifest.activities.dhis.href ?
                manifest.activities.dhis.href : this.defaultRootUrl;
        }));
    }
}
ManifestService.ɵfac = function ManifestService_Factory(t) { return new (t || ManifestService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ManifestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ManifestService, factory: ManifestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'jostano-web';
    }
    ngOnInit() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['finance-accounting']);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 400px;\n  margin: 0;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBRUEsdUJBQUE7QUFBSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1hcmdpbjowO1xuICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufSJdfQ== */"] });


/***/ }),

/***/ "VmMj":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/finance-accounting/finance/balance-sheet/balance-sheet.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BalanceSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceSheetComponent", function() { return BalanceSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tracker.service */ "ddZv");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function BalanceSheetComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r4.expenseDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, data_r4.expenseAmount, "0.2-2"));
} }
function BalanceSheetComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r5.incomeDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 2, data_r5.incomeAmount, "0.2-2"));
} }
class BalanceSheetComponent {
    constructor(trackerService) {
        this.trackerService = trackerService;
        this.startDate = new Date();
        this.endDate = new Date();
        this.incomes = [];
        this.expenses = [];
        this.expenseTotal = 0;
        this.incomeTotal = 0;
    }
    ngOnInit() {
        this.getData().then();
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const startDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.startDate).format('YYYY-MM-DD');
            const endDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.endDate).format('YYYY-MM-DD');
            this.incomes = yield this.trackerService.getEvents('Income', 'm0frOspS7JY', 'Income', 'DESCENDANTS').toPromise();
            this.expenses = yield this.trackerService.getEvents('Expense', 'm0frOspS7JY', 'Expense', 'DESCENDANTS').toPromise();
            this.expenseTotal = this.expenses.map(expense => expense.expenseAmount).reduce((a, b) => a + b);
            this.incomeTotal = this.incomes.map(income => income.incomeAmount).reduce((a, b) => a + b);
        });
    }
}
BalanceSheetComponent.ɵfac = function BalanceSheetComponent_Factory(t) { return new (t || BalanceSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_tracker_service__WEBPACK_IMPORTED_MODULE_3__["TrackerService"])); };
BalanceSheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BalanceSheetComponent, selectors: [["app-balance-sheet"]], decls: 71, vars: 20, consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-4"], ["appearance", "outline"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["datePickerStart", ""], ["datePicker", ""], [1, "btn-get"], [1, "table-content"], [1, "table", "table-bordered"], [1, "header", 2, "text-align", "center"], [1, "col-sm-6", 2, "font-weight", "bold"], [1, "col-sm-6", 2, "text-align", "right", "font-weight", "bold"], ["class", "row mb-4", 4, "ngFor", "ngForOf"], [1, "col-sm-6"], [1, "col-sm-6", 2, "text-align", "right"], [2, "text-align", "right"], [1, "row", "mb-4"]], template: function BalanceSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_6_listener($event) { return ctx.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-datepicker-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-datepicker", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BalanceSheetComponent_Template_input_ngModelChange_14_listener($event) { return ctx.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "mat-datepicker-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "mat-datepicker", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Get Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Expenditure");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, BalanceSheetComponent_div_39_Template, 6, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, BalanceSheetComponent_div_47_Template, 6, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](55, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r0)("ngModel", ctx.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.expenses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.incomes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](55, 11, ctx.expenseTotal, "0.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](62, 14, ctx.incomeTotal, "0.2-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](68, 17, ctx.incomeTotal - ctx.expenseTotal, "0.2-2"));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]], styles: [".btn-get[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 20px 5px 20px;\n  border: 1px solid #2e0202;\n  background-color: transparent;\n  color: #2e0202;\n  border-radius: 10px;\n}\n\n.table-content[_ngcontent-%COMP%] {\n  height: 60vh;\n  overflow: auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: sticky;\n  background-color: white;\n  top: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2JhbGFuY2Utc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLE1BQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0FBREoiLCJmaWxlIjoiYmFsYW5jZS1zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZ2V0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNDYsIDIsIDIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHJnYig0NiwgMiwgMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuXG4udGFibGUtY29udGVudCAgIHtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gY29sb3I6IHdoaXRlO1xuICAgIHRvcDogMDtcbn1cblxudGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });


/***/ }),

/***/ "Y3/W":
/*!*******************************************************************!*\
  !*** ./src/app/store/finance-accounting/income/income.actions.ts ***!
  \*******************************************************************/
/*! exports provided: loadIncomes, addIncome, addIncomes, getIncomes, startLoading, doneLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadIncomes", function() { return loadIncomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addIncome", function() { return addIncome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addIncomes", function() { return addIncomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncomes", function() { return getIncomes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startLoading", function() { return startLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneLoading", function() { return doneLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadIncomes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Income] Load Incomes');
const addIncome = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Income] Add Income', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addIncomes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Income] Add Incomes', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getIncomes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Income] getIcome');
const startLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Income] initiate loading');
const doneLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Income] done loading');


/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _finance_accounting_expenses_expenses_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finance-accounting/expenses/expenses.reducer */ "HH8J");
/* harmony import */ var _finance_accounting_income_income_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finance-accounting/income/income.reducer */ "lNqA");



const reducers = {
    expenses: _finance_accounting_expenses_expenses_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    income: _finance_accounting_income_income_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _website_website_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website/website.component */ "N09b");
/* harmony import */ var _website_header_website_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./website-header/website-header.component */ "PmRS");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material */ "w55g");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "YZbJ");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.effects */ "RlXv");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");
















// import { TopComponent } from './shared/components/top/top.component';





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _material_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_11__["reducers"], { metaReducers: _store__WEBPACK_IMPORTED_MODULE_11__["metaReducers"] }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"].forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_15__["AppEffects"]]),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _website_website_component__WEBPACK_IMPORTED_MODULE_3__["WebsiteComponent"],
        _website_header_website_header_component__WEBPACK_IMPORTED_MODULE_4__["WebsiteHeaderComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _material_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__["EffectsRootModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]] }); })();


/***/ }),

/***/ "ZJaw":
/*!*************************************************************************!*\
  !*** ./src/app/modules/finance-accounting/finance/finance.component.ts ***!
  \*************************************************************************/
/*! exports provided: FinanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceComponent", function() { return FinanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/top/top.component */ "7djI");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses/expenses.component */ "1qTf");
/* harmony import */ var _income_income_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./income/income.component */ "77HH");
/* harmony import */ var _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./balance-sheet/balance-sheet.component */ "VmMj");






class FinanceComponent {
    constructor() { }
    ngOnInit() {
    }
}
FinanceComponent.ɵfac = function FinanceComponent_Factory(t) { return new (t || FinanceComponent)(); };
FinanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinanceComponent, selectors: [["app-finance"]], decls: 12, vars: 2, consts: [[3, "title", "icon"], [1, "container-fluid"], ["label", "Expenses"], [1, "mt-4"], ["label", "Income"], ["label", "Balance Sheet"]], template: function FinanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-income");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-balance-sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Finance & Accounting")("icon", "coin.png");
    } }, directives: [_shared_components_top_top_component__WEBPACK_IMPORTED_MODULE_1__["TopComponent"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesComponent"], _income_income_component__WEBPACK_IMPORTED_MODULE_4__["IncomeComponent"], _balance_sheet_balance_sheet_component__WEBPACK_IMPORTED_MODULE_5__["BalanceSheetComponent"]], styles: [".menu[_ngcontent-%COMP%] {\n  width: 15vw;\n}\n\n.menu-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px 10px 5px 10px;\n  border: 1px #300101 solid;\n  color: #300101;\n  border-radius: 20px;\n  font-weight: bold;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZpbmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFDSiIsImZpbGUiOiJmaW5hbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIHdpZHRoOiAxNXZ3O1xufVxuXG4ubWVudS1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHJnYig0OCwgMSwgMSkgc29saWQ7XG4gICAgY29sb3I6cmdiKDQ4LCAxLCAxKTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"] });


/***/ }),

/***/ "ddZv":
/*!*********************************************!*\
  !*** ./src/app/services/tracker.service.ts ***!
  \*********************************************/
/*! exports provided: TrackerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerService", function() { return TrackerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/metadata-mappings.ts/programs */ "PyL1");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-client.service */ "gkM4");





class TrackerService {
    constructor(http) {
        this.http = http;
    }
    makeid() {
        let text = '';
        const possible_combinations = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const first_possible_combinations = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 11; i++) {
            const charPosition = i === 0
                ? Math.random() * first_possible_combinations.length
                : Math.random() * possible_combinations.length;
            text += possible_combinations.charAt(Math.floor(charPosition));
        }
        return text;
    }
    // save tracked entity
    saveTrackedEntity(trackedEntity) {
        return this.http.post(`30/trackedEntityInstances`, trackedEntity);
    }
    // save events
    saveEvent(event) {
        return this.http.post(`events`, event);
    }
    updateEvent(event, eventId) {
        return this.http.put(`events/${eventId}`, event);
    }
    deleteEvent(eventId) {
        return this.http.delete(`events/${eventId}`);
    }
    deleteTrackedEntity(trackedEntityInstanceId) {
        return this.http.delete(`trackedEntityInstances/${trackedEntityInstanceId}`);
    }
    // update tracked entity
    updateTrackedEntity(trackedEntity, trackedEntityInstanceId) {
        return this.http.put(`30/trackedEntityInstances/${trackedEntityInstanceId}`, trackedEntity);
    }
    // cancel tracked entity
    cancelTrackedEntity(trackedEntity, trackedEntityInstanceId) {
        return this.http.put(`30/trackedEntityInstances/${trackedEntityInstanceId}`, trackedEntity);
    }
    // get enrollments tracked entity
    getEnrollments(trackedEntityId, ouId) {
        return this.http.get(`30/enrollments.json?ou=${ouId}&ouMode=SELECTED&trackedEntity=${trackedEntityId}`);
    }
    getEvent(eventId, key, stageKey) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
            if (!metadata) {
                observer.next(null);
                observer.complete();
            }
            else {
                const eventUrl = `events/${eventId}.json`;
                const stage = metadata.stage[stageKey];
                const eventsRequest = this.http.get(eventUrl);
                eventsRequest.subscribe((event) => {
                    const dataObject = {};
                    dataObject['id'] = event.event;
                    dataObject['organisation_unit_id'] = event.orgUnit;
                    dataObject['trackedEntityInstance'] = event.trackedEntityInstance;
                    dataObject['enrollment'] = event.enrollment;
                    dataObject['created'] = event.eventDate;
                    dataObject['lastUpdated'] = event.lastUpdated;
                    dataObject['programStage'] = event.programStage;
                    dataObject['storedBy'] = event.storedBy;
                    stage.dataElements.forEach((element) => {
                        const attribute_name = this._getAttributeKeyId(stage.dataElements, element.key);
                        const dataElement = event.dataValues.find(item => item['dataElement'] === attribute_name);
                        if (dataElement) {
                            dataObject[element.key] = dataElement['value'];
                        }
                    });
                    return dataObject;
                    observer.next(dataObject);
                    observer.complete();
                }, (error1) => observer.error(error1));
            }
        });
    }
    getEvents(key, ou, stageKey, ouMode = 'SELECTED', filter = '', startDate = null, endDate = null) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
            if (!metadata) {
                observer.next([]);
                observer.complete();
            }
            else {
                const stage = metadata.stage[stageKey];
                let eventUrl = `events.json?programStage=${stage.id}&orgUnit=${ou}&ouMode=${ouMode}&paging=false${filter}`;
                if (startDate) {
                    eventUrl += `&startDate=${startDate}&endDate=${endDate}`;
                }
                const eventsRequest = this.http.get(eventUrl);
                eventsRequest.subscribe((result) => {
                    const retunItem = this.mapEventToObject(key, stageKey, result.events);
                    observer.next(retunItem);
                    observer.complete();
                }, (error) => observer.error());
            }
        });
    }
    prepareTrackedEntityFilterString(key, filters) {
        let filterString = '';
        const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
        if (metadata) {
            filterString = filters
                .map((filter) => {
                const filterId = this._getAttributeKeyId(metadata.attributes, filter.attribute_key);
                return filterId ? `filter=${filterId}:eq:${filter.value}` : '';
            })
                .filter((item) => item !== '')
                .join('&');
        }
        return filterString === '' ? '' : `&${filterString}`;
    }
    prepareEventEntityFilterString(programKey, stageKey, filters) {
        let filterString = '';
        const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][programKey];
        if (metadata) {
            const stage = metadata.stage[stageKey];
            if (stage) {
                filterString = filters
                    .map((filter) => {
                    const filterId = this._getAttributeKeyId(stage.dataElements, filter.attribute_key);
                    if (filter.operator === 'IN') {
                        return filterId ? `filter=${filterId}:IN:${filter.value.join(';')}` : '';
                    }
                    else if (filter.operator === 'BETWEEN') {
                        return filterId ? `filter=${filterId}:ge:${filter.value[0]}&filter=${filterId}:le:${filter.value[1]}` : '';
                    }
                    else {
                        return filterId ? `filter=${filterId}:eq:${filter.value}` : '';
                    }
                })
                    .filter((item) => item !== '')
                    .join('&');
            }
        }
        return filterString === '' ? '' : `&${filterString}`;
    }
    getTrackedEntityInstance(key, ou, ouMode = 'SELECTED', filter = '', startDate = null, endDate = null, dateType = 'program', pageSize = 400) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
            if (!metadata) {
                observer.next([]);
                observer.complete();
            }
            else {
                const fieldFilters = '&fields=created,orgUnit,trackedEntityInstance,lastUpdated,enrollments[storedBy,enrollmentDate,enrollment,events],attributes[storedBy,value,attribute]';
                let eventUrl = `trackedEntityInstances.json?ou=${ou}&ouMode=${ouMode}&trackedEntityType=${metadata.id}&pageSize=${pageSize}${filter}${fieldFilters}`;
                if (startDate) {
                    if (dateType === 'program') {
                        eventUrl += `&program=${metadata.program}&programStartDate=${startDate}&programEndDate=${endDate}`;
                    }
                    else {
                        eventUrl += `&lastUpdatedStartDate=${startDate}&lastUpdatedEndDate=${endDate}`;
                    }
                }
                this.http.get(eventUrl).subscribe((data) => {
                    const returnObject = data.trackedEntityInstances.map((resultRow) => {
                        return this.prepareDataObjectFromTEI(resultRow, metadata);
                    });
                    observer.next(returnObject);
                    observer.complete();
                }, (error1) => observer.error(error1));
            }
        });
    }
    getTrackedEntityInstanceForReport(key, ou, ouMode = 'SELECTED', filter = '', startDate = null, endDate = null, dateType = 'program', pageSize = 400) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
            if (!metadata) {
                observer.next([]);
                observer.complete();
            }
            else {
                const fieldFilters = '&fields=created,orgUnit,trackedEntityInstance,lastUpdated,enrollments[storedBy,enrollmentDate,enrollment],attributes[storedBy,value,attribute]';
                let eventUrl = `trackedEntityInstances.json?ou=${ou}&ouMode=${ouMode}&program=${metadata.program}&pageSize=${pageSize}${filter}${fieldFilters}`;
                if (startDate) {
                    if (dateType === 'program') {
                        eventUrl += `&programStartDate=${startDate}&programEndDate=${endDate}`;
                    }
                    else {
                        eventUrl += `&lastUpdatedStartDate=${startDate}&lastUpdatedEndDate=${endDate}`;
                    }
                }
                this.http.get(eventUrl).subscribe((data) => {
                    const returnObject = data.trackedEntityInstances.map((resultRow) => {
                        return this.prepareDataObjectFromTEI(resultRow, metadata, null, null, true);
                    });
                    observer.next(returnObject);
                    observer.complete();
                }, (error1) => observer.error());
            }
        });
    }
    getTrackedEntityInstanceWithEvents(key, stageKey, ou, ouMode = 'SELECTED', filter = '', startDate = null, endDate = null, dateType = 'program', page = 300) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
            if (!metadata) {
                observer.next([]);
                observer.complete();
            }
            else {
                const fieldFilters = '&fields=created,orgUnit,trackedEntityInstance,lastUpdated,enrollments[storedBy,enrollmentDate,enrollment,events[event,program,programStage,orgUnit,trackedEntityInstance,eventDate,storedBy,dataValues[dataElement,value]]],attributes[storedBy,value,attribute]';
                let eventUrl = `trackedEntityInstances.json?ou=${ou}&ouMode=${ouMode}&program=${metadata.program}&pageSize=${page}&${filter}${fieldFilters}`;
                if (startDate) {
                    if (dateType === 'program') {
                        eventUrl += `&programStartDate=${startDate}&programEndDate=${endDate}`;
                    }
                    else {
                        eventUrl += `&lastUpdatedStartDate=${startDate}&lastUpdatedEndDate=${endDate}`;
                    }
                }
                else if (endDate) {
                    eventUrl += `&lastUpdatedEndDate=${endDate}`;
                }
                this.http.get(eventUrl).subscribe((data) => {
                    const returnObject = data.trackedEntityInstances.map((resultRow) => {
                        const dataObject = {};
                        dataObject['id'] = resultRow['trackedEntityInstance'];
                        metadata.attributes.forEach((attribute) => {
                            const attribute_name = this._getAttributeKeyId(metadata.attributes, attribute.key);
                            const dataElement = resultRow.attributes.find(item => item['attribute'] === attribute_name);
                            if (dataElement) {
                                dataObject[attribute.key] = dataElement['value'];
                            }
                        });
                        const enrollmentItem = resultRow['enrollments'][0];
                        const enrollment_id = enrollmentItem
                            ? enrollmentItem.enrollment
                            : '';
                        const enrollment_date = enrollmentItem
                            ? enrollmentItem.enrollmentDate
                            : '';
                        const storedBy = enrollmentItem
                            ? enrollmentItem.storedBy
                            : '';
                        const events = enrollmentItem ? enrollmentItem['events'] : [];
                        return Object.assign(Object.assign({}, dataObject), { items: this.mapEventToObject(key, stageKey, events), enrollment_id, organisation_unit_id: resultRow['orgUnit'], lastUpdated: enrollment_date, created: resultRow['created'] ? resultRow['created'] : enrollment_date, inactive: resultRow['inactive'], storedBy });
                    });
                    observer.next(returnObject);
                    observer.complete();
                }, (error1) => observer.error());
            }
        });
    }
    getOneTrackedEntityInstance(instanceId, key, stageKey) {
        const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
        const stage = metadata.stage[stageKey];
        return this.http
            .get(`trackedEntityInstances/${instanceId}.json?fields=*`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resultRow) => {
            const dataObject = {};
            dataObject['id'] = resultRow['trackedEntityInstance'];
            metadata.attributes.forEach((attribute) => {
                const attribute_name = this._getAttributeKeyId(metadata.attributes, attribute.key);
                const dataElement = resultRow.attributes.find(item => item['attribute'] === attribute_name);
                if (dataElement) {
                    dataObject[attribute.key] = dataElement['value'];
                }
            });
            const enrollments = resultRow['enrollments'][0];
            let items = [];
            let storedBy = '';
            if (enrollments) {
                storedBy = enrollments ? enrollments.storedBy : '';
                const events = enrollments['events'];
                if (events && stageKey) {
                    items = this.mapEventToObject(key, stageKey, events);
                }
            }
            return Object.assign(Object.assign({}, dataObject), { enrollment_id: enrollments ? enrollments.enrollment : '', organisation_unit_id: resultRow['orgUnit'], lastUpdated: resultRow['lastUpdated'], created: enrollments ? enrollments.enrollmentDate : '', inactive: resultRow['inactive'], participants: items, storedBy });
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(null))));
    }
    getOneTrackedEntityInstanceMultipleEvents(instanceId, key, stages) {
        const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
        return this.http
            .get(`trackedEntityInstances/${instanceId}.json?fields=*`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resultRow) => {
            const dataObject = {};
            dataObject['id'] = resultRow['trackedEntityInstance'];
            metadata.attributes.forEach((attribute) => {
                const attribute_name = this._getAttributeKeyId(metadata.attributes, attribute.key);
                const dataElement = resultRow.attributes.find(item => item['attribute'] === attribute_name);
                if (dataElement) {
                    dataObject[attribute.key] = dataElement['value'];
                }
            });
            const enrollments = resultRow['enrollments'][0];
            const items = {};
            let storedBy = '';
            if (enrollments) {
                storedBy = enrollments ? enrollments.storedBy : '';
                const events = enrollments['events'];
                Object.keys(stages).forEach((s) => {
                    items[s] = this.mapEventToObject(key, stages[s], events);
                });
            }
            return Object.assign(Object.assign(Object.assign(Object.assign({}, dataObject), { enrollment_id: enrollments ? enrollments.enrollment : '', organisation_unit_id: resultRow['orgUnit'], lastUpdated: resultRow['lastUpdated'], created: enrollments ? enrollments.enrollmentDate : '', inactive: resultRow['inactive'] }), items), { storedBy });
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(null))));
    }
    mapEventToObject(key, stageKey, events) {
        const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
        const stage = metadata.stage[stageKey];
        return events
            .filter((i) => i.programStage === stage.id)
            .map((event) => {
            const eventDataObject = {};
            eventDataObject['id'] = event.event;
            eventDataObject['organisation_unit_id'] = event.orgUnit;
            eventDataObject['trackedEntityInstance'] = event.trackedEntityInstance;
            eventDataObject['enrollment'] = event.enrollment;
            eventDataObject['created'] = event.eventDate;
            eventDataObject['lastUpdated'] = event.lastUpdated;
            eventDataObject['programStage'] = event.programStage;
            eventDataObject['storedBy'] = event.storedBy;
            if (event.notes) {
                eventDataObject['notes'] = event.notes.map(i => i.value).join(', ');
            }
            stage.dataElements.forEach((element) => {
                const attribute_name = this._getAttributeKeyId(stage.dataElements, element.key);
                const dataElement = event.dataValues.find(item => item['dataElement'] === attribute_name);
                if (dataElement) {
                    eventDataObject[element.key] = dataElement['value'];
                }
            });
            return eventDataObject;
        });
    }
    getOfflineTrackedEntityInstance(key, ou, ouMode = 'SELECTED', filter = '') {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
            const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
            if (!metadata) {
                observer.next([]);
                observer.complete();
            }
            else {
                if (metadata.storageKey) {
                    // this.localDbService
                    //   .getAll(metadata.storageKey)
                    //   .subscribe((items: any[]) =>
                    //   {
                    //   if (items.length !== 0) {
                    //     observer.next(items);
                    //     observer.complete();
                    //   } else {
                    //     this.getTrackedEntityInstance(
                    //       key,
                    //       ou,
                    //       ouMode,
                    //       filter
                    //     ).subscribe(
                    //       (data) => {
                    //         observer.next(data);
                    //         observer.complete();
                    //       },
                    //       (error1) => observer.error()
                    //     );
                    //   // }
                    // });
                }
                else {
                    this.getTrackedEntityInstance(key, ou, ouMode, filter).subscribe((data) => {
                        observer.next(data);
                        observer.complete();
                    }, (error1) => observer.error());
                }
            }
        });
    }
    /**
     * this function will be used to prepare a dhis2 payload
     * @param key
     * @param ou
     * @param values
     * @param action
     * @param trackedEntityInstance
     * @param eventDate
     */
    prepareTrackedEntityPayload(key, ou, values, trackedEntityInstance = null, eventDate = null, enrollment = null) {
        const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
        const date = eventDate || new Date().toISOString().substring(0, 10);
        const useEnrolment = enrollment ? enrollment : this.makeid();
        const returnItem = {
            trackedEntityType: metadata.id,
            orgUnit: ou,
            trackedEntityInstance: trackedEntityInstance
                ? trackedEntityInstance
                : this.makeid(),
            attributes: metadata.attributes.map((attribute) => {
                return {
                    attribute: attribute.id,
                    value: values[attribute.key],
                };
            }),
            enrollments: [
                {
                    orgUnit: ou,
                    program: metadata.program,
                    enrollmentDate: date,
                    incidentDate: date,
                    enrollment: useEnrolment,
                },
            ],
        };
        return returnItem;
    }
    /**
     * This function will prepare an event payload ready to be sent to the server
     * @param key
     * @param ou
     * @param trackedEntityInstance
     * @param stageKey
     * @param enrollment
     * @param values
     * @param event
     * @param date
     */
    prepareEvents(key, ou, trackedEntityInstance, stageKey, enrollment, values, event = null, date = null) {
        const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
        const stage = metadata.stage[stageKey];
        const eventData = {
            program: metadata.program,
            programStage: stage.id,
            orgUnit: ou,
            notes: [],
            status: 'ACTIVE',
            eventDate: date ? date : new Date().toISOString().substring(0, 10),
            dataValues: stage.dataElements.map((dataElement) => {
                return {
                    dataElement: dataElement.id,
                    value: values[dataElement.key],
                };
            }),
        };
        if (trackedEntityInstance !== null) {
            eventData['trackedEntityInstance'] = trackedEntityInstance;
        }
        if (enrollment !== null) {
            eventData['enrollment'] = enrollment;
        }
        if (event) {
            eventData['event'] = event;
        }
        return eventData;
    }
    prepareDataObjectFromTEI(resultRow, metadata, username = null, previousEvents = null, enrollmentDetails = true) {
        const dataObject = {};
        dataObject['id'] = resultRow['trackedEntityInstance'];
        metadata.attributes.forEach((attribute) => {
            const attribute_name = this._getAttributeKeyId(metadata.attributes, attribute.key);
            const dataElement = resultRow.attributes.find(item => item['attribute'] === attribute_name);
            if (dataElement) {
                dataObject[attribute.key] = dataElement['value'];
            }
        });
        const enrollmentItem = enrollmentDetails ? resultRow['enrollments'][0] : null;
        const enrollment_id = enrollmentItem
            ? enrollmentItem.enrollment
            : '';
        let events = enrollmentItem ? enrollmentItem.events : [];
        events = previousEvents ? [...events, ...previousEvents] : events;
        const enrollment_date = enrollmentItem
            ? enrollmentItem.enrollmentDate
            : '';
        const storedBy = enrollmentItem
            ? enrollmentItem.storedBy || username
            : username;
        return Object.assign(Object.assign(Object.assign(Object.assign({}, dataObject), { events }), { enrollment_id }), { organisation_unit_id: resultRow['orgUnit'], lastUpdated: enrollment_date, created: resultRow['created'] ? resultRow['created'] : enrollment_date, inactive: resultRow['inactive'], storedBy });
    }
    prepareCompleteTrackedEntity(key, stageKey, ou, trackedEntityValues, trackedEntityInstance = null, enrollment = null, eventValues, lastUpdated = null, eventDate = null) {
        const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
        const stage = metadata.stage[stageKey];
        const useEnrolment = enrollment ? enrollment : this.makeid();
        const useTrackedEntityInstance = trackedEntityInstance
            ? trackedEntityInstance
            : this.makeid();
        const date = eventDate || new Date().toISOString().substring(0, 10);
        const returnItem = {
            trackedEntityType: metadata.id,
            trackedEntityInstance: useTrackedEntityInstance,
            orgUnit: ou,
            attributes: metadata.attributes.map((attribute) => {
                return {
                    attribute: attribute.id,
                    value: trackedEntityValues[attribute.key],
                };
            }),
            lastUpdated: new Date().toISOString().slice(0, -1),
            enrollments: [
                {
                    orgUnit: ou,
                    program: metadata.program,
                    enrollment: useEnrolment,
                    trackedEntityInstance: useTrackedEntityInstance,
                    trackedEntityType: metadata.id,
                    enrollmentDate: date
                        ? date
                        : new Date().toISOString().substring(0, 10),
                    incidentDate: date ? date : new Date().toISOString().substring(0, 10),
                    lastUpdated: new Date().toISOString(),
                    events: eventValues.map((event) => {
                        const eventId = event.id ? event.id : this.makeid();
                        return {
                            program: metadata.program,
                            programStage: stage.id,
                            orgUnit: ou,
                            notes: [],
                            status: 'ACTIVE',
                            event: eventId,
                            enrollment: useEnrolment,
                            trackedEntityInstance: useTrackedEntityInstance,
                            eventDate: date
                                ? date
                                : new Date().toISOString().substring(0, 10),
                            lastUpdated: new Date().toISOString().slice(0, -1),
                            dataValues: stage.dataElements.map((dataElement) => {
                                return {
                                    dataElement: dataElement.id,
                                    value: event[dataElement.key],
                                };
                            }),
                        };
                    }),
                },
            ],
        };
        return returnItem;
    }
    prepareCompleteTrackedEntityMultipleStages(key, ou, trackedEntityValues, eventValues, eventDate, enrollment = null, trackedEntityInstance = null) {
        const metadata = _store_metadata_mappings_ts_programs__WEBPACK_IMPORTED_MODULE_1__["TrackedEntityTypes"][key];
        const useEnrolment = enrollment ? enrollment : this.makeid();
        const useTrackedEntityInstance = trackedEntityInstance
            ? trackedEntityInstance
            : this.makeid();
        const date = eventDate || new Date().toISOString().substring(0, 10);
        const returnItem = {
            trackedEntityType: metadata.id,
            trackedEntityInstance: useTrackedEntityInstance,
            orgUnit: ou,
            attributes: metadata.attributes.map((attribute) => {
                return {
                    attribute: attribute.id,
                    value: trackedEntityValues[attribute.key],
                };
            }),
            enrollments: [
                {
                    orgUnit: ou,
                    program: metadata.program,
                    enrollment: useEnrolment,
                    enrollmentDate: date
                        ? date
                        : new Date().toISOString().substring(0, 10),
                    incidentDate: date ? date : new Date().toISOString().substring(0, 10),
                    events: [].concat(...Object.keys(eventValues).map((stageKey) => {
                        const stage = metadata.stage[stageKey];
                        return eventValues[stageKey].map((event) => {
                            const eventId = event.id ? event.id : this.makeid();
                            return {
                                program: metadata.program,
                                programStage: stage.id,
                                orgUnit: ou,
                                notes: [],
                                status: 'ACTIVE',
                                event: eventId,
                                enrollment: useEnrolment,
                                trackedEntityInstance: useTrackedEntityInstance,
                                eventDate: date
                                    ? date
                                    : new Date().toISOString().substring(0, 10),
                                dataValues: stage.dataElements.map((dataElement) => {
                                    return {
                                        dataElement: dataElement.id,
                                        value: event[dataElement.key],
                                    };
                                }),
                            };
                        });
                    })),
                },
            ],
        };
        return returnItem;
    }
    /**
     * finding the position of the item in rows- used when fetching data
     * @param analyticsObjectHeaders : Array
     * @param name : String ['ou','dx','co','pe',....]
     * @returns {number}
     * @private
     */
    _getTitleIndex(analyticsObjectHeaders, name) {
        return analyticsObjectHeaders.findIndex((i) => i.name === name);
    }
    _getAttributeKeyId(attributes, key) {
        const attributeItem = attributes.find(i => i.key === key);
        return attributeItem ? attributeItem.id : null;
    }
    _getDataValuesElement(dataValues, dataElement) {
        return dataValues.find((dataValue) => dataValue.dataElement === dataElement);
    }
    _getRowItems(position, array) {
        const return_array = [];
        for (const item of array) {
            if (return_array.indexOf(item[position]) === -1) {
                return_array.push(item[position]);
            }
        }
        return return_array;
    }
}
TrackerService.ɵfac = function TrackerService_Factory(t) { return new (t || TrackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_client_service__WEBPACK_IMPORTED_MODULE_4__["HttpClientService"])); };
TrackerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TrackerService, factory: TrackerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 28, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", 2, "background-color", "rgb(46, 1, 1)"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], [2, "padding-left", "10px"], ["aria-hidden", "true", 1, "fa", "fa-bars", 2, "color", "white", "cursor", "pointer"], ["src", "assets/jostano-logo.png", "height", "50px", "width", "50px", 1, "avatar"], [2, "color", "white", "letter-spacing", "5px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "JOSTANO INVESTMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Dropdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "fT3M":
/*!*******************************************************!*\
  !*** ./src/app/shared/animations/router-animation.ts ***!
  \*******************************************************/
/*! exports provided: ROUTE_ANIMATIONS_ELEMENTS, routeAnimations, isRouteAnimationsAll, isRouteAnimationsNone, isRouteAnimationsPage, isRouteAnimationsElements, fadeIn, fadeSmooth, fadeOut, fadeInOut, listStateTrigger, listState, listAnimation, itemAnimation, tableSize, formSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_ANIMATIONS_ELEMENTS", function() { return ROUTE_ANIMATIONS_ELEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function() { return routeAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsAll", function() { return isRouteAnimationsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsNone", function() { return isRouteAnimationsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsPage", function() { return isRouteAnimationsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsElements", function() { return isRouteAnimationsElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeSmooth", function() { return fadeSmooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listStateTrigger", function() { return listStateTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listState", function() { return listState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAnimation", function() { return listAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemAnimation", function() { return itemAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableSize", function() { return tableSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formSize", function() { return formSize; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations.service */ "Emfe");


const ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';
const STEPS_ALL = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter > *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, position: 'fixed' }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-3%)', opacity: 0 })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
        ], { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(15%)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
    ]), { optional: true })
];
const STEPS_NONE = [];
const STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
const STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
const routeAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsAll, STEPS_ALL),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsNone, STEPS_NONE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsPage, STEPS_PAGE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsElements, STEPS_ELEMENTS)
]);
function isRouteAnimationsAll() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('ALL');
}
function isRouteAnimationsNone() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('NONE');
}
function isRouteAnimationsPage() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('PAGE');
}
function isRouteAnimationsElements() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('ELEMENTS');
}
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(15%)', opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 })))
]);
const fadeSmooth = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeSmooth', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.3 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(15%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ])
    ])
]);
const fadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(15%)', opacity: 0 })))
]);
const fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
]);
const listStateTrigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listState', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateY(15%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        offset: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translateY(0)'
                    }))
                ])
            ])
        ], { optional: true })
    ])
]);
const listState = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0,
                transform: 'translateY(15%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        opacity: 1,
                        offset: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'translateY(0)'
                    }))
                ])
            ])
        ], { optional: true })
    ])
]);
const listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 })], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, height: '*' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 }))
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('300ms', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                offset: 1
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0)'
            }))
        ])
    ]), { optional: true })
], { params: { time: '.6s ease' } });
const itemAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.item', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('.item', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(300, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    offset: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateY(0)'
                }))
            ])
        ])
    ], { optional: true })
], { params: { time: '.6s ease' } });
const tableSize = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('tableSize', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('eighty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '62%',
        'margin-right': '2%',
        float: 'left'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('sixty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '42%',
        'margin-right': '2%',
        float: 'left'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('largeForm', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '23%',
        'margin-right': '2%',
        float: 'left'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '0%',
        'margin-right': '0%',
        opacity: '0',
        float: 'left',
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hundred', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '100%',
        float: 'left'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('eighty <=> hundred', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('sixty <=> hundred', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('largeForm <=> hundred', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('full => hundred', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hundred => full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in'))
]);
const formSize = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('formSize', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('twenty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '36%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('sixty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '56%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('largeForm', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '75%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '100%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        width: '0px',
        float: 'left',
        display: 'none',
        transform: 'scale(0, 0)',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('twenty => zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0, 0)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('zero => twenty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '36%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1, 1)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('sixty => zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0, 0)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('zero => sixty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '56%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1, 1)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('largeForm => zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0, 0)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('zero => largeForm', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '75%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1, 1)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('full => zero', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0, 0)' }))
    ])),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('zero => full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: '100%' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1, 1)' }))
    ]))
]);


/***/ }),

/***/ "gkM4":
/*!*************************************************!*\
  !*** ./src/app/services/http-client.service.ts ***!
  \*************************************************/
/*! exports provided: HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _manifest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manifest.service */ "RtZI");






class HttpClientService {
    constructor(httpClient, manifestService) {
        this.httpClient = httpClient;
        this.manifestService = manifestService;
    }
    createDHISAuthorizationHeader(token) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: 'Basic ' + token });
        return headers;
    }
    get(url, includeVersionNumber = false, preferPreviousApiVersion = false, useRootUrl = true) {
        const rootUrlPromise = useRootUrl
            ? this.manifestService.getRootUrl()
            : this._getApiRootUrl(includeVersionNumber, preferPreviousApiVersion);
        const token = localStorage.getItem('token');
        const headers = this.createDHISAuthorizationHeader(token);
        return rootUrlPromise.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((rootUrl) => {
            return this.httpClient
                .get(rootUrl + url, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    }
    getImage(url, includeVersionNumber = false, preferPreviousApiVersion = false, useRootUrl = true) {
        const rootUrlPromise = useRootUrl
            ? this.manifestService.getRootUrl()
            : this._getApiRootUrl(includeVersionNumber, preferPreviousApiVersion);
        const token = localStorage.getItem('token');
        const headers = this.createDHISAuthorizationHeader(token);
        return rootUrlPromise.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((rootUrl) => {
            return this.httpClient
                .get(rootUrl + url, { headers, responseType: 'arraybuffer' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    }
    getBase(url, includeVersionNumber = false, preferPreviousApiVersion = false, useRootUrl = true) {
        const rootUrlPromise = useRootUrl
            ? this.manifestService.getRootUrl()
            : this._getApiRootUrl(includeVersionNumber, preferPreviousApiVersion);
        const token = localStorage.getItem('token');
        const headers = this.createDHISAuthorizationHeader(token);
        return rootUrlPromise.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((rootUrl) => {
            const newUrl = rootUrl.replace('/api', '');
            return this.httpClient
                .get(newUrl + url, { headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    }
    post(url, data, includeVersionNumber = false, preferPreviousApiVersion = false, useRootUrl = true, headerOptions) {
        const rootUrlPromise = useRootUrl
            ? this.manifestService.getRootUrl()
            : this._getApiRootUrl(includeVersionNumber, preferPreviousApiVersion);
        const token = localStorage.getItem('token');
        const headers = this.createDHISAuthorizationHeader(token);
        return rootUrlPromise.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((rootUrl) => this.httpClient
            .post(rootUrl + url, data, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    }
    put(url, data, includeVersionNumber = false, preferPreviousApiVersion = false, useRootUrl = true) {
        const rootUrlPromise = useRootUrl
            ? this.manifestService.getRootUrl()
            : this._getApiRootUrl(includeVersionNumber, preferPreviousApiVersion);
        const token = localStorage.getItem('token');
        const headers = this.createDHISAuthorizationHeader(token);
        return rootUrlPromise.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((rootUrl) => this.httpClient
            .put(rootUrl + url, data, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    }
    delete(url, includeVersionNumber = false, preferPreviousApiVersion = false, useRootUrl = true) {
        const rootUrlPromise = useRootUrl
            ? this.manifestService.getRootUrl()
            : this._getApiRootUrl(includeVersionNumber, preferPreviousApiVersion);
        const token = localStorage.getItem('token');
        const headers = this.createDHISAuthorizationHeader(token);
        return rootUrlPromise.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((rootUrl) => this.httpClient
            .delete(rootUrl + url, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this._handleError));
    }
    // private methods
    _handleError(err) {
        let error = null;
        if (err.error instanceof ErrorEvent) {
            error = {
                message: err.error,
                status: err.status,
                statusText: err.statusText,
            };
        }
        else {
            error = {
                message: err.error instanceof Object
                    ? err.error.message
                    : err.error || err.message,
                status: err.status,
                statusText: err.statusText,
            };
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    }
    _getApiRootUrl(includeVersionNumber = false, preferPreviousVersion = false) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(`/api/`);
    }
}
HttpClientService.ɵfac = function HttpClientService_Factory(t) { return new (t || HttpClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_manifest_service__WEBPACK_IMPORTED_MODULE_4__["ManifestService"])); };
HttpClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HttpClientService, factory: HttpClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kETu":
/*!*************************************************************************!*\
  !*** ./src/app/store/finance-accounting/expenses/expenses.selectors.ts ***!
  \*************************************************************************/
/*! exports provided: selectExpenseState, selectAll, selectEntities, selectLoading, selectLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectExpenseState", function() { return selectExpenseState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoaded", function() { return selectLoaded; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _expenses_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenses.reducer */ "HH8J");


const selectExpenseState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('expenses');
const selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectExpenseState, _expenses_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const selectEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectExpenseState, _expenses_reducer__WEBPACK_IMPORTED_MODULE_1__["selectEntities"]);
const selectLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectExpenseState, _expenses_reducer__WEBPACK_IMPORTED_MODULE_1__["selectLoading"]);
const selectLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectExpenseState, _expenses_reducer__WEBPACK_IMPORTED_MODULE_1__["selectLoaded"]);


/***/ }),

/***/ "lD+8":
/*!***********************************************************************!*\
  !*** ./src/app/store/finance-accounting/expenses/expenses.actions.ts ***!
  \***********************************************************************/
/*! exports provided: loadExpensess, addExpense, addExpenses, GetExpenses, StartLoading, DoneLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExpensess", function() { return loadExpensess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExpense", function() { return addExpense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExpenses", function() { return addExpenses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetExpenses", function() { return GetExpenses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartLoading", function() { return StartLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneLoading", function() { return DoneLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadExpensess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Expenses] Load Expensess');
const addExpense = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Expense] Add Expense', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addExpenses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Expenses] Add expenses', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const GetExpenses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Expenses] Get expenses');
const StartLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Expenses] Initiate loading');
const DoneLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Expenses] Done Loading');


/***/ }),

/***/ "lNqA":
/*!*******************************************************************!*\
  !*** ./src/app/store/finance-accounting/income/income.reducer.ts ***!
  \*******************************************************************/
/*! exports provided: incomeFeatureKey, adapter, initialState, incomeReducer, selectLoading, selectLoaded, selectAll, selectIds, selectEntities, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incomeFeatureKey", function() { return incomeFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incomeReducer", function() { return incomeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoaded", function() { return selectLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _income_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./income.actions */ "Y3/W");



const incomeFeatureKey = 'income';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    loading: false,
    loaded: false
});
const incomeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_income_actions__WEBPACK_IMPORTED_MODULE_2__["startLoading"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_income_actions__WEBPACK_IMPORTED_MODULE_2__["doneLoading"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: false, loaded: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_income_actions__WEBPACK_IMPORTED_MODULE_2__["addIncome"], (state, { income }) => {
    return adapter.addOne(income, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_income_actions__WEBPACK_IMPORTED_MODULE_2__["addIncomes"], (state, { incomes }) => {
    return adapter.addMany(incomes, state);
}));
const selectLoading = (state) => state.loading;
const selectLoaded = (state) => state.loaded;
const { selectAll, selectIds, selectEntities } = adapter.getSelectors();
function reducer(state, action) {
    return incomeReducer(state, action);
}


/***/ }),

/***/ "lkLn":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/data-table/data-table.component.ts ***!
  \**********************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");







function DataTableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please wait..... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.tableConfigurations.addText ? ctx_r1.tableConfigurations.addText : "Add", " ");
} }
function DataTableComponent_ng_container_4_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_ng_container_4_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r13 + 1);
} }
function DataTableComponent_ng_container_4_ng_container_5_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r14.label, " ");
} }
function DataTableComponent_ng_container_4_ng_container_5_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const column_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r14.type === "number" ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r18[column_r14.name], "0.2-2") : element_r18[column_r14.name], " ");
} }
function DataTableComponent_ng_container_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableComponent_ng_container_4_ng_container_5_th_2_Template, 2, 1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableComponent_ng_container_4_ng_container_5_td_3_Template, 3, 4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", column_r14.name);
} }
function DataTableComponent_ng_container_4_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function DataTableComponent_ng_container_4_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function DataTableComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableComponent_ng_container_4_th_3_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableComponent_ng_container_4_td_4_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DataTableComponent_ng_container_4_ng_container_5_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DataTableComponent_ng_container_4_tr_6_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTableComponent_ng_container_4_tr_7_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tableConfigurations.tableColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
} }
function DataTableComponent_ng_template_5_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DataTableComponent_ng_template_5_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r30 + 1);
} }
function DataTableComponent_ng_template_5_ng_container_4_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r31.label, " ");
} }
function DataTableComponent_ng_template_5_ng_container_4_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    const column_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35[column_r31.name], " ");
} }
function DataTableComponent_ng_template_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableComponent_ng_template_5_ng_container_4_th_2_Template, 2, 1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableComponent_ng_template_5_ng_container_4_td_3_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", column_r31.name);
} }
function DataTableComponent_ng_template_5_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r25.displayedColumns.length);
} }
function DataTableComponent_ng_template_5_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function DataTableComponent_ng_template_5_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function DataTableComponent_ng_template_5_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
const _c0 = function () { return ["disclaimer"]; };
function DataTableComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableComponent_ng_template_5_th_2_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableComponent_ng_template_5_td_3_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableComponent_ng_template_5_ng_container_4_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DataTableComponent_ng_template_5_td_6_Template, 3, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTableComponent_ng_template_5_tr_7_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DataTableComponent_ng_template_5_tr_8_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DataTableComponent_ng_template_5_tr_9_Template, 1, 0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r4.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.tableConfigurations.tableColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
class DataTableComponent {
    constructor() {
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = false;
    }
    ngOnInit() {
        this.initData();
    }
    ngOnChanges() {
        this.initData();
    }
    initData() {
        this.displayedColumns = ['index', ...this.tableConfigurations.tableColumns.map(col => col.name)];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tableList);
    }
    onAdd() {
        this.add.emit();
    }
}
DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(); };
DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["app-data-table"]], inputs: { tableList: "tableList", loading: "loading", tableConfigurations: "tableConfigurations" }, outputs: { add: "add" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 4, consts: [[1, "row", 2, "width", "100%"], ["class", "col-sm-12", 4, "ngIf"], [1, "col-sm-12"], [4, "ngIf", "ngIfElse"], ["noData", ""], ["mode", "indeterminate"], [1, "btn", "add-btn", "mb-2", 2, "float", "right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "matColumnDef"], ["mat-header-row", ""], ["mat-row", ""], ["matColumnDef", "disclaimer"], ["mat-footer-cell", "", "style", "text-align: center", 4, "matFooterCellDef"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-footer-cell", "", 2, "text-align", "center"], [1, "text-muted"], ["mat-footer-row", ""]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableComponent_div_2_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableComponent_ng_container_4_Template, 8, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DataTableComponent_ng_template_5_Template, 10, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableConfigurations.showAddButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableList && ctx.tableList.length)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatFooterRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.add-btn[_ngcontent-%COMP%] {\n  border: 1px #2e0101 solid;\n  border-radius: 10px;\n  padding: 5px 30px 5px 30px;\n  color: #2e0101;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZC1idG4ge1xuICAgIGJvcmRlcjogMXB4IHJnYig0NiwgMSwgMSkgc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggMzBweCA1cHggMzBweDtcbiAgICBjb2xvcjogcmdiKDQ2LCAxLCAxKTtcbn0iXX0= */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _manifest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manifest.service */ "RtZI");





let authenticationtoken;
class UserService {
    constructor(manifestService, http) {
        this.manifestService = manifestService;
        this.http = http;
    }
    removeLocalStorageItem(key) {
        localStorage.removeItem(`${key}`);
    }
    prepareToken(credentials) {
        const { username, password } = credentials;
        const token = btoa(username + ':' + password);
        return token;
    }
    createDHISAuthorizationHeader(token) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: 'Basic ' + token });
        return headers;
    }
    login(credentials) {
        const meUrl = 'me.json?fields=id,name,displayName,created,lastUpdated,email,dataViewOrganisationUnits[id,name,level,parent[id,name]],organisationUnits[id,name,level,parent[id,name]],userGroups[id,name],userCredentials[username,lastLogin,userRoles[authorities]]';
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            const token = this.prepareToken(credentials);
            authenticationtoken = token;
            // this.removeLocalStorageItem('facility-tool-web-token');
            const headers = this.createDHISAuthorizationHeader(token);
            this.manifestService.getRootUrl().subscribe((rootUrl) => {
                this.http.get(rootUrl + meUrl, { headers }).subscribe((data) => {
                    console.log('data', data);
                    localStorage.setItem('token', token);
                    localStorage.setItem('current-user', JSON.stringify(data));
                    // localStorage.setItem(
                    //   'facility-tool-user-organisation-unit',
                    //   // this.getUserOu(data)
                    // );
                    observer.next('Login successful..');
                    observer.complete();
                }, (error1) => {
                    const errorMessage = error1.message;
                    console.log({ errorMessage });
                    if (errorMessage.indexOf('Unauthorized') > -1) {
                        observer.error('Incorrect Username or Password');
                    }
                    else if (errorMessage.toLowerCase().indexOf('unknown') > -1) {
                        observer.error('There is no internet connection');
                    }
                    else {
                        observer.error('There is problem with server please contact the administrator');
                    }
                });
            });
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_manifest_service__WEBPACK_IMPORTED_MODULE_3__["ManifestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "taDA":
/*!*********************************************************************!*\
  !*** ./src/app/store/finance-accounting/income/income.selectors.ts ***!
  \*********************************************************************/
/*! exports provided: selectIncomeState, selectAll, selectEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIncomeState", function() { return selectIncomeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _income_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./income.reducer */ "lNqA");


const selectIncomeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('income');
const selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIncomeState, _income_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const selectEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIncomeState, _income_reducer__WEBPACK_IMPORTED_MODULE_1__["selectEntities"]);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _modules_finance_accounting_finance_finance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/finance-accounting/finance/finance.component */ "ZJaw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        children: [
            {
                path: '',
                component: _modules_finance_accounting_finance_finance_component__WEBPACK_IMPORTED_MODULE_3__["FinanceComponent"]
            },
            {
                path: 'finance-accounting',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-finance-accounting-finance-accounting-module */ "modules-finance-accounting-finance-accounting-module").then(__webpack_require__.bind(null, /*! ./modules/finance-accounting/finance-accounting.module */ "+bNG")).then((m) => m.FinanceAccountingModule),
                data: { state: 'finance-accounting' },
            },
            {
                path: 'transportation-logistic',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-transportation-logistic-transportation-logistic-module */ "modules-transportation-logistic-transportation-logistic-module").then(__webpack_require__.bind(null, /*! ./modules/transportation-logistic/transportation-logistic.module */ "0jW8")).then((m) => m.TransportationLogisticModule),
                data: { state: 'transportation-logistic' },
            },
            {
                path: 'shops-hardware',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-shops-hardware-shops-hardware-module */ "modules-shops-hardware-shops-hardware-module").then(__webpack_require__.bind(null, /*! ./modules/shops-hardware/shops-hardware.module */ "fyZ0")).then((m) => m.ShopsHardwareModule),
                data: { state: 'shops-hardware' },
            },
            {
                path: 'building-real-estates',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-building-real-estates-building-real-estates-module */ "modules-building-real-estates-building-real-estates-module").then(__webpack_require__.bind(null, /*! ./modules/building-real-estates/building-real-estates.module */ "KmvT")).then((m) => m.BuildingRealEstatesModule),
                data: { state: 'building-real-estates' },
            },
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                useHash: true,
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
                relativeLinkResolution: 'legacy'
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/animations/router-animation */ "fT3M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");











function LoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-bar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.authenticating = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authenticating = true;
            try {
                yield this.userService.login(this.loginForm.value).toPromise();
                this.router.navigate(['finance-accounting']);
            }
            catch (e) {
                console.error('Error', e);
            }
            this.authenticating = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 4, consts: [[1, "login-container"], [1, "login-page"], [1, "row", "login-box"], [1, "col-sm-4", 2, "background-color", "rgb(46, 2, 2)"], [1, "login-logo"], ["src", "assets/jostano-logo.png", "alt", "", "height", "100px", "width", "100px"], [2, "color", "white", "position", "relative", "top", "25%", "left", "15%", "right", "40%"], [1, "col-sm-8", "login-form"], [3, "formGroup"], [1, "row"], [1, "col-sm-12", "mt-4", 2, "text-align", "center"], [2, "color", "rgb(48, 2, 2)"], [1, "col-sm-12"], ["appearance", "outline"], ["type", "text", "matInput", "", "formControlName", "username", "autocomplete", "off"], ["type", "text", "matInput", "", "formControlName", "password", "autocomplete", "off"], ["class", "col-sm-12", 4, "ngIf"], [1, "login-btn", 3, "click"], ["mode", "indeterminate"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "JOSTANO INVESTMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 3, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.authenticating);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authenticating);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"]], styles: [".login-container[_ngcontent-%COMP%] {\n  background-image: url('jostano-login.png');\n  background-size: cover;\n  height: 100vh;\n  width: 100%;\n}\n\n.login-page[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background-color: black;\n  opacity: 0.9;\n}\n\n.login-box[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20vh;\n  bottom: 20vh;\n  left: 20vw;\n  right: 20vw;\n  z-index: 4;\n  height: 60vh;\n  width: 60vw;\n  background-color: white;\n  border-radius: 10px;\n}\n\n.top-layer[_ngcontent-%COMP%] {\n  background-color: #1a0000;\n  height: 100vh;\n  opacity: 0.9;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20%;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 30px;\n  padding: 10px;\n  background-color: #2e0202;\n  color: white;\n  font-weight: bold;\n}\n\n.login-logo[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20%;\n  left: 30%;\n  right: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVNBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQU5GOztBQW1CQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFoQkYiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubG9naW4tcGFnZSB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvam9zdGFuby1sb2dpbi5wbmcnKTtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgIGhlaWdodDogMTAwdmg7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyB9XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvam9zdGFuby1sb2dpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tcGFnZSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmxvZ2luLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHZoO1xuICBib3R0b206IDIwdmg7XG4gIGxlZnQ6IDIwdnc7XG4gIHJpZ2h0OiAyMHZ3O1xuICB6LWluZGV4OiA0O1xuICBoZWlnaHQ6IDYwdmg7XG4gIHdpZHRoOiA2MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnRvcC1sYXllciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMCwgMCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLy8gLmxvZ2luLWZvcm0ge1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiA1MCU7XG4vLyAgICAgbGVmdDogNTAlO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuLy8gfVxuXG4ubG9naW4tZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMCU7XG59XG5cbi5sb2dpbi1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCAyLCAyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiAzMCU7XG4gIHJpZ2h0OiAzMCU7XG59XG5cbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4vLyAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgICBjb2xvcjogd2hpdGU7XG4vLyAgICAgLy8gLm1hdC1pbnB1dC1lbGVtZW50IHtcbi8vICAgICAvLyAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcbi8vICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4vLyAgICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4vLyAgICAgLy8gICAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgICAvLyB9XG4vLyAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbi8vICAgICAgICAgY29sb3I6IHNsYXRlZ3JheTtcbi8vICAgICB9XG4vLyAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuLy8gICAgIH1cbi8vICAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xuLy8gICAgIH1cbi8vICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbi8vICAgICAgICAgY29sb3I6IHNsYXRlZ3JheTtcbi8vICAgICB9XG4vLyB9XG4iXX0= */"], data: { animation: [_shared_animations_router_animation__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]] } });


/***/ }),

/***/ "w55g":
/*!**************************************!*\
  !*** ./src/app/material/material.ts ***!
  \**************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");



































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ imports: [[
            // BrowserModule,
            // BrowserAnimationsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"]
        ], 
        // BrowserModule,
        // BrowserAnimationsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [
        // BrowserModule,
        // BrowserAnimationsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"]], exports: [
        // BrowserModule,
        // BrowserAnimationsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__["LayoutModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_31__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_33__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map