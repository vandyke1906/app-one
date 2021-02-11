const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforceSsl = require('express-sslify');

const app = express();

//force https
app.use(enforceSsl.HTTPS({trustProtoHeader: true}));

//serve all production compiled files
app.use(serveStatic(__dirname+'/dist'));

//running history
app.use(history());


//run app - listen to certain port
app.listen(process.env.PORT || 5000);