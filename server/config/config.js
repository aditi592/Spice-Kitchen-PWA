//check environments.
var env = process.env.NODE_ENV || 'development';

//fetch config data from config.json
var config = require('./config.json');
var envConfig = config[env]; //retriving the environment property
//configuring the node js API using the config data
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]); //bascially hold the port and URI