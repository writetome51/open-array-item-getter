# PublicArrayGetter 

An array-manipulating Typescript/Javascript class with methods that return items copied   
from the array. None of the methods modify the array.

## Constructor
```
constructor(data? = []) // 'data' becomes the array it contains.
```

You can also reset the array by accessing the class `.data` property:
```
this.data = [1,2,3,4];
```

## Properties
```
data : any[]  // the actual array

className: string (read-only)
    // Not important.  Inherited from BaseClass.
```


## Methods
<details>
<summary>view methods</summary>

```
copy(): any[]
    // returns independent copy of this.data .

byIndex(index): any
    // returns item identified by `index`.  `index` can be negative or positive.
    
byIndexes(indexes): any[]
    // returns items identified by `indexes`.  `indexes` can be negative or positive.

head(numItems): any[]
    // returns `numItems` from beginning of this.data

tail(numItems): any[]
    // returns `numItems` from end of this.data

between(numItemsToIgnoreAtEachEnd): any[]
    // Returns everything between `numItemsToIgnoreAtEachEnd` in this.data
    // Example:
    // let get = new PublicArrayGetter( [1,2,3,4,5,6,7,8,9,10] );
    // get.between(2); // returns everything between first 2 and last 2 items.
    // --> [3,4,5,6,7,8]

adjacentAt(startingIndex, howMany): any[]
    // Beginning at `startingIndex`, returns `howMany` adjacent items from this.data.
    // startingIndex can be negative or positive.
```       
NOTICE: For all the methods below, any parameter called `value` cannot be an object.  
This does not include arrays. Arrays are OK, as long as they don't contain objects.
```
adjacentToValue(
    {
        value: any except object,
        offset: integer,
        howMany: integer greater than zero
    }
): any[]
    /************
    Returns `howMany` adjacent items from this.data, starting with, or close to, `value`.
    Exactly where the selection starts is decided by `offset`, which is the position,
    relative to `value`, where to begin the selection. For example, if `offset` is 0,
    then the selection begins at `value`.  If -1, it begins one place to the left of
    `value`.  If 1, it begins one place to the right.
    Note: the function only works with the first found instance of `value`.
    Example:
        let get = new PublicArrayGetter( [1,2,3,4,5,6,7,8,9,10] );
        let numbers = get.adjacentToValue({value:5, offset: -2, howMany:3});
        // numbers is now [3,4,5]
    *************/

allAfterFirst(value): any[]
    // returns all items after first instance of `value`.

allBeforeFirst(value): any[]
    // returns all items before first instance of `value`.

allAfterLast(value): any[]
    // returns all items after last instance of `value`.

allBeforeLast(value): any[]
    // returns all items before last instance of `value`.

uniqueItems(): any[]
    // returns no duplicates.

duplicates(): any[]
    // returns every instance of a duplicate, so you may get multiple instances.

shuffled(): any[]
    // returns new version of this.data with order of items randomized.
```        
The next 2 methods return an array of IValueIndexPairs.  
A IValueIndexPair is this object: `{value: any, index: integer}`  
It represents an array item's value and index.
```
byTest(testFunction: ((currentItem, currentIndex?, array?) => boolean)): IValueIndexPair[]
    // Almost exactly like Array.filter(), except it returns array of IValueIndexPairs.
     
byType(
    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined' | 'null'
):  IValueIndexPair[] 
    // returns all items that match `type`. 
    // Here, 'null' is considered its own type, separate from 'object'.
    // You can also pass 'array' as a type.  Passing 'object' will match with objects and arrays.
``` 
The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
``` 
protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 


protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```
</details>

## Inheritance Chain

PublicArrayGetter<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)

## Installation

You must have npm installed first. Then, in the command line:

    npm install @writetome51/public-array-getter

## Loading

    // if using Typescript:
    import { PublicArrayGetter } from '@writetome51/public-array-getter';
    // if using ES5 Javascript:
    var PublicArrayGetter = require('@writetome51/public-array-getter').PublicArrayGetter;


## License
[MIT](https://choosealicense.com/licenses/mit/)