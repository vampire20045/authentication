import express from 'express';
import bodyParser from 'body-parser';
const app= express();

app.use(bodyParser.json());
function mid(req,res,next){
    var x= req.query.counter;// used to take input from the url
    var y=req.headers.p;// used to take inpur form postman header 
    var z= req.body.count;
    console.log(z);
    next();
};
app.use(mid);
app.get("/",(req,res)=>{
    res.send("hello world");
});
app.listen(port,(req,res)=>{
    console.log("server is ready ");
})
