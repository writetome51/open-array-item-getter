To include in your project:

    import { PublicArrayGetter } from '@writetome51/public-array-getter';

To instantiate, pass the actual array it will contain into its constructor:

    let getter = new PublicArrayGetter( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

    getter.data = [1,2,3,4,...];

PublicArrayGetter has methods that return items copied from the array.  None of the methods   
modify the array.  These are all of them:


    // Returns independent copy of array.
    copy(): any[]


	// index can be negative or positive.
    byIndex(index): any
    
    
    // indexes can be negative or positive.
    byIndexes(indexes): any[]


	head(numItems): any[]


	tail(numItems): any[]


    // Returns middle of array, between numItemsToIgnoreAtEachEnd:
	between(numItemsToIgnoreAtEachEnd): any[]


	// Returns adjacent items.  startingIndex can be negative or positive.
	adjacentAt(startingIndex, numItems): any[]


    adjacentToValue(info: IAdjacentToValueInfo): any[]
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


	byTest(testFunction: ((currentValue, currentIndex?, array?) => boolean)): IValueIndexPair[]
    /***********
    Explanation of byTest(testFunction): IValueIndexPair[]
        Almost exactly like Array.filter(), except it returns array of IValueIndexPairs.
        A IValueIndexPair is this object: {value: any, index: integer}
        It's both the value filtered by the testFunction and its index.
    ***********/


	byType(
	    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
	):  IValueIndexPair[] 
