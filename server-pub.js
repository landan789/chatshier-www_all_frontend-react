var express = require('express');
var app = express();
 
//setting middleware
console.log(__dirname);
app.use(express.static(__dirname + '/pub')); //Serves resources from public folder
 
var server = app.listen(3030);