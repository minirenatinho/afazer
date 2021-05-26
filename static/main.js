(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/minirenatinho/Documents/repos/afazer-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "6Y4p":
/*!****************************************************!*\
  !*** ./src/app/items-list/items-list.component.ts ***!
  \****************************************************/
/*! exports provided: ItemsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsListComponent", function() { return ItemsListComponent; });
/* harmony import */ var _edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../edit-item-modal/edit-item-modal.component */ "XXMU");
/* harmony import */ var _add_item_modal_add_item_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-item-modal/add-item-modal.component */ "kcmx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _afazer_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../afazer-api.service */ "eMF/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ItemsListComponent_div_5_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, item_r3.context));
} }
function ItemsListComponent_div_5_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ItemsListComponent_div_5_div_1_br_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function ItemsListComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsListComponent_div_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const item_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.editItem(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ItemsListComponent_div_5_div_1_span_2_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ItemsListComponent_div_5_div_1_span_3_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ItemsListComponent_div_5_div_1_br_4_Template, 1, 0, "br", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const itemsList_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r2.stylizeItem(item_r3.context));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", itemsList_r1.indexOf(item_r3) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r3.context);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !item_r3.context);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3.description);
} }
function ItemsListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ItemsListComponent_div_5_div_1_Template, 9, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemsList_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r0.stylizeList());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", itemsList_r1);
} }
class ItemsListComponent {
    constructor(afazerApi, dialog) {
        this.afazerApi = afazerApi;
        this.dialog = dialog;
        this.contextItemsList = [[]];
        this.contextColorMap = { context: [], color: [] };
        this.separateItems = true;
        this.contextColorMap = {
            context: ['default', 'casa', 'estudo'],
            color: ['orange', 'yellow', 'red']
        };
    }
    ngOnInit() {
        this.listItems();
    }
    listItems() {
        this.afazerApi.listItems().subscribe(items => {
            this.contextItemsList = [[]];
            let index = 1;
            let found = false;
            items.result.map(item => {
                item.createdAt = new Date(item.createdAt).toLocaleDateString('pt-br');
                item.updatedAt = new Date(item.updatedAt).toLocaleDateString('pt-br');
                //clustering items by context
                if (!item.context) {
                    this.contextItemsList[0].push(item);
                }
                else {
                    for (let i = 1; i <= index; ++i) {
                        if (!found && this.contextItemsList[i] && this.contextItemsList[i][0].context == item.context) {
                            this.contextItemsList[i].push(item);
                            found = true;
                        }
                    }
                    if (!found) {
                        this.contextItemsList[index] = [];
                        this.contextItemsList[index].push(item);
                        ++index;
                    }
                }
                found = false;
            });
            this.contextItemsList = this.contextItemsList.reverse();
        });
    }
    addItem() {
        const refDialog = this.dialog.open(_add_item_modal_add_item_modal_component__WEBPACK_IMPORTED_MODULE_1__["AddItemModalComponent"], {
            disableClose: true,
            width: '100%',
            panelClass: 'custom-dialog-container'
        });
        refDialog.afterClosed().subscribe(() => {
            this.listItems();
        });
    }
    editItem(item) {
        const refDialog = this.dialog.open(_edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_0__["EditItemModalComponent"], {
            disableClose: true,
            width: '100%',
            panelClass: 'custom-dialog-container',
            data: { item }
        });
        refDialog.afterClosed().subscribe(() => {
            this.listItems();
        });
    }
    stylizeList() {
        if (this.separateItems)
            return 'flow-root';
        return 'blocks';
    }
    stylizeItem(context) {
        let color = this.contextColorMap.color[0];
        this.contextColorMap.context.map((value, index, array) => {
            if (value == context)
                color = this.contextColorMap.color[index];
        });
        return color;
    }
    changeItemsOrganization() {
        this.separateItems = !this.separateItems;
        this.listItems();
    }
}
ItemsListComponent.ɵfac = function ItemsListComponent_Factory(t) { return new (t || ItemsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_afazer_api_service__WEBPACK_IMPORTED_MODULE_3__["AfazerApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ItemsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ItemsListComponent, selectors: [["app-items-list"]], decls: 6, vars: 1, consts: [["id", "addButton", 3, "click"], ["id", "separateButton", 3, "click"], ["id", "itemsList"], [3, "display", 4, "ngFor", "ngForOf"], ["id", "itemDiv", 3, "click", 4, "ngFor", "ngForOf"], ["id", "itemDiv", 3, "click"], ["id", "headText", 4, "ngIf"], ["id", "invisible", 4, "ngIf"], [4, "ngIf"], ["id", "headText"], ["id", "invisible"]], template: function ItemsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsListComponent_Template_button_click_0_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ItemsListComponent_Template_button_click_2_listener() { return ctx.changeItemsOrganization(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u25B1\u25B1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ItemsListComponent_div_5_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contextItemsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["button[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 90px;\n    border-width: 5px;\n    border-radius: 100%;\n    border-color: orange;\n    background-color: white;\n    color: orange;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: orange;\n    color: white;\n}\n\n#addButton[_ngcontent-%COMP%] {\n    font-size: 75px;\n    bottom: 10%;\n    right: 6%;\n}\n\n#separateButton[_ngcontent-%COMP%] {\n    font-size: 30px;\n    bottom: 10%;\n    right: 16%;\n}\n\n#itemsList[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n\n#headText[_ngcontent-%COMP%] {\n    color: white;\n    font-weight: bold;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    font-size: 14px;\n}\n\n#invisible[_ngcontent-%COMP%] {\n    color: transparent;\n}\n\n#itemDiv[_ngcontent-%COMP%] {\n    padding: 0px 0px 10px 0px;\n    float: left;\n    width: 20%;\n    height: 200px;\n    overflow: hidden;\n    margin-bottom: 20px;\n}\n\n#itemDiv[_ngcontent-%COMP%]:hover {\n    background-color: rgba(255, 166, 0, 0.616);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlFQUFpRTtJQUNqRSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUMiLCJmaWxlIjoiaXRlbXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogb3JhbmdlO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNhZGRCdXR0b24ge1xuICAgIGZvbnQtc2l6ZTogNzVweDtcbiAgICBib3R0b206IDEwJTtcbiAgICByaWdodDogNiU7XG59XG5cbiNzZXBhcmF0ZUJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvdHRvbTogMTAlO1xuICAgIHJpZ2h0OiAxNiU7XG59XG5cbiNpdGVtc0xpc3Qge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNoZWFkVGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI2ludmlzaWJsZSB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4jaXRlbURpdiB7XG4gICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4jaXRlbURpdjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC42MTYpO1xufSJdfQ== */"] });


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

/***/ "IVRI":
/*!******************************************************************!*\
  !*** ./src/app/delete-item-modal/delete-item-modal.component.ts ***!
  \******************************************************************/
/*! exports provided: DeleteItemModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemModalComponent", function() { return DeleteItemModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _afazer_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../afazer-api.service */ "eMF/");




class DeleteItemModalComponent {
    constructor(afazerApi, matDialogRef, data) {
        this.afazerApi = afazerApi;
        this.matDialogRef = matDialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    cancel() {
        this.matDialogRef.close('cancel');
    }
    deleteItem() {
        this.afazerApi.deleteItem(this.data.item._id).subscribe(() => {
            this.matDialogRef.close('delete');
        });
    }
}
DeleteItemModalComponent.ɵfac = function DeleteItemModalComponent_Factory(t) { return new (t || DeleteItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_afazer_api_service__WEBPACK_IMPORTED_MODULE_2__["AfazerApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
DeleteItemModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteItemModalComponent, selectors: [["app-delete-item-modal"]], decls: 6, vars: 0, consts: [["id", "cancel-button", 1, "button", 3, "click"], ["id", "delete-button", 1, "button", 3, "click"]], template: function DeleteItemModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete this item permanently?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteItemModalComponent_Template_button_click_2_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteItemModalComponent_Template_button_click_4_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.button[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\n#cancel-button[_ngcontent-%COMP%] {\n    color: gray;\n}\n\n#cancel-button[_ngcontent-%COMP%]:hover {\n    background-color: gray;\n    color: white;\n}\n\n#delete-button[_ngcontent-%COMP%] {\n    color: rgb(214, 29, 29);\n}\n\n#delete-button[_ngcontent-%COMP%]:hover {\n    background-color: rgb(214, 29, 29);\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1pdGVtLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCIiwiZmlsZSI6ImRlbGV0ZS1pdGVtLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4jY2FuY2VsLWJ1dHRvbiB7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbiNjYW5jZWwtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2RlbGV0ZS1idXR0b24ge1xuICAgIGNvbG9yOiByZ2IoMjE0LCAyOSwgMjkpO1xufVxuXG4jZGVsZXRlLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjksIDI5KTtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"] });


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
    constructor() {
        this.title = 'afazer-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["id", "top"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Afazer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n    color: #FFF;\n}\n\n#top[_ngcontent-%COMP%] {\n    background-color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuI3RvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufSJdfQ== */"] });


/***/ }),

/***/ "XXMU":
/*!**************************************************************!*\
  !*** ./src/app/edit-item-modal/edit-item-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: EditItemModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemModalComponent", function() { return EditItemModalComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _delete_item_modal_delete_item_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delete-item-modal/delete-item-modal.component */ "IVRI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _afazer_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../afazer-api.service */ "eMF/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class EditItemModalComponent {
    constructor(afazerApi, dialog, matDialogRef, data) {
        this.afazerApi = afazerApi;
        this.dialog = dialog;
        this.matDialogRef = matDialogRef;
        this.data = data;
        this.titleInput = data.item.title;
        this.descriptionInput = data.item.description;
        this.contextInputModal = data.item.context;
    }
    ngOnInit() {
    }
    saveChanges() {
        this.data.item.title = this.titleInput;
        this.data.item.description = this.descriptionInput;
        this.data.item.context = this.contextInputModal;
        this.afazerApi.editItem(this.data.item).subscribe(() => {
            this.matDialogRef.close();
        });
    }
    discardChanges() {
        this.matDialogRef.close();
    }
    openDeleteModal() {
        const refDialog = this.dialog.open(_delete_item_modal_delete_item_modal_component__WEBPACK_IMPORTED_MODULE_1__["DeleteItemModalComponent"], {
            disableClose: true,
            width: '50%',
            panelClass: 'custom-dialog-container',
            data: this.data
        });
        refDialog.afterClosed().subscribe(result => {
            if (result == 'delete')
                this.matDialogRef.close();
        });
    }
}
EditItemModalComponent.ɵfac = function EditItemModalComponent_Factory(t) { return new (t || EditItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_afazer_api_service__WEBPACK_IMPORTED_MODULE_3__["AfazerApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
EditItemModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditItemModalComponent, selectors: [["edit-item-modal"]], inputs: { titleInput: "titleInput", descriptionInput: "descriptionInput", contextInputModal: "contextInputModal" }, decls: 12, vars: 5, consts: [["id", "close-button", "mat-button", "", 3, "click"], ["id", "titleInputModal", "name", "titleInputModal", "placeholder", "Title", 3, "ngModel", "ngModelChange"], ["id", "descriptionInputModal", "name", "descriptionInputModal", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["id", "contextInputModal", "name", "contextInputModal", "placeholder", "Context", 3, "ngModel", "ngModelChange"], [1, "buttons"], ["id", "save-button", "mat-button", "", 1, "button", 3, "click"], ["id", "delete-button", 1, "button", 3, "click"]], template: function EditItemModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditItemModalComponent_Template_button_click_0_listener() { return ctx.discardChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditItemModalComponent_Template_input_ngModelChange_2_listener($event) { return ctx.titleInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditItemModalComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.descriptionInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditItemModalComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.contextInputModal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditItemModalComponent_Template_button_click_8_listener() { return ctx.saveChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditItemModalComponent_Template_button_click_10_listener() { return ctx.openDeleteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "DELETE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.titleInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.descriptionInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.contextInputModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Updated: ", ctx.data.item.updatedAt, " | Created: ", ctx.data.item.createdAt, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".button[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\n#close-button[_ngcontent-%COMP%] {\n    float: right;\n    background: rgba(255, 255, 255, 0);\n    border: 0px;\n    width: 50px;\n    margin-bottom: 10px;\n}\n\n#close-button[_ngcontent-%COMP%]:hover {\n    background-color: gray;\n    color: white;\n}\n\n#descriptionInputModal[_ngcontent-%COMP%] {\n    font-size: 18px;\n    min-height: 100px;\n    margin-bottom: 10px;\n}\n\n#save-button[_ngcontent-%COMP%] {\n    color: rgb(25, 190, 25);\n}\n\n#save-button[_ngcontent-%COMP%]:hover {\n    background-color: rgb(25, 190, 25);\n    color: white;\n}\n\n#delete-button[_ngcontent-%COMP%] {\n    color: rgb(214, 29, 29);\n}\n\n#delete-button[_ngcontent-%COMP%]:hover {\n    background-color: rgb(214, 29, 29);\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtaXRlbS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCIiwiZmlsZSI6ImVkaXQtaXRlbS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuI2Nsb3NlLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI2Nsb3NlLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNkZXNjcmlwdGlvbklucHV0TW9kYWwge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jc2F2ZS1idXR0b24ge1xuICAgIGNvbG9yOiByZ2IoMjUsIDE5MCwgMjUpO1xufVxuXG4jc2F2ZS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMTkwLCAyNSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jZGVsZXRlLWJ1dHRvbiB7XG4gICAgY29sb3I6IHJnYigyMTQsIDI5LCAyOSk7XG59XG5cbiNkZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyOSwgMjkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items-list/items-list.component */ "6Y4p");
/* harmony import */ var _edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-item-modal/edit-item-modal.component */ "XXMU");
/* harmony import */ var _add_item_modal_add_item_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-item-modal/add-item-modal.component */ "kcmx");
/* harmony import */ var _delete_item_modal_delete_item_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delete-item-modal/delete-item-modal.component */ "IVRI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_7__["ItemsListComponent"],
        _edit_item_modal_edit_item_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditItemModalComponent"],
        _add_item_modal_add_item_modal_component__WEBPACK_IMPORTED_MODULE_9__["AddItemModalComponent"],
        _delete_item_modal_delete_item_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteItemModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "eMF/":
/*!***************************************!*\
  !*** ./src/app/afazer-api.service.ts ***!
  \***************************************/
/*! exports provided: AfazerApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfazerApiService", function() { return AfazerApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AfazerApiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://afazer-api.herokuapp.com/api/items';
        this.apiUrlDev = 'http://localhost:3000/api/items';
        this.userId = '5d3f4c7ab72b5a001727317a';
        this.userToken = '1d58c5b5-66d9-43d9-92db-c799c1d79363';
    }
    listItems() {
        return this.http.get(this.apiUrl, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'id': this.userId, 'token': this.userToken }) });
    }
    addItem(item) {
        return this.http.post(this.apiUrl, item, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'id': this.userId, 'token': this.userToken }) });
    }
    editItem(item) {
        return this.http.patch(this.apiUrl + '/' + item._id, item, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'id': this.userId, 'token': this.userToken }) });
    }
    deleteItem(itemId) {
        return this.http.delete(this.apiUrl + '/' + itemId, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'id': this.userId, 'token': this.userToken }) });
    }
}
AfazerApiService.ɵfac = function AfazerApiService_Factory(t) { return new (t || AfazerApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AfazerApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AfazerApiService, factory: AfazerApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kcmx":
/*!************************************************************!*\
  !*** ./src/app/add-item-modal/add-item-modal.component.ts ***!
  \************************************************************/
/*! exports provided: AddItemModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemModalComponent", function() { return AddItemModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _afazer_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../afazer-api.service */ "eMF/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class AddItemModalComponent {
    constructor(afazerApi, matDialogRef) {
        this.afazerApi = afazerApi;
        this.matDialogRef = matDialogRef;
        this.titleInput = '';
        this.descriptionInput = '';
        this.contextInput = '';
        this.newDate = new Date().toLocaleDateString('pt-br');
    }
    ;
    ngOnInit() {
    }
    save() {
        this.afazerApi.addItem({ title: this.titleInput, email: 'email', description: this.descriptionInput, context: this.contextInput }).subscribe(() => {
            this.matDialogRef.close();
        });
    }
    discard() {
        this.matDialogRef.close();
    }
}
AddItemModalComponent.ɵfac = function AddItemModalComponent_Factory(t) { return new (t || AddItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_afazer_api_service__WEBPACK_IMPORTED_MODULE_1__["AfazerApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
AddItemModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemModalComponent, selectors: [["app-add-item-modal"]], inputs: { titleInput: "titleInput", descriptionInput: "descriptionInput", contextInput: "contextInput" }, decls: 10, vars: 4, consts: [["id", "close-button", "mat-button", "", 3, "click"], ["id", "titleInputModal", "name", "titleInputModal", "placeholder", "Title", 3, "ngModel", "ngModelChange"], ["id", "descriptionInputModal", "name", "descriptionInputModal", "placeholder", "Description", 3, "ngModel", "ngModelChange"], ["id", "contextInputModal", "name", "contextInputModal", "placeholder", "Context", 3, "ngModel", "ngModelChange"], [1, "buttons"], ["id", "save-button", "mat-button", "", 1, "button", 3, "click"]], template: function AddItemModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemModalComponent_Template_button_click_0_listener() { return ctx.discard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemModalComponent_Template_input_ngModelChange_2_listener($event) { return ctx.titleInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemModalComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.descriptionInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddItemModalComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.contextInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddItemModalComponent_Template_button_click_8_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.titleInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.descriptionInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contextInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Created: ", ctx.newDate, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".button[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n#close-button[_ngcontent-%COMP%] {\n    float: right;\n    background: rgba(255, 255, 255, 0);\n    border: 0px;\n    width: 50px;\n    margin-bottom: 10px;\n}\n\n#close-button[_ngcontent-%COMP%]:hover {\n    background-color: gray;\n    color: white;\n}\n\n#descriptionInputModal[_ngcontent-%COMP%] {\n    font-size: 18px;\n    min-height: 100px;\n    margin-bottom: 10px;\n}\n\n#save-button[_ngcontent-%COMP%] {\n    color: rgb(25, 190, 25);\n}\n\n#save-button[_ngcontent-%COMP%]:hover {\n    background-color: rgb(25, 190, 25);;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1pdGVtLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFkZC1pdGVtLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2Nsb3NlLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI2Nsb3NlLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNkZXNjcmlwdGlvbklucHV0TW9kYWwge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jc2F2ZS1idXR0b24ge1xuICAgIGNvbG9yOiByZ2IoMjUsIDE5MCwgMjUpO1xufVxuXG4jc2F2ZS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMTkwLCAyNSk7O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });


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
/* harmony import */ var _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-list/items-list.component */ "6Y4p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_1__["ItemsListComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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