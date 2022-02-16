'use strict'

let express = require('express');
let app = express();

let port = 3000;
exports.app = app;
app.listen(port, function(){console.log(`Listening on port ${port}`)});
