const contacts = require("../contacts");
let contactsCount = contacts.length;

module.exports.list = (req, res)=>{
    return res.json(contacts) 
}
module.exports.show = (req, res)=>{
    let contact = contacts.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(contact)
}
module.exports.create = (req, res)=>{
    let newContact = req.body;
    contacts.push(newContact);
    contactsCount++;
    newContact._id = contactsCount;
    return res.json(newContact)
}
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
}
module.exports.remove =  function remove(req, res) {
    return res.json({});
}
   