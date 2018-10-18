import { isArray } from 'basic-data-handling/isArray_notArray';
import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { getCopy } from '@writetome51/array-get-copy/getCopy';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at/getAdjacentAt';
import { getItem } from '@writetome51/array-get-item/getItem';
import { getFilteredResults } from '@writetome51/array-get-filtered-results';
import { getHead } from '@writetome51/array-get-head-tail/getHead';
import { getTail } from '@writetome51/array-get-head-tail/getTail';
import { getBetween } from '@writetome51/array-get-between/getBetween';
import { getAllAfterFirst, getAllBeforeFirst } from '@writetome51/array-get-all-after-before-first';
import { getAllAfterLast, getAllBeforeLast } from '@writetome51/array-get-all-after-before-last';
import { getAdjacentToValue } from '@writetome51/array-get-adjacent-to-value';
import { getDuplicates } from '@writetome51/array-get-duplicates/getDuplicates';
import { getUniqueItems } from '@writetome51/array-get-unique-items/getUniqueItems';
import { getShuffled } from '@writetome51/array-get-shuffled/getShuffled';


export class OpenArrayItemGetter extends OpenArrayContainer {


	constructor(data = []) {
		super(data);
	}


	// These functions don't modify the array.  They return a new array or requested value.


	copy(): any[] {
		return getCopy(this.data);
	}


	// index can be negative or positive.
	item(index): any {
		return getItem(index, this.data);
	}


	head(numItems): any[] {
		return getHead(numItems, this.data);
	}


	tail(numItems): any[] {
		return getTail(numItems, this.data);
	}


	between(numItemsToIgnoreAtEachEnd): any[] {
		return getBetween(numItemsToIgnoreAtEachEnd, this.data);
	}


	// startingIndex can be negative or positive.
	adjacentAt(startingIndex, numItems): any[] {
		return getAdjacentAt(startingIndex, numItems, this.data);
	}


	// Only applies to the first instance of value found in array.
	// info = {value: anyExceptObject, offset: integer, howMany: integer greater than zero}
	adjacentToValue(info: IAdjacentToValueInfo): any[] {
		return getAdjacentToValue(info, this.data);
	}


	allAfterFirst(value: any): any[] {
		return getAllAfterFirst(value, this.data);
	}


	allBeforeFirst(value: any): any[] {
		return getAllBeforeFirst(value, this.data);
	}


	allAfterLast(value: any): any[] {
		return getAllAfterLast(value, this.data);
	}


	allBeforeLast(value: any): any[] {
		return getAllBeforeLast(value, this.data);
	}


	// returns no duplicates.
	uniqueItems(): any[] {
		return getUniqueItems(this.data);
	}


	// returns every instance of a duplicate, so you may get multiple instances.
	duplicates(): any[] {
		return getDuplicates(this.data);
	}


	shuffled(): any[] {
		return getShuffled(this.data);
	}


	// testFunction = function(currentValue, currentIndex, theArray){...}
	// testFunction lib currentValue, and returns boolean based on if it passes.
	byTest(testFunction): any[] {
		return getFilteredResults(testFunction, this.data);
	}


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): any[] {
		if (type === 'array') {
			return this.byTest((item) => {
				return (isArray(item));
			});
		}
		else {
			return this.byTest((item) => {
				return (typeof item === type);
			});
		}
	}


}
