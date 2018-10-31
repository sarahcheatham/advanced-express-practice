const express = require("express");

const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contacts = require("./contacts");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

let commentCount = comments.length;
let productsCount = products.length;
let vehiclesCount = vehicles.length;
let contactsCount = contacts.length;

//get the comments array
app.get('/comments', (req, res, next)=>{
    return res.json(comments)
});

//get each comment by id 
app.get('/comments/:id', (req, res, next)=>{
    const comment = comments.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(comment)
});

//get comments array and add another comment to it 
app.post('/comments', (req, res, next)=>{
    const newComment = req.body;
    comments.push(newComment);
    commentCount++;
    newComment._id = commentCount;
    return res.json(newComment)
});

//get the products array
app.get('/products', (req, res, next)=>{
    return res.json(products)
});

//get each product by id 
app.get('/products/:id', (req, res, next)=>{
    const product = products.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(product)
});

//get products array and add another product to it 
app.post('/products', (req, res, next)=>{
    const newProduct = req.body;
    products.push(newProduct);
    productsCount++;
    newProduct._id = productsCount;
    return res.json(newProduct)
});

//get the vehicles array
app.get('/vehicles', (req, res, next)=>{
    return res.json(vehicles)
});

//get each vehicle by id 
app.get('/vehicles/:id', (req, res, next)=>{
    const vehicle = vehicles.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(vehicle)
});

//get vehicles array and add another vehicle to it 
app.post('/vehicles', (req, res, next)=>{
    const newVehicle = req.body;
    vehicles.push(newVehicle);
    vehiclesCount++;
    newVehicle._id = vehiclesCount;
    return res.json(newVehicle)
});

//get the contacts array
app.get('/contacts', (req, res, next)=>{
    return res.json(contacts)
});

//get each contact by id 
app.get('/contacts/:id', (req, res, next)=>{
    const contact = contacts.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(contact)
})

//get contacts array and add another contact to it 
app.post('/contacts', (req, res, next)=>{
    const newContact = req.body;
    contacts.push(newContact);
    contactsCount++;
    newContact._id = contactsCount;
    return res.json(newContact)
});


app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is on");
});