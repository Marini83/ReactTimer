var express = require('express');
// var cors = require('cors');
// create our app
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};


var app = express();
// app.use(cors());
//add functionality to express application



app.use(express.static('public'));

app.use(allowCrossDomain);

app.listen(3000, function () {
	console.log('Express server is up on port 3000');
});