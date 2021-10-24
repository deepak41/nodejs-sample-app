var nconf = require('nconf');
nconf.set('NODE_PORT', '3000');
nconf.set('url', 'localhost');
nconf.set('secret', 'sunnyday');
nconf.set('database', 'mongodb://localhost/nodejs-sample-app');
