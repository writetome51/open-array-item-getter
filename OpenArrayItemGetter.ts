import { OpenArrayContainer } from './OpenArrayContainer';
import { isArray } from 'basic-data-handling/isArray_notArray';
import { getCopy } from '@writetome51/array-non-modifying-getters-basic/getCopy';
import { getAdjacent } from '@writetome51/array-non-modifying-getters-basic/getAdjacent';
import { getItem } from '@writetome51/array-non-modifying-getters-basic/getItem';
import { getFilteredResults } from '@writetome51/array-non-modifying-getters-basic/getFilteredResults';
import { getAdjacentToValue } from '@writetome51/array-non-modifying-getters-intermediate/getAdjacentToValue';
import { getUniqueItems } from '@writetome51/array-get-duplicates-and-unique-items/getUniqueItems';
import { getHead } from '@writetome51/array-non-modifying-getters-basic/getHead';
import { getTail } from '@writetome51/array-non-modifying-getters-basic/getTail';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { getAllAfterFirst, getAllBeforeFirst }
	from '@writetome51/array-non-modifying-getters-intermediate/getAllAfterFirst_getAllBeforeFirst';
import { getAllAfterLast, getAllBeforeLast }
	from 'intuitive-array-handlers/no_modify/get/getAllAfterLast_getAllBeforeLast';
import {getAllDuplicates} from 'intuitive-array-handlers/no_modify/get/getAllDuplicates';
import {getUniqueDuplicates} from 'intuitive-array-handlers/no_modify/get/getUniqueDuplicates';


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


	// startingIndex can be negative or positive.
	adjacent(startingIndex, numItems): any[] {
		return getAdjacent(startingIndex, numItems, this.data);
	}


	// info = {value: any, offset: number, howMany: number}
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


	// removes any duplicates.
	uniqueItems(): any[] {
		return getUniqueItems(this.data);
	}


	// returns every instance of a duplicate, so you may get multiple instances.
	allDuplicates(){
		return getAllDuplicates(this.data);
	}

	// similar to .allDuplicates(), except you don't get redundant items.
	uniqueDuplicates(){
		return getUniqueDuplicates(this.data);
	}


	// testFunction has same signature as callback passed to array.filter():
	filteredResults(testFunction): any[] {
		return getFilteredResults(testFunction, this.data);
	}


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): any[] {
		if (type === 'array') {
			return this.filteredResults((item) => {
				return (isArray(item));
			});
		}
		else {
			return this.filteredResults((item) => {
				return (typeof item === type);
			});
		}
	}


}
