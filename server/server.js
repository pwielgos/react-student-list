var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var students = require('./routes/student.router.js');
var port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for post/put requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/students', students);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});