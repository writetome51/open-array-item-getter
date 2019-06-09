import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
import { getAllAfterFirst, getAllAfterLast } from '@writetome51/array-get-all-after';
import { getAllBeforeFirst, getAllBeforeLast } from '@writetome51/array-get-all-before';
import { getAdjacentToValue } from '@writetome51/array-get-adjacent-to-value';
import { getBetween } from '@writetome51/array-get-between';
import { getByIndex } from '@writetome51/array-get-by-index';
import { getByIndexes } from '@writetome51/array-get-by-indexes';
import { getByTest } from '@writetome51/array-get-by-test';
import { getCopy } from '@writetome51/array-get-copy';
import { getDuplicates } from '@writetome51/array-get-duplicates';
import { getHead, getTail } from '@writetome51/array-get-head-tail';
import { getShuffled } from '@writetome51/array-get-shuffled';
import { getUniqueItems } from '@writetome51/array-get-unique-items';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { _publicArrayContainer_byType_implementation }
	from '@writetome51/public-array-container-by-type-implementation';


export class PublicArrayGetter extends PublicArrayContainer {


	// These functions don't modify the array.  They return item(s) copied from the array.


	// Returns independent copy of array.

	copy(): any[] {
		return getCopy(this.data);
	}


	// index can be negative or positive.

	byIndex(index): any {
		return getByIndex(index, this.data);
	}


	// indexes can be negative or positive.

	byIndexes(indexes): any[] {
		return getByIndexes(indexes, this.data);
	}


	head(numItems): any[] {
		return getHead(numItems, this.data);
	}


	tail(numItems): any[] {
		return getTail(numItems, this.data);
	}


	// Returns middle of array, between numItemsToIgnoreAtEachEnd.

	between(numItemsToIgnoreAtEachEnd: number): any[] {
		return getBetween(numItemsToIgnoreAtEachEnd, this.data);
	}


	// Returns adjacent items.  startingIndex can be negative or positive.

	adjacentAt(startingIndex, numItems): any[] {
		return getAdjacentAt(startingIndex, numItems, this.data);
	}


	/**************************
	 NOTICE: For all the methods below, any parameter called 'value' cannot be an object.
	 This does not include arrays. Arrays are OK, as long as they don't contain objects.
	 **************************/


	adjacentToValue(info: IAdjacentToValueInfo): any[] {
		return getAdjacentToValue(info, this.data);
	}
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


	allAfterFirst(value): any[] {
		return getAllAfterFirst(value, this.data);
	}


	allBeforeFirst(value): any[] {
		return getAllBeforeFirst(value, this.data);
	}


	allAfterLast(value): any[] {
		return getAllAfterLast(value, this.data);
	}


	allBeforeLast(value): any[] {
		return getAllBeforeLast(value, this.data);
	}


	uniqueItems(): any[] {
		return getUniqueItems(this.data);
	}


	// Returns every instance of a duplicate, so you may get multiple instances.

	duplicates(): any[] {
		return getDuplicates(this.data);
	}


	shuffled(): any[] {
		return getShuffled(this.data);
	}


	/******************************
	 The last 2 methods below return an array of IValueIndexPairs.
	 A IValueIndexPair is this object: {value: any, index: integer}
	 It represents an array item's value and index.
	 ******************************/


	// Almost exactly like Array.filter(), except it returns array of IValueIndexPairs.
	// testFunction tests currentValue, and returns boolean based on if it passes.

	byTest(testFunction: ((currentValue, currentIndex?, array?) => boolean)): IValueIndexPair[] {
		return getByTest(testFunction, this.data);
	}


	// Here, 'null' is considered its own type, separate from 'object'.
	// You can also pass 'array' as a type.  Passing 'object' will match with objects and arrays.

	byType(
		type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined' | 'null'
	): IValueIndexPair[] {

		return _publicArrayContainer_byType_implementation(type, this);
	}


}
