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