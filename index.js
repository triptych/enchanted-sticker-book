const express = require("express");
const bodyParser = require("body-parser");

// create express app

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
