import express from 'express';
import bodyParser from "body-parser"
import path from 'path'
import cors from 'cors'

import { fileURLToPath } from 'url';
// Get the filename and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app= express();
const port =5000;
app.use(cors());
app.use(bodyParser.json());
var todo=[];
function find(todo,index){
    for(let i=0;i<todo.length;i++){
        if(todo[i].id==index){
            return i;}
            return -1;}
}; 
function re(todo,index){
    var tot=[];
    for(let i=0;i<todo.length;i++){
        if(i!=index){
            tot.push(todo[i]);
        }
    }
    return tot;
}

app.get('/todo',(req,res)=>{
   
    res.json(todo);
})
var ctr=0;
app.post('/todo',(req,res)=>{
    var x=req.body.dis;
    var y=req.body.topic;
    var tot={
        "id":ctr,
        "dis":x,
        "topic":y
    } 
    todo.push(tot);
    ctr=ctr+1;
    res.status(200).json(todo);
})
app.delete('/dele',(req,res)=>{
    const arr=find(todo,parseInt(req.params.index));
    if(arr==-1){
        res.status(400).send();
        console.log("error");
    }
    else{
        re(todo,arr);
        res.status(200).send()
    }

})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
   
});
app.listen(port,()=>{
    console.log("ready to serve");
})