const express = require('express');
const app=express()
const PORT=process.env.PORT||3500;
const cors=require("cors")
const mongoose =require('mongoose')
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["GET","POST","PATCH","DELETE"]
    }
))
app.use(express.json())
main().catch((err)=>console.log(err.message))
async function main(){
  await mongoose.connect("mongodb://localhost:27017/posts")
}

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    datetime:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
})
const postmodel=mongoose.model("post",postSchema);
app.get("/users",async(req,res)=>{
  const users=await postmodel.find();
    return res.json(users);
})
app.post("/users",async(req,res)=>{
    let {title,datetime,body}=req.body;
     if(!title||!body){
         return res.status(404).send("all fields are required!!")
     }
  const users= await postmodel.create(
    {title:title,datetime:datetime,body:body}
   )
   return res.json(users)
    
 })
 app.delete("/users/:id",async(req,res)=>{
    let id=req.params.id;
   await postmodel.findByIdAndDelete(id);
 })
 app.patch("/users/:id",async(req,res)=>{
    
    let {title,datetime,body}=req.body;
    let id=req.params.id;
    if(!title||!body){
        return res.status(404).send("all fields are required!!")
    }
    const users= await postmodel.findByIdAndUpdate(id,{title:title,datetime:datetime,body:body},{new:true})
    return res.json(users)
})
app.listen(PORT,(err)=>{
    console.log(`server is running on port ${PORT}`);
})