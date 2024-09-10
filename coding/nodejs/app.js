import express from 'express';
const app=express();
app.post('/',(req,res)=>{
    console.log("ready");
    res.send("hellp");
})
app.get("/submit",(req,res)=>{
    var x= req.headers.x;
    console.log(req.headers);
    console.log("hello world");
    res.send(x);
})
app.listen(7000,()=>{
    console.log("response ");
})