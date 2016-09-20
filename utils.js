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

	



module.exports = {
	groupBy: groupBy,
};