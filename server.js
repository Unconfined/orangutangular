var express = require('express');
var server = express();

server.use(express.static('client'));

server.listen(8000);