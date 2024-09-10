import express from 'express';
import bodyParser from 'body-parser';
const app=express();
const port =5000;
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    var x= req.body.x;
    var z=x+1;
    res.status(200).json(z);
    console.log("output is ready");
});
app.listen(port,()=>{ 
    console.log("ready to serve ");
})