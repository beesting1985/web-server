var express = require('express');
app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function (req, res, next) {
		var date = new Date().toString();
		console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};
// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('About us');
});

app.use(express.static(__dirname + '/Public'));

// console.log(__dirname); 

app.listen(port, function(){
	console.log('Server is started at port: ' + port);
});