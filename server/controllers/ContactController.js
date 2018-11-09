const contacts = require("../contacts");
const ContactModel = require("../models/ContactModel");
let contactsCount = contacts.length;

module.exports.list = (req, res)=>{
    ContactModel.find({}).exec().then((contacts)=>{
        return res.json(contacts)
    })
    // return res.json(contacts) 
}
module.exports.show = (req, res)=>{
    ContactModel.findById(req.params.id).exec().then((contact)=>{
        return res.json(contact)
    })
    // let contact = contacts.find((id)=>{
    //     return id._id == req.params.id
    // })
    // return res.json(contact)
}
module.exports.create = (req, res)=>{
    const newContact = new ContactModel({
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    });
    newContact.save().then(savedContact=>{
        return res.json(savedContact)
    })
    // let newContact = req.body;
    // contacts.push(newContact);
    // contactsCount++;
    // newContact._id = contactsCount;
    // return res.json(newContact)
}
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
}
module.exports.remove =  function remove(req, res) {
    return res.json({});
}
   