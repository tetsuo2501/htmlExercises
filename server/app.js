var express = require('express');
var formidable = require('formidable');
var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));
/*
app.get('/submitHello', function (request, response) {
response.writeHead(200, { 'Content-Type': 'text/html' });
response.write('Hello ' + request.query.userName + '!<br />');
response.end('Have a great day!');
console.log('Handled request from ' + request.query.userName);
});
*/
app.post('/submitHelloPost', function(req, resp){
	if (req.method.toLowerCase() == 'post') {
		var form = new formidable.IncomingForm();
		form.parse(req, function(err, fields){
			resp.writeHead(200, {'Content-Type':'text/html'});
			resp.write( 'Hello ' + fields.userName + '!<br/>');
			resp.end('Have a POST great day!');
			console.log('risposto a POST a ' + fields.userName);
		});
	}
});



app.listen(port);
console.log('Server avviato su porta '+port);