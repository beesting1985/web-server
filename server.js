var express = require('express');
app = express();
var port = 3000;

var middleware = require('./middleware.js');


// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('About us!!!!');
});

app.use(express.static(__dirname + '/Public'));

// console.log(__dirname); 

app.listen(port, function(){
	console.log('Server is started at port: ' + port);
});