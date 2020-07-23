var express= require('express')
var server = express()
var bodyParser = require("body-parser");
var cors = require("cors")
//var router=require('react-router-dom')
//const { pathToRegexp, match, parse, compile } = require("path-to-regexp");


function init(){
server.get('/',function(req,res){res.send("HOLA ILE, SOS GENIAL!!:D")});
server.use(bodyParser.json());
server.use(cors())

server.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});




}








server.listen('3008',function(req,res){console.log("listening port 3008")});

