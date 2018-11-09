const comments = require("../comments");
const CommentModel = require("../models/CommentModel");

let commentCount = comments.length;

module.exports.list = (req, res)=>{
    CommentModel.find({}).exec().then((comments)=>{
        return res.json(comments)
    })
    // return res.json(comments)
}
module.exports.show = (req, res)=>{
    CommentModel.findById(req.params.id).exec().then((comment)=>{
        return res.json(comment)
    })
    // let comment = comments.find((id)=>{
    //     return id._id == req.params.id
    // })
    // return res.json(comment)
}
module.exports.create = (req, res)=>{
    const c = new CommentModel({
        body: req.body.body
    });

    c.save().then(savedComment=>{
        return res.json(savedComment)
    })
    // let newComment = req.body;
    // comments.push(newComment);
    // commentCount++;
    // newComment._id = commentCount;
    // return res.json(newComment)
}
module.exports.update = (req, res)=>{
    return res.json({theId: req.params.id})
}
module.exports.remove = (req, res)=>{
    return res.json({})
}