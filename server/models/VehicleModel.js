let mongoose = require("mongoose");

//code the definition of what a vehicle looks like
const schema = new mongoose.Schema({
 year: {
   type: String
 },
 make: {
    type: String
 },
 model: {
     type: String
 }
});

//all collection names should always be lowercase and plural
//take the word vehicle make it lowercase and add an s
//vehicles
module.exports =  mongoose.model("Vehicle", schema);
