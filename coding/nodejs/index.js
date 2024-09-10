import express from 'express';
var port=9000;
var app=express();
function add(x,y){
  console.log(x+y);
  if(x>40){
    console.log("the sum is greater thn 40");
  }
  else{
    console.log("not greater");
  }
}
function red(req,res){
  var x=req.query.x;
  var y=req.query.y;
  var ans=add(x,y);
  res.send(ans);
}
app.get("/",red);
app.listen(port,()=>{
  console.log("hello world ");
});