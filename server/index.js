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
    comments.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(comments[req.params.id - 1])
});

//get comments array and add another comment to it 
app.post('/comments/:id', (req, res, next)=>{
    comments.push(req.body);
    commentCount++;
    comments.map((item, index)=>{
        item._id = index + 1;
    })
    return res.json(comments[req.params.id - 1])
});

//get the products array
app.get('/products', (req, res, next)=>{
    return res.json(products)
});

//get each product by id 
app.get('/products/:id', (req, res, next)=>{
    products.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(products[req.params.id - 1])
});

//get products array and add another product to it 
app.post('/products/:id', (req, res, next)=>{
    products.push(req.body);
    productsCount++;
    products.map((item, index)=>{
        return item._id == index + 1 ? item._id = index + 1 : item._id = productsCount;
    })
    return res.json(products[req.params.id - 1])
});

//get the vehicles array
app.get('/vehicles', (req, res, next)=>{
    return res.json(vehicles)
});

//get each vehicle by id 
app.get('/vehicles/:id', (req, res, next)=>{
    vehicles.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(vehicles[req.params.id - 1])
});

//get vehicles array and add another vehicle to it 
app.post('/vehicles/:id', (req, res, next)=>{
    vehicles.push(req.body);
    vehiclesCount++;
    vehicles.map((item, index)=>{
        return item._id == index + 1 ? item._id = index + 1 : item._id = vehiclesCount;
    })
    return res.json(vehicles[req.params.id - 1])
});

//get the contacts array
app.get('/contacts', (req, res, next)=>{
    return res.json(contacts)
});

//get each contact by id 
app.get('/contacts/:id', (req, res, next)=>{
    contacts.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(contacts[req.params.id - 1])
})

//get contacts array and add another contact to it 
app.post('/contacts/:id', (req, res, next)=>{
    contacts.push(req.body);
    contactsCount++;
    contacts.map((item, index)=>{
        return item._id == index + 1 ? item._id = index + 1 : item._id = contactsCount;
    })
    return res.json(contacts[req.params.id - 1])
});


app.listen(3001, (err) => {
    if (err) {
      return console.log("Error", err);
    }
    console.log("Web server is on");
});