var express = require('express');
var app = express();
var port = 3001;
app.use(express.static(__dirname));

var server = app.listen(port, () => {
	console.log('');
	console.log('HTTP server is listening on ' + port + ' port.');
});