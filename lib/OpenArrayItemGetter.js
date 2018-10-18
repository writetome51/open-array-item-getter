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
var getCopy_1 = require("@writetome51/array-get-copy/getCopy");
var getAdjacentAt_1 = require("@writetome51/array-get-adjacent-at/getAdjacentAt");
var getItem_1 = require("@writetome51/array-get-item/getItem");
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var getHead_1 = require("@writetome51/array-get-head-tail/getHead");
var getTail_1 = require("@writetome51/array-get-head-tail/getTail");
var getBetween_1 = require("@writetome51/array-get-between/getBetween");
var array_get_all_after_before_first_1 = require("@writetome51/array-get-all-after-before-first");
var array_get_all_after_before_last_1 = require("@writetome51/array-get-all-after-before-last");
var array_get_adjacent_to_value_1 = require("@writetome51/array-get-adjacent-to-value");
var getDuplicates_1 = require("@writetome51/array-get-duplicates/getDuplicates");
var getUniqueItems_1 = require("@writetome51/array-get-unique-items/getUniqueItems");
var getShuffled_1 = require("@writetome51/array-get-shuffled/getShuffled");
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
    OpenArrayItemGetter.prototype.between = function (numItemsToIgnoreAtEachEnd) {
        return getBetween_1.getBetween(numItemsToIgnoreAtEachEnd, this.data);
    };
    // startingIndex can be negative or positive.
    OpenArrayItemGetter.prototype.adjacentAt = function (startingIndex, numItems) {
        return getAdjacentAt_1.getAdjacentAt(startingIndex, numItems, this.data);
    };
    // Only applies to the first instance of value found in array.
    // info = {value: anyExceptObject, offset: integer, howMany: integer greater than zero}
    OpenArrayItemGetter.prototype.adjacentToValue = function (info) {
        return array_get_adjacent_to_value_1.getAdjacentToValue(info, this.data);
    };
    OpenArrayItemGetter.prototype.allAfterFirst = function (value) {
        return array_get_all_after_before_first_1.getAllAfterFirst(value, this.data);
    };
    OpenArrayItemGetter.prototype.allBeforeFirst = function (value) {
        return array_get_all_after_before_first_1.getAllBeforeFirst(value, this.data);
    };
    OpenArrayItemGetter.prototype.allAfterLast = function (value) {
        return array_get_all_after_before_last_1.getAllAfterLast(value, this.data);
    };
    OpenArrayItemGetter.prototype.allBeforeLast = function (value) {
        return array_get_all_after_before_last_1.getAllBeforeLast(value, this.data);
    };
    // returns no duplicates.
    OpenArrayItemGetter.prototype.uniqueItems = function () {
        return getUniqueItems_1.getUniqueItems(this.data);
    };
    // returns every instance of a duplicate, so you may get multiple instances.
    OpenArrayItemGetter.prototype.duplicates = function () {
        return getDuplicates_1.getDuplicates(this.data);
    };
    OpenArrayItemGetter.prototype.shuffled = function () {
        return getShuffled_1.getShuffled(this.data);
    };
    // testFunction = function(currentValue, currentIndex, theArray){...}
    // testFunction lib currentValue, and returns boolean based on if it passes.
    OpenArrayItemGetter.prototype.byTest = function (testFunction) {
        return array_get_filtered_results_1.getFilteredResults(testFunction, this.data);
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
