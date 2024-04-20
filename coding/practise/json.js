import express from "express";
import body from "body-parser";
const app=express();
const port =8000;
 app.use(body.json());
 var arr=[];
 function find(arr,value){
    for(const i of arr){
        if(arr[i].id==value){
            return i;
        }
    }
 }
 app.get("/",(req,res)=>{
    console.log("1 get request");
    var a= find(arr,4);
    res.send(a);
 })
 app.post("/submit",(req,res)=>{
    var ar= req.body.id;
    var a={
        "id":ar
    }
    arr.push(a);
 })
 app.listen(port,(req,res)=>{
    console.log("server is ready");
 })