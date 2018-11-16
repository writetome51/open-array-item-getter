import { PublicArrayContainer } from '@writetome51/public-array-container';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
export declare class PublicArrayItemGetter extends PublicArrayContainer {
    constructor(data?: any[]);
    copy(): any[];
    item(index: any): any;
    head(numItems: any): any[];
    tail(numItems: any): any[];
    between(numItemsToIgnoreAtEachEnd: number): any[];
    adjacentAt(startingIndex: any, numItems: any): any[];
    adjacentToValue(info: IAdjacentToValueInfo): any[];
    allAfterFirst(value: any): any[];
    allBeforeFirst(value: any): any[];
    allAfterLast(value: any): any[];
    allBeforeLast(value: any): any[];
    uniqueItems(): any[];
    duplicates(): any[];
    shuffled(): any[];
    byTest(testFunction: ((currentValue: any, currentIndex?: any, array?: any) => boolean)): any[];
    byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): any[];
}
