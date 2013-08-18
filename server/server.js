// Just a basic server setup for this site
var Stack = require('stack'),
    Creationix = require('creationix'),
    Http = require('http'),
    Logger = require('./logger');

console.log(__dirname);

Http.createServer(Stack(
  Logger.log(),
  require('wheat')(__dirname +"/..")
)).listen(8080);

Http.createServer(Stack(
    Logger.log(),
    require('wheat')(__dirname +"/..")
)).listen(8081);




