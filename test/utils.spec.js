 var mocha = require('mocha');
 var expect = require('chai').expect;
 var utils = require('../utils');


 //first write describe - input a description of *what* you're testing, followed by a function
 //in this function describe what the thing (e.g. a function, a module etc) should do. 


 describe ('The groupBy Function', function () {
 	it ('should handle empty input properly',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var values = [];
 		var keyfn = function () {};

 		//ACT
 		var result = utils.groupBy(values, keyfn);

 		//ASSERT
 		//I would expect the result of groupBy to be an empty object. 
 		expect(result).to.be.deep.equal({});
 	}) //should return an empty object when given an empty array


 	it ('should handle arrays where all the elements have the same key',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		//Sets the values you'll be using for your test. Creates all values you need. 
 		var values = [1, 2, 3, 4, 5];
 		var key = 'o';
 		var keyfn = function (elementOfArray) {
 			return key;
 		};

 		//ACT - is where you call the code that's being tested.
 		var result = utils.groupBy(values, keyfn);

 		//ASSERT
 		//I would expect the result of groupBy to be an empty object. 
 		var expected = {}
 		expected[key]=values;
 		expect(result).to.be.deep.equal(expected);
 	}) //should return an empty object when given an empty array
});

describe ('The groupByHeight Function', function () {
 	it('should handle arrays with different keys', function(){
 		var heights = [2.0, 1.85, 1.24, 1.70, 1.75];
 		var category = function(height){
 			if(height >= 1.80){
 				return 'tall';
 			}
 			else if(height < 1.80 && height >= 1.65){
 				return 'normal';
 			}
 			else{
 				return 'short';
 			}
 		}

 		var result = utils.groupByHeight(heights, category);

 		expect(result).to.deep.equal({
 			"tall":[2.0, 1.85],
 			"normal":[1.70,1.75],
 			"short":[1.24]
 		});
 	})
 });

describe ('The groupByColour function', function () {
 	it('should handle arrays with different keys', function(){
 		var things = [
 			{name: 'fire', color:'red'}, 
 			{name: 'water', color:'blue'},
 			{name: 'sky', color:'blue'},
 			{name: 'blood', color:'red'},
 			{name: 'grass', color:'green'},
 			{name: 'frog', color:'green'},
 			{name: 'coal', color:'black'}
 		];
 		var category = function(thing){
 			return thing.color;
 		}

 		var result = utils.groupByColour(things, category);

 		expect(result).to.deep.equal({
 			"green":[{name: 'grass', color:'green'},{name: 'frog', color:'green'}],
 			"blue":[{name: 'water', color:'blue'},{name: 'sky', color:'blue'}],
 			"red":[{name: 'fire', color:'red'},{name: 'blood', color:'red'}],
 			"black":[{name: 'coal', color:'black'}]
 		});
 	})
 });

describe ('The groupBy function', function () {
 	it('should handle any set of data', function(){
 		var values = [
 			{name: 'Cameron Petrie', siteKey:'Toll-e Nurabad'}, 
 			{name: 'Dan Potts', siteKey:'Toll-e Nurabad'},
 			{name: 'Lloyds Weeks', siteKey:'Toll-e Nurabad'},
 			{name: 'Hossein Azizi', siteKey:'Tappeh Rahmat Abad'},
 			{name: 'Susan Pollock', siteKey:'Tappeh Rahmat Abad'},
 			{name: 'Alexander Langsdorff', siteKey:'Tall-e Bakun A'},
 			{name: 'Claire Goff', siteKey:'Tall-e Nokhodi'}
 		];
 		
 		var keyfn = function(value){
 			return value.siteKey;
 		};

 		var result = utils.groupBy(values, keyfn);
 		
 		var expected = {
 			"Toll-e Nurabad":[
				{name: 'Cameron Petrie', siteKey:'Toll-e Nurabad'}, 
				{name: 'Dan Potts', siteKey:'Toll-e Nurabad'},
				{name: 'Lloyds Weeks', siteKey:'Toll-e Nurabad'}],
 			"Tappeh Rahmat Abad":[
				{name: 'Hossein Azizi', siteKey:'Tappeh Rahmat Abad'},
				{name: 'Susan Pollock', siteKey:'Tappeh Rahmat Abad'}],
 			"Tall-e Bakun A":[
 				{name: 'Alexander Langsdorff', siteKey:'Tall-e Bakun A'}],
 			"Tall-e Nokhodi":[
 				{name: 'Claire Goff', siteKey:'Tall-e Nokhodi'}],
 		};
 		expect(result).to.deep.equal(expected);
 	})
 });


describe ('The chunk Function', function () {
 	it ('should take a collection and split it into subcollections',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var items = [1,2,3,4,5,6,7,8,9];
 		var size = 3;

 		//ACT
 		var result = utils.chunk(items, size);

 		//ASSERT
 		expect(result).to.be.deep.equal([[1,2,3], [4,5,6], [7,8,9]]);
 	}) 
});

describe ('The chunk2 Function', function () {
	it ('should take a collection and split it into subcollections', function () {
		var items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		var size = 2;

		var result = utils.chunk2(items, size);

		expect(result).to.be.deep.equal([['a','b'], ['c','d'], ['e','f']]);
	})
});

describe('Our chunking functions',function(){
	it('should behave identically when length is not a multiple of size', function(){
		var items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		var size = 2;

		var chunkresult = utils.chunk(items, size);
		var chunk2result = utils.chunk2(items, size);

		expect(chunkresult).to.deep.equal(chunk2result);
	})
});


describe ('The zip Function', function () {
 	it ('should take in any number of arrays and return a single array constituted of array subcollections which cross-match and combine elements of the input arrays',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var a = [1,2,3];
 		var b = [1,2];

 		//ACT
 		var result = utils.zip(a, b);

 		//ASSERT
 		expect(result).to.be.deep.equal([[1,1], [2,2]]);
 	}) 
});

describe ('The filter Function', function () {
 	it ('should only return items which meet the predicate',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var predicate = function isEven (numb) {
      	return (numb%2) == 0;
     	}
 		var collection = [0, 6, 54, 39, 23, 77];

 		//ACT
 		var result = utils.filter(predicate, collection);

 		//ASSERT
 		expect(result).to.be.deep.equal([0, 6, 54]);
 	}) 
});

describe ('The object2array Function', function () {
 	it ('should turn the contents of an object into an array of arrays',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var obj = {a:1, b:2, c:3};

 		//ACT
 		var result = utils.object2array(obj);

 		//ASSERT
 		expect(result).to.be.deep.equal([[a,1], [b,2], [c,3]]);
 	}) 
});


describe ('The array2object Function', function () {
	it ('should return an empty object when given an empty array',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var arr = [];

 		//ACT
 		var result = utils.array2object(arr);

 		//ASSERT
 		expect(result).to.be.deep.equal({});
 	})

 	it('should return a simple object when given a simple array', function(){
 		var arr = [['a',1]];

 		var res = utils.array2object(arr);

 		expect(res).to.deep.equal({a:1});
 	})
 	it ('should turn the contents of an array into an object',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var arr = [['a',1], ['b',2], ['c',3]];

 		//ACT
 		var result = utils.array2object(arr);

 		//ASSERT
 		expect(result).to.be.deep.equal({a:1, b:2, c:3});
 	}) 
 	it ('should throw an exception if a key does not have a value', function () {
 		var arr = [['a']];

 		var fn = function () { //this function contains the exception so that it can be passedonto expect. 
 			utils.array2object(arr) //this code may throw an exception (we expect it to in this instance)
 		}

		expect(fn).to.throw(Error); //this will handle this particular exception
 	})
});


describe ('The slice Function', function () {
 	it ('should turn the subcollection specified by the start and end index numbers',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var collection = [1,2,3,4,5];
 		var start = 0;
 		var end = 3;

 		//ACT
 		var result = utils.slice(collection, start, end);

 		//ASSERT
 		expect(result).to.be.deep.equal([1,2,3]);
 	}) 
});



describe ('The deepMap Function', function () {
 	it ('will execute the function on all parts of the array, including nested arrays',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var fn = function double(x){
 					return x*2
 				};
 		var collection = [1,2,3, [4,5,6], 7, 8, [[9, 10], 11]];

 		//ACT
 		var result = utils.deepMap(fn, collection);

 		//ASSERT
 		expect(result).to.be.deep.equal([2,4,6, [8,10,12], 14, 16, [[18, 20], 22]]);
 	}) 
});

describe ('The flatten Function', function () {
 	it ('will take array of arrays and will concatonate them to return an array composed of all the individual elements of the arrays in the input.',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var collection = [[1], [2,3], [4,5,6]];

 		//ACT
 		var result = utils.flatten(collection);

 		//ASSERT
 		expect(result).to.equal([1,2,3,4,5,6]);
 	}) 
});

describe ('The deepFlatten Function', function () {
 	it ('will concatonate an arrays of arrays, but unlike flatten it will also attempt to flatten every element inside the input array',  function () {
 		//ARRANGE (put a new line inbetween arrange, act and assert)
 		var collection = [['a',['b']], [2,[3]], ['c',['d']]];

 		//ACT
 		var result = utils.flatten(collection);

 		//ASSERT
 		expect(result).to.equal(['a','b',2,3,'c','d']);
 	}) 
});


 