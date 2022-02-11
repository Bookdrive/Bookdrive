'use strict'

let express = require('express');
let serveStatic = require('serve-static');
let path = require('path');

let app = express();
let port = 3000;

app.use(serveStatic(path.join(__dirname, 'app')));
app.listen(port, function(){console.log(`Listening on port ${port}`)});
