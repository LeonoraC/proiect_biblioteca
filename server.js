var express = require("express");
var nodeadmin = require("nodeadmin");
var app = express()
var routes = require('./routes/index')


app.use('/nodeamin', nodeadmin(app))

app.use('/', routes);
app.set('port',process.env.PORT);


//view engine setup
app.set('views', __dirname + '/views');
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());



var server = app.listen(app.get('port'),function (){
    console.log("app stared");
});

