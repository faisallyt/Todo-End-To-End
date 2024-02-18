const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://anony6905:faisald181@cluster0.zwdgraw.mongodb.net/todos")

const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}


