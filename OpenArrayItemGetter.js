"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var OpenArrayContainer_1 = require("@writetome51/open-array-container/OpenArrayContainer");
var getCopy_1 = require("@writetome51/array-non-modifying-getters-basic/getCopy");
var getAdjacentAt_1 = require("@writetome51/array-non-modifying-getters-basic/getAdjacentAt");
var getItem_1 = require("@writetome51/array-non-modifying-getters-basic/getItem");
var getFilteredResults_1 = require("@writetome51/array-non-modifying-getters-basic/getFilteredResults");
var getHead_1 = require("@writetome51/array-non-modifying-getters-basic/getHead");
var getTail_1 = require("@writetome51/array-non-modifying-getters-basic/getTail");
var getMiddle_1 = require("@writetome51/array-non-modifying-getters-basic/getMiddle");
var getAllAfterFirst_getAllBeforeFirst_1 = require("@writetome51/array-non-modifying-getters-intermediate/getAllAfterFirst_getAllBeforeFirst");
var getAllAfterLast_getAllBeforeLast_1 = require("@writetome51/array-non-modifying-getters-intermediate/getAllAfterLast_getAllBeforeLast");
var getAdjacentToValue_1 = require("@writetome51/array-non-modifying-getters-intermediate/getAdjacentToValue");
var getDuplicates_1 = require("@writetome51/array-get-duplicates-and-unique-items/getDuplicates");
var getUniqueItems_1 = require("@writetome51/array-get-duplicates-and-unique-items/getUniqueItems");
var OpenArrayItemGetter = /** @class */ (function (_super) {
    __extends(OpenArrayItemGetter, _super);
    function OpenArrayItemGetter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions don't modify the array.  They return a new array or requested value.
    OpenArrayItemGetter.prototype.copy = function () {
        return getCopy_1.getCopy(this.data);
    };
    // index can be negative or positive.
    OpenArrayItemGetter.prototype.item = function (index) {
        return getItem_1.getItem(index, this.data);
    };
    OpenArrayItemGetter.prototype.head = function (numItems) {
        return getHead_1.getHead(numItems, this.data);
    };
    OpenArrayItemGetter.prototype.tail = function (numItems) {
        return getTail_1.getTail(numItems, this.data);
    };
    OpenArrayItemGetter.prototype.middle = function (numItemsToIgnoreAtEachEnd) {
        return getMiddle_1.getMiddle(numItemsToIgnoreAtEachEnd, this.data);
    };
    // startingIndex can be negative or positive.
    OpenArrayItemGetter.prototype.adjacentAt = function (startingIndex, numItems) {
        return getAdjacentAt_1.getAdjacentAt(startingIndex, numItems, this.data);
    };
    // info = {value: any, offset: number, howMany: number}
    OpenArrayItemGetter.prototype.adjacentToValue = function (info) {
        return getAdjacentToValue_1.getAdjacentToValue(info, this.data);
    };
    OpenArrayItemGetter.prototype.allAfterFirst = function (value) {
        return getAllAfterFirst_getAllBeforeFirst_1.getAllAfterFirst(value, this.data);
    };
    OpenArrayItemGetter.prototype.allBeforeFirst = function (value) {
        return getAllAfterFirst_getAllBeforeFirst_1.getAllBeforeFirst(value, this.data);
    };
    OpenArrayItemGetter.prototype.allAfterLast = function (value) {
        return getAllAfterLast_getAllBeforeLast_1.getAllAfterLast(value, this.data);
    };
    OpenArrayItemGetter.prototype.allBeforeLast = function (value) {
        return getAllAfterLast_getAllBeforeLast_1.getAllBeforeLast(value, this.data);
    };
    // returns no duplicates.
    OpenArrayItemGetter.prototype.uniqueItems = function () {
        return getUniqueItems_1.getUniqueItems(this.data);
    };
    // returns every instance of a duplicate, so you may get multiple instances.
    OpenArrayItemGetter.prototype.duplicates = function () {
        return getDuplicates_1.getDuplicates(this.data);
    };
    // testFunction has same signature as callback passed to array.filter():
    OpenArrayItemGetter.prototype.byTest = function (testFunction) {
        return getFilteredResults_1.getFilteredResults(testFunction, this.data);
    };
    OpenArrayItemGetter.prototype.byType = function (type) {
        if (type === 'array') {
            return this.byTest(function (item) {
                return (isArray_notArray_1.isArray(item));
            });
        }
        else {
            return this.byTest(function (item) {
                return (typeof item === type);
            });
        }
    };
    return OpenArrayItemGetter;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayItemGetter = OpenArrayItemGetter;
