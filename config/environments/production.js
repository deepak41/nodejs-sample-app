var nconf = require('nconf');
nconf.set('NODE_PORT', '80');
nconf.set('url', 'localhost');
nconf.set('secret', 'sunnyday');
nconf.set('database', 'mongodb://localhost/nodejs-sample-app');
