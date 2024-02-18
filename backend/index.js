const express=require("express");
const app=express();
const {createTodo,updateTodo}=require("./types");
const { todo } = require("./db");

app.use(express.json());


app.post('/todo',async function(req,res){
     const createPayload=req.body;
     const parsedPayload=createTodo.safeParse(createPayload);

     if(!parsedPayload){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
     }
     await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
     })
     res.json({
        msg:"Todo created"
     })
})

app.get("/todos",async function(req,res){
      const todos= await todo.find({});

      res.json({
        todos,
      })
})

app.put('/completed',async function(req,res){
      const updatePayload=req.body;
      const parsedPayload=updatePayload.safeParse(updatePayload);

      if(!parsedPayload){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
      }
      
      await todo.updateOne({
        _id:updatePayload.id
      },{
        completed:true
      })

      res.json({
        msg:"Todo marked as completed"
      })
})


app.listen(3000,function(){
    console.log('Server started at server 3000')
})
