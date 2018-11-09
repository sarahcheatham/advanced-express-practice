let mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model("Product", schema);