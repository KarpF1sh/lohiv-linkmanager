const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// import the site router
const base = require('./routes/base')

// create app
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use the base router
app.use(base);

// start listening
app.listen(3001);
console.log('Server is listening on port 3001');
