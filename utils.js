
function groupBy (values, keyfn) {
	//key = return value of function
	if (values.length == 0) {
		return {};
	}

	var result = {};
	var item = values[0];
	var key = keyfn(item);
	result[key] = values;
	return result
}

function groupByHeight(values, keyfn){
//function groupBy (heights, categoryfn)
	
	var tall = [];
	var normal = [];
	var little = [];
	
	//var key = category(height);
	for (var i=0; i< values.length; i++) {
		// console.log (i, values, values[i], keyfn(height));
		var height = values[i];
		var category = keyfn(height);
		
		if (category === 'tall') {
			tall.push(height);
		} else if (category === "normal") {
			normal.push(height);
		} else {
			little.push(height);
		}
		// console.log(tall,normal,little);
	}


	var result = {
		"tall": tall,
		"normal": normal,
		"short": little, 
	}
		
	return result
}

function groupByColour(items, keyfn){

	var red = [];
	var blue = [];
	var green = [];
	var black = [];

for (var i=0; i< items.length; i++) {
		// console.log (i, values, values[i], keyfn(height));
		var color = items[i];
		var category = keyfn(color);
		
		if (category === 'red') {
			red.push(color);
		} else if (category === 'blue') {
			blue.push(color);
		} else if (category === 'green') {
			green.push(color);
		} else {
			black.push(color);
		}
	}

	var result = {
		"green": green,
		"blue": blue,
		"red": red, 
		"black": black, 
	}
		
	return result
}




function groupBy (values, keyfn){

	//Create a result object:
	var results = {};

	//For every item:
	for (var i=0; i<values.length; i++) {
		//grab the value
		var value = values[i];
		//find the key of the value
		var key = keyfn(value);


		//Check if the key is in teh results already
		if (results[key]) {

		} else {
			results[key] = [];
		}
		//Add values to the appropriate array
		results[key].push(value);		
	}

	return results;
}

function groupBy (values, keyfn){

	//Create a result object:
	var results = {};

	//For every item:
	for (var i=0; i<values.length; i++) {
		//grab the value
		var value = values[i];
		//find the key of the value
		var key = keyfn(value);


		//Check if the key is in teh results already
		if (results[key]) {

		} else {
			results[key] = [];
		}
		//Add values to the appropriate array
		results[key].push(value);		
	}

	return results;
}





	



module.exports = {
	groupBy: groupBy,
	groupByHeight: groupByHeight,
	groupByColour: groupByColour,
};