const comments = require("../comments");

let commentCount = comments.length;

module.exports.list = (req, res, next)=>{
    return res.json(comments)
}
module.exports.show = (req, res, next)=>{
    const comment = comments.find((id)=>{
        return id._id == req.params.id
    })
    return res.json(comment)
}
module.exports.create = (req, res, next)=>{
    const newComment = req.body;
    comments.push(newComment);
    commentCount++;
    newComment._id = commentCount;
    return res.json(newComment)
}
module.exports.update = (req, res, next)=>{
    return res.json({theId: req.params.id})
}
module.exports.remove = (req, res, next)=>{
    return res.json({})
}