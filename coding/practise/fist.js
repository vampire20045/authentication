import express from 'express';
import body from 'body-parser';
const app=express();
const port =4000;
app.use(body.json());

function login(req,res){
    var user=req.body.user;
    var pass= req.body.pass;
    if(user=="Aryan"){
        if(pass=="aryan"){
            console.log("user is authenticate");
            res.send("user is authenticate");
        }
        else{
            res.status(411).send("not allowed");

        }
    }
    else{
        res.status(411).send("not allowed");

    }
}
function aryan(req,res){
var x = req.body.counter;
if(x%2==0){
    res.send("this number is the prime number ");
    
}
else{
    res.status(411).send("this i9s  the error");
}
}
app.get("/",aryan);
app.post("/submit",login);
app.listen(4000,(req,res)=>{
    console.log("server is ready ");
})