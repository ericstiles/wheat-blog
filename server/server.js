// Just a basic server setup for this site
var Stack = require('stack'),
  Creationix = require('creationix'),
  Http = require('http'),
  Logger = require('./logger'),
  Config = require('../config.js');

Http.createServer(Stack(
  Logger.log(),
  require('wheat')(__dirname +"/..", Config)
)).listen(8000);

Http.createServer(Stack(
  Logger.log(),
  require('wheat')(__dirname +"/..", Config)
)).listen(8443);




