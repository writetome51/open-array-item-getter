import { PublicArrayContainer } from '@writetome51/public-array-container';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';


export declare class PublicArrayItemGetter extends PublicArrayContainer {
	constructor(data?: any[]);


	copy(): any[];


	byIndex(index: any): any;


	byIndexes(indexes: any): any[];


	head(numItems: any): any[];


	tail(numItems: any): any[];


	between(numItemsToIgnoreAtEachEnd: number): any[];


	adjacentAt(startingIndex: any, numItems: any): any[];


	adjacentToValue(info: IAdjacentToValueInfo): any[];
	/********
	 Explanation of adjacentToValue(info: IAdjacentToValueInfo): any[]
	 Returns adjacent items including, or near, a particular value.
	 Only applies to the first instance of value found in array.
	 The parameter 'info' is an object that looks like this:
	 {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin selecting adjacent
                items to return.  If offset is zero, the selection will begin with value.)
        howMany: integer greater than zero (it's how many adjacent items to return)
     }
	 *********/


	allAfterFirst(value: any): any[];


	allBeforeFirst(value: any): any[];


	allAfterLast(value: any): any[];


	allBeforeLast(value: any): any[];


	uniqueItems(): any[];


	duplicates(): any[];


	shuffled(): any[];


	byTest(testFunction: ((currentValue: any, currentIndex?: any, array?: any) => boolean)): IValueIndexPair[];
	/***********
	 Explanation of byTest(testFunction): IValueIndexPair[]
	 Almost exactly like Array.filter(), except it returns array of IValueIndexPairs.
	 A IValueIndexPair is this object: {value: any, index: integer}
	 It's both the value filtered by the testFunction and its index.
	 ***********/


	byType(
		type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
	): IValueIndexPair[];
}
