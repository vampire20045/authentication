import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
const app=express();
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.json());
app.use(cors());
const port =9000;
const a={
    aryan:'aryan',
    id:23
}
app.get("/submit",(req,res)=>{
    res.send(a);
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,('index.html')));
    res.send("hello world ");
})
app.listen(port,(req,res)=>{
    console.log("app is ready");
})