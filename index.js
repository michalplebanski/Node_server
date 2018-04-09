var http = require('http'),
	fs = require('fs'),
	server = http.createServer();

server.on('request', function(request, response) {
	response.setHeader('Content-type', 'text/html; charset=utf-8');
	if (request.method === 'GET' && request.url === '/') {
		response.write(fs.readFileSync('./index.html', 'utf-8'));
		response.end();
	} else {
		response.setHeader('Content-type', 'image/png');
		response.statusCode = 404;
		response.write(fs.readFileSync('./img/404.jpg'));
		response.end();
	}
});
server.listen(9000);