import { PublicArrayItemGetter } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let get = new PublicArrayItemGetter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Test 1:  test .byIndex()
let result = get.byIndex(-1);
if (result === 10) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 1A:  test .byIndexes()
result = get.byIndexes([-1, -3, 0, 2]);
if (arraysMatch(result, [10, 8, 1, 3])) console.log('test 1A passed');
else console.log('test 1A FAILED');


// Test 2:  test .copy()
result = get.copy();
if (arraysMatch(get.data, result)) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3:  test .head()
result = get.head(4);
if (arraysMatch(result, [1, 2, 3, 4])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4:  test .tail()
result = get.tail(4);
if (arraysMatch(result, [7, 8, 9, 10])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5:  test .between()
result = get.between(4);
if (arraysMatch(result, [5, 6])) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6:  test .adjacentAt()
result = get.adjacentAt(-4, 2);
if (arraysMatch(result, [7, 8])) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7:  test .adjacentToValue()
result = get.adjacentToValue({value: 5, offset: -2, howMany: 3});
if (arraysMatch(result, [3, 4, 5])) console.log('test 7 passed');
else console.log('test 7 FAILED');


// Test 8:  test .allAfterFirst()
result = get.allAfterFirst(7);
if (arraysMatch(result, [8, 9, 10])) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9:  test .allBeforeFirst()
result = get.allBeforeFirst(5);
if (arraysMatch(result, [1, 2, 3, 4])) console.log('test 9 passed');
else console.log('test 9 FAILED');


// Test 10:  test .allAfterLast()
result = get.allAfterLast(5);
if (arraysMatch(result, [6, 7, 8, 9, 10])) console.log('test 10 passed');
else console.log('test 10 FAILED');


// Test 11:  test .allBeforeLast()
result = get.allBeforeLast(4);
if (arraysMatch(result, [1, 2, 3])) console.log('test 11 passed');
else console.log('test 11 FAILED');


// Test 12:  test .uniqueItems()
get.data = [1, 1, 2, 2, 3, 3, 4, 4];
result = get.uniqueItems();
if (arraysMatch(result, [1, 2, 3, 4])) console.log('test 12 passed');
else console.log('test 12 FAILED');


// Test 13: test .duplicates()
result = get.duplicates();
if (arraysMatch(result, [1, 2, 3, 4])) console.log('test 13 passed');
else console.log('test 13 FAILED');


// Test 14: test .shuffled()
get.data = [1, 2, 3, 4];
result = get.shuffled();
if (result.length === 4 && result.includes(1) && result.includes(2) &&
	result.includes(3) && result.includes(4)) console.log('test 14 passed');
else console.log('test 14 FAILED');


// Test 15: test .byTest()
get.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = get.byTest((value) => value < 8 && value > 4);
if (result.length === 3 && result[0].value && result[0].value === 5 &&
	result[0].index === 4 && result[1].value === 6 &&
	result[1].index === 5 && result[2].value === 7 &&
	result[2].index === 6) console.log('test 15 passed');
else console.log('test 15 FAILED');


// Test 16: test .byType()
get.data = [1, 2, 3, 4, true, 5, 6, 7, 8, false, 9, 10];
result = get.byType('boolean');
if (result.length === 2 && result[0].value &&
	result[0].value === true && result[0].index === 4 &&
	result[1].value === false && result[1].index === 9) console.log('test 16 passed');
else console.log('test 16 FAILED');
