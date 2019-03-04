"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var public_array_container_1 = require("@writetome51/public-array-container");
var array_get_copy_1 = require("@writetome51/array-get-copy");
var array_get_adjacent_at_1 = require("@writetome51/array-get-adjacent-at");
var array_get_by_index_1 = require("@writetome51/array-get-by-index");
var array_get_by_indexes_1 = require("@writetome51/array-get-by-indexes");
var array_get_by_test_1 = require("@writetome51/array-get-by-test");
var array_get_head_tail_1 = require("@writetome51/array-get-head-tail");
var array_get_between_1 = require("@writetome51/array-get-between");
var array_get_all_after_1 = require("@writetome51/array-get-all-after");
var array_get_all_before_1 = require("@writetome51/array-get-all-before");
var array_get_adjacent_to_value_1 = require("@writetome51/array-get-adjacent-to-value");
var array_get_duplicates_1 = require("@writetome51/array-get-duplicates");
var array_get_unique_items_1 = require("@writetome51/array-get-unique-items");
var array_get_shuffled_1 = require("@writetome51/array-get-shuffled");
var PublicArrayGetter = /** @class */ (function (_super) {
    __extends(PublicArrayGetter, _super);
    function PublicArrayGetter(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions don't modify the array.  They return item(s) copied from the array.
    // Returns independent copy of array.
    PublicArrayGetter.prototype.copy = function () {
        return array_get_copy_1.getCopy(this.data);
    };
    // index can be negative or positive.
    PublicArrayGetter.prototype.byIndex = function (index) {
        return array_get_by_index_1.getByIndex(index, this.data);
    };
    // indexes can be negative or positive.
    PublicArrayGetter.prototype.byIndexes = function (indexes) {
        return array_get_by_indexes_1.getByIndexes(indexes, this.data);
    };
    PublicArrayGetter.prototype.head = function (numItems) {
        return array_get_head_tail_1.getHead(numItems, this.data);
    };
    PublicArrayGetter.prototype.tail = function (numItems) {
        return array_get_head_tail_1.getTail(numItems, this.data);
    };
    // Returns middle of array, between numItemsToIgnoreAtEachEnd.
    PublicArrayGetter.prototype.between = function (numItemsToIgnoreAtEachEnd) {
        return array_get_between_1.getBetween(numItemsToIgnoreAtEachEnd, this.data);
    };
    // Returns adjacent items.  startingIndex can be negative or positive.
    PublicArrayGetter.prototype.adjacentAt = function (startingIndex, numItems) {
        return array_get_adjacent_at_1.getAdjacentAt(startingIndex, numItems, this.data);
    };
    /**************************
     NOTICE: For all the methods below, any parameter called 'value' cannot be an object.
     This does not include arrays. Arrays are OK, as long as they don't contain objects.
     **************************/
    PublicArrayGetter.prototype.adjacentToValue = function (info) {
        return array_get_adjacent_to_value_1.getAdjacentToValue(info, this.data);
    };
    /********
     Explanation of adjacentToValue(info: IAdjacentToValueInfo): any[]
     Returns adjacent items including, or near, a particular value.
     Only applies to the first instance of value found in array.
     The parameter 'info' is an object that looks like this:
     {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                items to return.  If offset is zero, the selection will begin with value.)
        howMany: integer (number of adjacent items to return).
     }
     *********/
    PublicArrayGetter.prototype.allAfterFirst = function (value) {
        return array_get_all_after_1.getAllAfterFirst(value, this.data);
    };
    PublicArrayGetter.prototype.allBeforeFirst = function (value) {
        return array_get_all_before_1.getAllBeforeFirst(value, this.data);
    };
    PublicArrayGetter.prototype.allAfterLast = function (value) {
        return array_get_all_after_1.getAllAfterLast(value, this.data);
    };
    PublicArrayGetter.prototype.allBeforeLast = function (value) {
        return array_get_all_before_1.getAllBeforeLast(value, this.data);
    };
    PublicArrayGetter.prototype.uniqueItems = function () {
        return array_get_unique_items_1.getUniqueItems(this.data);
    };
    // Returns every instance of a duplicate, so you may get multiple instances.
    PublicArrayGetter.prototype.duplicates = function () {
        return array_get_duplicates_1.getDuplicates(this.data);
    };
    PublicArrayGetter.prototype.shuffled = function () {
        return array_get_shuffled_1.getShuffled(this.data);
    };
    /******************************
     The last 2 methods below return an array of IValueIndexPairs.
     A IValueIndexPair is this object: {value: any, index: integer}
     It represents an array item's value and index.
     ******************************/
    // Almost exactly like Array.filter(), except it returns array of IValueIndexPairs.
    // testFunction tests currentValue, and returns boolean based on if it passes.
    PublicArrayGetter.prototype.byTest = function (testFunction) {
        return array_get_by_test_1.getByTest(testFunction, this.data);
    };
    PublicArrayGetter.prototype.byType = function (type) {
        if (type === 'array')
            return this.byTest(function (item) { return isArray_notArray_1.isArray(item); });
        else
            return this.byTest(function (item) { return typeof item === type; });
    };
    return PublicArrayGetter;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayGetter = PublicArrayGetter;
