The OpenArrayItemGetter class is a dependency of the OpenArray class  
( package:  @writetome51/open-array ).

To instantiate, pass the actual array it will contain into its constructor:

let getter = new OpenArrayItemGetter( [item1, item2, item3,...] );

You can also reset the array by accessing the classes 'data' property:

getter.data = [1,2,3,4,...];

OpenArrayItemGetter has methods that return items copied from the array.  None of the methods modify 
the array.  These are all of them:

    // Returns completely independent copy of the array:
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


    // Returns middle of array, between numItemsToIgnoreAtEachEnd:
	between(numItemsToIgnoreAtEachEnd): any[] {
		return getBetween(numItemsToIgnoreAtEachEnd, this.data);
	}


	// startingIndex can be negative or positive.
	adjacentAt(startingIndex, numItems): any[] {
		return getAdjacentAt(startingIndex, numItems, this.data);
	}


	// Only applies to the first instance of value found in array.
	// info = {value: anyExceptObject, offset: integer, howMany: integer greater than zero}
	adjacentToValue(info): any[] {
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
	// testFunction tests currentValue, and returns boolean based on if it passes.
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
