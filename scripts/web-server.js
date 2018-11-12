var express = require('express');
var path = require('path');
var app = express();
var roothPath = path.normalize(__dirname + '/../');

app.use(express.static(roothPath + '/app'));

app.listen(8000);

console.log('Server listening on port 8000');