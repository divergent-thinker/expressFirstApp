function groupBy (values, keyfn){

	//Create a result object:
	var results = {};

	values.forEach(function	(value) {
		var key = keyfn(value);

		if (!(key in results)) {
			results[key] = [];
		} 
		//Add values to the appropriate array
		results[key].push(value);
	});

	return results;
}

/* The chunk function takes a collection and splits it 
 * up into subcollections each of size size. 
 * It will return another collection of smaller chunks.
 * 
 *     [1,2,3,4,5,6,7,8,9] -> [[1,2,3], [4,5,6], [7,8,9]]
 *	   [1,2,3,4,5,6,7] -> [[1,2], [3,4], [5,6]]
 */
function chunk (items, size) {

	var finalBox = [];
	for (var i = 0; i+size<=items.length; i+=size) {
		finalBox.push(items.slice(i, i+ size));
	}
	return finalBox;
}


function chunk2 (items, size) {
	if (items.length<size) { return [];}

	var finalBox = [];

	for (var chunkOffset=0; chunkOffset+size<=items.length; chunkOffset+=size) {	
		var chunk=[];
		for (var i=0; (i<size); i++) {
			chunk.push(items[chunkOffset+i]); 
		}	
		finalBox.push(chunk);
	}
	return finalBox;
}

/* ARRAY.SLICE METHOD
 * arr.slice is a method which takes in the first 
 * and the final index that you want to slice at,
 * and creates a new array with those items. 
 */



/* ARRAY.MAP METHOD
 * arr.map(callback)
 */




/* ARGUMENTS ARRAY
 * The arguments object is a local variable 
 * available within all functions. You can refer 
 * to a function's arguments within the function 
 * by using the arguments object. This object 
 * contains an entry for each argument passed to 
 * the function, the first entry's index starting 
 * at 0. For example, if a function is passed 
 * three arguments, you can refer to them as 
 * follows:
 * arguments[0]
 * arguments[1]
 * arguments[2]
 */

/* Zip takes any number of arrays and will return a single 
 * array with
 * the nth element of the return array being an array of 
 * each of the 
 * elements in the input arrays. 
 * 
 *     zip([1,2,3], ['a','b','c']) -> 
 * 	       [[1,'a'], [2,'b'], [3,'c']]
 * 
 *     zip([1,2,3], [1,2]) ->
 *         [[1,1], [2,2]]
 *
 *     zip([1,2,3], ['a','b','c'], ['x','y','z']) ->
 *         [[1,'a','x'], [2,'b','y'], [3,'c','z']]
 * 
 */
 

// 1. Solve for two lists of the same length
//2. Solve for two lists of different lengths
// zip (['a', 'b', 'c'], [1, 2, 3, 4, 5, 6]);

/*function zip (a, b) {
	var finalBox = [];
	var minLength = Math.min(a.length, b.length);
	for (var i=0; i < minLength; i++) {
		var small = [];
		small.push(a[i]);
		small.push(b[i]);
		
	}
	return finalBox;
}


//turn arguments array into an array of lengths
*/




//3. Solve for n lists of any lengths 

function zip () {
	var noOfArguments = arguments.length; //e.g. 3 arguments

	var finalBox = [];
	var args = Array.from(arguments);
	var lengths = args.map(function (argument) {
		return argument.length;
	});

	var minLength = lengths.reduce(function (a, b) { return Math.min (a, b)});
	/* Chained version:
	 * var minLength = Array.from(arguments)
	 *	.map(function (argument) {
	 *		return argument.length;
	 *	})
	 *	.reduce(function (a, b) { return Math.min (a, b)});
	 */

	for (var arrItem=0; arrItem<minLength; arrItem++) { 
		var small = [];
		for (var argument=0; argument<noOfArguments; argument++) {
			small.push(arguments[argument][arrItem]);
		}	
		finalBox.push(small);
	}
	return finalBox;	
}


// zip (['a', 'b', 'c', 'd'], [10, 20, 30, 40], [1, 2, 3, 4, 5, 6]);

	/*
	return arrs[0].map(function(_,i){
		return arrs.map(function(array)){return array[i]})
	});
	*/



// > zip([[1,2],[11,22],[111,222]])
// [[1,11,111],[2,22,222]]]

// If you believe the following is a valid return value:
//   > zip([])
//   []
// then you can special-case it, or just do
//  return arrays.length==0 ? [] : arrays[0].map(...)






//predicate - a function that returns true or false
/*
 * This will return a collection with only the items for which the predicate 
 * is true. It will filter out all the items that fail the predicate in the
 * collection. 
 *
 *     function isEven (numb) {
 *       return (numb%2) == 0;
 *     }
 *
 *     filter(isEven, [0, 6, 54, 39, 23, 77]) ->
 *         [0, 6, 54]
 */
function filter (predicate, collection) {
	var  passed = [];
	for (var i = 0; i < collection.length; i++) {
		if (predicate(collection[i])) {
			passed.push(collection[i]);
		}
	}
	return  passed;
}


/*
 *     object2array({a:1, b:2, c:3}) ->
 *       [[a,1], [b,2], [c,3]]
 */
function object2array (obj) {
	

}

/*
 *     array2object([[a,1], [b,2], [c,3], [b]]) ->
 *       {a:1, b:2, c:3}
 *		[['a',1]] -> {a:1}
 */

function array2object (arr) {
	//CHECKS
	if (arr.length < 1) {
		return {};
	}
	arr.forEach (function (pair) {
		if (pair.length !=2) {
			throw new Error('Incorrect data given to array2object');
		}
	})

	//WORK
	var obj = {};
	arr.forEach (function (pair) {
		var propertyName = pair[0];
		var value = pair[1];
		obj[propertyName] = value;
	});
	return obj;
}	
	 //cabinet[name of drawer] = put something inside.
	//only use dot notation when you know the propertyName of the thing that you want to change or add. 
	
	//CATCH - e.g. if error occured while working, sort it out here or pass it on 
	// to another function. 


	//CLEANUP (none to do in this case)
	
	//EXIT











/* similar to deep equals in the test - 
 * i.e. it will execute the function on 
 * EVERYTHING
 *     function double(x){return x*2;}
 *     deepMap(double,[1,2,3, [4,5,6], 7, 8, [[9, 10], 11]]) ->
 *         [2,4,6, [8,10,12], 14, 16, [[18, 20], 22]]
 * 
 * HINT: This will require recursion - 
 * i.e. the function will call itself. 
 * You'll also probably need to use the 
 * instanceof keyword in my function.
 */
function deepMap (fn, collection) {

}


/*
 * Flatten will take an array of arrays and return 
 * an array composed of all the individual elements 
 * of the arrays in the input.
 *
 * This on-level flatten can also be thought of as
 * 'concat', because you're concatenating the arrays 
 * together
 *
 *     flatten([[1], [2,3], [4,5,6]]) -> [1,2,3,4,5,6]
 *     flatten([['a','b'], [2,3], ['c','d']]) -> ['a','b',2,3,'c','d']
 *     flatten([['a',['b']], [2,[3]], ['c',['d']]]) -> ['a',['b'],2,[3],'c',['d']]
 */
function flatten(arr){

}

/*
 * DeepFlatten will behave as flatten does in simple cases,
 * however, it will also attempt to flatten every element 
 * inside the input array.
 *
 *     deepFlatten([[1], [2,3], [4,5,6]]) -> [1,2,3,4,5,6]
 *     deepFlatten([['a','b'], [2,3], ['c','d']]) -> ['a','b',2,3,'c','d']
 *     deepFlatten([['a',['b']], [2,[3]], ['c',['d']]]) -> ['a','b',2,3,'c','d']
 *     deepFlatten([[[[[[[[[['a']]]]]]]]]]) -> ['a']
 */
function deepFlatten(arr){

}

/* 
 * It will return the subcollection - 
 * the collection starting and ending 
 * at integer numbers. It will use indexes. 
 * It will include the start
 * index but exclude the end index. 
 * 
 *     slice([1,2,3,4,5], 2,6) -> [3,4,5]
 *     slice([1,2,3,4,5], 0,6) -> [1,2,3,4,5]
 *     slice([1,2,3,4,5], 0,3) -> [1,2,3]
 *     slice([1,2,3,4,5], 2,3) -> [3]
 *
 */
function slice (collection, start, end) {
	return collection.slice(start, end);
}


module.exports = {
	groupBy: groupBy,
	chunk: chunk,
	chunk2: chunk2,
	zip: zip,
	filter: filter,
	object2array: object2array,
	array2object: array2object,
	slice: slice,
	deepMap: deepMap,
	flatten: flatten,
	deepFlatten: deepFlatten
};