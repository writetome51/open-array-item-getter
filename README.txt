To include in your project:

import { PublicArrayItemGetter } from '@writetome51/public-array-item-getter';

The PublicArrayItemGetter class is a dependency of the PublicArray class
( package:  @writetome51/public-array ).

To instantiate, pass the actual array it will contain into its constructor:

let getter = new PublicArrayItemGetter( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

getter.data = [1,2,3,4,...];

PublicArrayItemGetter has methods that return items copied from the array.  None of the methods modify 
the array.  These are all of them:


    // Returns completely independent copy of the array:
    copy(): any[]


	// index can be negative or positive.
	item(index): any


	head(numItems): any[]


	tail(numItems): any[]


    // Returns middle of array, between numItemsToIgnoreAtEachEnd:
	between(numItemsToIgnoreAtEachEnd): any[]


	// startingIndex can be negative or positive.
	adjacentAt(startingIndex, numItems): any[]


	// Only applies to the first instance of value found in array.
	// info = {value: anyExceptObject, offset: integer, howMany: integer greater than zero}
	adjacentToValue(info): any[]


    // value cannot be object
	allAfterFirst(value: any): any[]


    // value cannot be object
	allBeforeFirst(value: any): any[]


    // value cannot be object
	allAfterLast(value: any): any[]


    // value cannot be object
	allBeforeLast(value: any): any[]


	// returns no duplicates.
	uniqueItems(): any[]


	// returns every instance of a duplicate, so you may get multiple instances.
	duplicates(): any[]


	shuffled(): any[]


	// testFunction = function(currentValue, currentIndex, theArray){...}
	// testFunction tests currentValue, and returns boolean based on if it passes.
	byTest(testFunction): any[]


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): any[]
