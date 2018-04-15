const express = require("express");
const bodyParser = require("body-parser");

// create express app

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "welcome to enchanted sticker book"});
});

app.listen(process.env.PORT, () => {
    console.log(" -- server is listening on port "+ process.env.PORT);
})
