'use strict';
let db = require('./database');
let { app } = require("./server");
let serveStatic = require("serve-static");
let cors = require('cors');
const { request, response } = require('express');
let corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}

//Fetch all books on home page
app.get("/", cors(corsOptions), async (_req, res, _next) => {
    let conn;
    try {
        const result = await db.pool.query("select * from Books");
        res.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn)
            return conn.release();
    }
});

//Fetch book details on posts popup by BookID
app.use("/posts", async (request, response) => {
    console.log(request.path); //will help in generating server side data maybe later of some use
    var id = request.path;
    id = id.slice(1);
    let conn1;
    try {
        const result = await db.pool.query("select * from Users join Posts using (userId) left join Books using (bookId) where bookId=?", [id]);
        response.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn1)
            return conn1.release();
    }
});

//Fetch user countries
app.get("/usrCont", cors(corsOptions), async (_request, response, _next) => {
    let conn;
    try {
        const result = await db.pool.query("select unique cont_code from Users");
        response.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn)
            return conn.release();
    }
});

//Fetch different fields %age in the category of books
app.get("/fields", cors(corsOptions), async (_req, res, _next) => {
    let conn;
    try {
        const result = await db.pool.query("select count(field)/10 AS percentage, field FROM Category group by field");
        res.send(result);
    } catch (err) {
        throw err;
    } finally {
        if (conn)
            return conn.release();
    }
});

//Throw analytics static page
app.use("/analytics", serveStatic("analytics.html"));
app.use("/analytics%20copy", serveStatic("analytics copy.html"));
