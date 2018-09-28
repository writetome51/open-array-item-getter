import { isArray } from 'basic-data-handling/isArray_notArray';
import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { getCopy } from '@writetome51/array-non-modifying-getters-basic/getCopy';
import { getAdjacentAt } from '@writetome51/array-non-modifying-getters-basic/getAdjacentAt';
import { getItem } from '@writetome51/array-non-modifying-getters-basic/getItem';
import { getFilteredResults } from '@writetome51/array-non-modifying-getters-basic/getFilteredResults';
import { getHead } from '@writetome51/array-non-modifying-getters-basic/getHead';
import { getTail } from '@writetome51/array-non-modifying-getters-basic/getTail';
import { getAllAfterFirst, getAllBeforeFirst }
	from '@writetome51/array-non-modifying-getters-intermediate/getAllAfterFirst_getAllBeforeFirst';
import { getAllAfterLast, getAllBeforeLast }
	from '@writetome51/array-non-modifying-getters-intermediate/getAllAfterLast_getAllBeforeLast';
import { getAdjacentToValue } from '@writetome51/array-non-modifying-getters-intermediate/getAdjacentToValue';
import { getDuplicates } from '@writetome51/array-get-duplicates-and-unique-items/getDuplicates';
import { getUniqueItems } from '@writetome51/array-get-duplicates-and-unique-items/getUniqueItems';


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
	adjacentAt(startingIndex, numItems): any[] {
		return getAdjacentAt(startingIndex, numItems, this.data);
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


	// returns no duplicates.
	uniqueItems(): any[] {
		return getUniqueItems(this.data);
	}


	// returns every instance of a duplicate, so you may get multiple instances.
	duplicates() {
		return getDuplicates(this.data);
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
