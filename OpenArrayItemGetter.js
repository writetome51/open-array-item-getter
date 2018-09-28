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
var OpenArrayContainer_1 = require("./OpenArrayContainer");
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var getCopy_1 = require("intuitive-array-handlers/no_modify/get/getCopy");
var getAdjacent_1 = require("intuitive-array-handlers/no_modify/get/getAdjacent");
var getItem_1 = require("intuitive-array-handlers/no_modify/get/getItem");
var getFilteredResults_1 = require("intuitive-array-handlers/no_modify/get/getFilteredResults");
var getAdjacentToValue_1 = require("intuitive-array-handlers/no_modify/get/getAdjacentToValue");
var getUniqueItems_1 = require("intuitive-array-handlers/no_modify/get/getUniqueItems");
var getHead_1 = require("intuitive-array-handlers/no_modify/get/getHead");
var getTail_1 = require("intuitive-array-handlers/no_modify/get/getTail");
var getAllAfterFirst_getAllBeforeFirst_1 = require("intuitive-array-handlers/no_modify/get/getAllAfterFirst_getAllBeforeFirst");
var getAllAfterLast_getAllBeforeLast_1 = require("intuitive-array-handlers/no_modify/get/getAllAfterLast_getAllBeforeLast");
var getAllDuplicates_1 = require("intuitive-array-handlers/no_modify/get/getAllDuplicates");
var getUniqueDuplicates_1 = require("intuitive-array-handlers/no_modify/get/getUniqueDuplicates");
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
    // startingIndex can be negative or positive.
    OpenArrayItemGetter.prototype.adjacent = function (startingIndex, numItems) {
        return getAdjacent_1.getAdjacent(startingIndex, numItems, this.data);
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
    // removes any duplicates.
    OpenArrayItemGetter.prototype.uniqueItems = function () {
        return getUniqueItems_1.getUniqueItems(this.data);
    };
    // returns every instance of a duplicate, so you may get multiple instances.
    OpenArrayItemGetter.prototype.allDuplicates = function () {
        return getAllDuplicates_1.getAllDuplicates(this.data);
    };
    // similar to .allDuplicates(), except you don't get redundant items.
    OpenArrayItemGetter.prototype.uniqueDuplicates = function () {
        return getUniqueDuplicates_1.getUniqueDuplicates(this.data);
    };
    // testFunction has same signature as callback passed to array.filter():
    OpenArrayItemGetter.prototype.filteredResults = function (testFunction) {
        return getFilteredResults_1.getFilteredResults(testFunction, this.data);
    };
    OpenArrayItemGetter.prototype.byType = function (type) {
        if (type === 'array') {
            return this.filteredResults(function (item) {
                return (isArray_notArray_1.isArray(item));
            });
        }
        else {
            return this.filteredResults(function (item) {
                return (typeof item === type);
            });
        }
    };
    return OpenArrayItemGetter;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayItemGetter = OpenArrayItemGetter;
