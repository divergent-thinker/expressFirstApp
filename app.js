var express = require('express');
var app = express();

/*
Routing. Find out how to create a different end of hte url path. 
How to accept requests at these different urls. e.g /hello-world
*/



app.get('/', function (req, res) {
	res.send('Hello World!');
});


/*look into createing a new end point, path,instead of just replying at /, 
want it to be able to reply to /helen/awesome. Using this: http://expressjs.com/en/4x/api.html

app.get('/helen/awesome', function (req, res) {
	res.send('awesome');
});
*/

//Response. Find out how to reply with a different status code.

app.get('/bad/helen', function (req, res) {
	res.status(500).send('bad');
});


/*
In the documentation for express, find out how to pass request parameters. 
Find a way of getting hold of the request parameters

app.get('/user/:name', function (req, res) {
	req.params.name;
	res.status(200).send(req.params.name + ": " + blogData);
});
*/
var port = parseInt(process.env.PORT || 3000);

app.listen(port, function () {
	console.log('Example app listening on port '+port+'!');
});



