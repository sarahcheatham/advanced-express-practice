let express = require("express");

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://scheatham:124Olive@ds153093.mlab.com:53093/express-practice")

const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");

let CommentRoutes = require("./routes/CommentRoutes");
let ContactRoutes = require("./routes/ContactRoutes");
let ProductRoutes = require("./routes/ProductRoutes");
let VehicleRoutes = require("./routes/VehicleRoutes");

let app = express();

const bodyParser = require("body-parser");

//used in the listen method
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);

//changed original listen method to this
app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
});