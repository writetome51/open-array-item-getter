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
var public_array_container_1 = require("@writetome51/public-array-container");
var getCopy_1 = require("@writetome51/array-get-copy/getCopy");
var array_get_adjacent_at_1 = require("@writetome51/array-get-adjacent-at");
var getItem_1 = require("@writetome51/array-get-item/getItem");
var array_get_filtered_results_1 = require("@writetome51/array-get-filtered-results");
var getHead_1 = require("@writetome51/array-get-head-tail/getHead");
var getTail_1 = require("@writetome51/array-get-head-tail/getTail");
var array_get_between_1 = require("@writetome51/array-get-between");
var array_get_all_after_before_first_1 = require("@writetome51/array-get-all-after-before-first");
var array_get_all_after_before_last_1 = require("@writetome51/array-get-all-after-before-last");
var array_get_adjacent_to_value_1 = require("@writetome51/array-get-adjacent-to-value");
var getDuplicates_1 = require("@writetome51/array-get-duplicates/getDuplicates");
var getUniqueItems_1 = require("@writetome51/array-get-unique-items/getUniqueItems");
var array_get_shuffled_1 = require("@writetome51/array-get-shuffled");
var PublicArrayItemGetter = /** @class */ (function (_super) {
    __extends(PublicArrayItemGetter, _super);
    function PublicArrayItemGetter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions don't modify the array.  They return a new array or requested value.
    PublicArrayItemGetter.prototype.copy = function () {
        return getCopy_1.getCopy(this.data);
    };
    // index can be negative or positive.
    PublicArrayItemGetter.prototype.item = function (index) {
        return getItem_1.getItem(index, this.data);
    };
    PublicArrayItemGetter.prototype.head = function (numItems) {
        return getHead_1.getHead(numItems, this.data);
    };
    PublicArrayItemGetter.prototype.tail = function (numItems) {
        return getTail_1.getTail(numItems, this.data);
    };
    PublicArrayItemGetter.prototype.between = function (numItemsToIgnoreAtEachEnd) {
        return array_get_between_1.getBetween(numItemsToIgnoreAtEachEnd, this.data);
    };
    // startingIndex can be negative or positive.
    PublicArrayItemGetter.prototype.adjacentAt = function (startingIndex, numItems) {
        return array_get_adjacent_at_1.getAdjacentAt(startingIndex, numItems, this.data);
    };
    // Only applies to the first instance of value found in array.
    // info = {value: anyExceptObject, offset: integer, howMany: integer greater than zero}
    PublicArrayItemGetter.prototype.adjacentToValue = function (info) {
        return array_get_adjacent_to_value_1.getAdjacentToValue(info, this.data);
    };
    // value cannot be object
    PublicArrayItemGetter.prototype.allAfterFirst = function (value) {
        return array_get_all_after_before_first_1.getAllAfterFirst(value, this.data);
    };
    // value cannot be object
    PublicArrayItemGetter.prototype.allBeforeFirst = function (value) {
        return array_get_all_after_before_first_1.getAllBeforeFirst(value, this.data);
    };
    // value cannot be object
    PublicArrayItemGetter.prototype.allAfterLast = function (value) {
        return array_get_all_after_before_last_1.getAllAfterLast(value, this.data);
    };
    // value cannot be object
    PublicArrayItemGetter.prototype.allBeforeLast = function (value) {
        return array_get_all_after_before_last_1.getAllBeforeLast(value, this.data);
    };
    // returns no duplicates.
    PublicArrayItemGetter.prototype.uniqueItems = function () {
        return getUniqueItems_1.getUniqueItems(this.data);
    };
    // returns every instance of a duplicate, so you may get multiple instances.
    PublicArrayItemGetter.prototype.duplicates = function () {
        return getDuplicates_1.getDuplicates(this.data);
    };
    PublicArrayItemGetter.prototype.shuffled = function () {
        return array_get_shuffled_1.getShuffled(this.data);
    };
    // testFunction tests currentValue, and returns boolean based on if it passes.
    PublicArrayItemGetter.prototype.byTest = function (testFunction) {
        return array_get_filtered_results_1.getFilteredResults(testFunction, this.data);
    };
    PublicArrayItemGetter.prototype.byType = function (type) {
        if (type === 'array')
            return this.byTest(function (item) { return isArray_notArray_1.isArray(item); });
        else
            return this.byTest(function (item) { return typeof item === type; });
    };
    return PublicArrayItemGetter;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayItemGetter = PublicArrayItemGetter;
