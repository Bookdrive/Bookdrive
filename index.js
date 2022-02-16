'use strict';
let db = require('./database');
let {app} = require("./server");
let cors = require('cors');
let corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 
}

//Fetch all books on home page
app.get("/", cors(corsOptions),async (_req, res, _next) => {
    let conn;
    try {
        const result = await db.pool.query("select * from Books");
        res.send(result);
        console.log(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn)
            return conn.release();
    }
});
