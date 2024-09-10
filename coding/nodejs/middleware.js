import express from 'express';
const app=express();
const port =6000;
function middleware(req,res,next){
     var x=req.headers.x;
     var x=parseInt(x);
     if(x>18){
        console.log("yes u can proceed ");
        next();
     }
     else{
        res.send("error");
     }
     
}
app.use(middleware);
app.get("/",(req,res)=>{
    res.send("yes you are eligible");
})
app.listen(port,()=>{
    console.log("ready");
})