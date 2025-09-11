import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
   blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blog",
    required: true
   }
})

const Comment = mongoose.model("comment", commentSchema)

export default Comment;