const http = require('http');
const port = 3002;

http.createServer((req, res) => {
	res.write('hello2');
	res.end();

}).listen(port, "localhost");

console.log(`running at http://localhost:${port}`);