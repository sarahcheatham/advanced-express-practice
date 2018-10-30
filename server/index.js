let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();
app.use(bodyParser.json());

app.use(express.static('static'));

app.listen(3001, function(){
    console.log('app started on port 3001')
});