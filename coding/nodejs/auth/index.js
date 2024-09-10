import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
const app=express();
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port=9000;
app.use(express.json());
app.use(cors());
var admin=[];
var user=[];
var courses=[];
app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname ,"index.html"));
});
app.get('/details',(req,res)=>{
    res.json(admin);
})
app.get('/users',(req,res)=>{
    res.json(admin);
})
function auth(req,res,next) {
    const {username,password}=req.headers;
    const z= admin.find(a=>a.username===username && a.password===password)
    if(z){
        console.log("successful");
        res.json({message:"Admin successfully login"});
        next();
    }
    else{
        res.json({message:"please try again"});
    }
    
}
app.post("/admin/login",auth,(req,res)=>{
    console.log("successful")
})
app.post('/admins',(req,res)=>{
    var z=req.body;
    const exit=admin.find(a=>a.username===z.username);
    if(exit){
        res.status(403).send("user already exits");
    }
    else{
        admin.push(z);
        res.status(200).send("successfully login");
    }

});
app.post('/users',(req,res)=>{
    var z=req.body;
    const exit=user.find(a=>a.username===z.username);
    if(exit){
        res.status(403).send("user already exits");
    }
    else{
        user.push(z);
        res.status(200).send("successfully sign up");
    }

});
app.post('/admin/course',auth,(req,res)=>{
    const course=req.body;
     course.id=Date.now();
     courses.push(course);
     res.json({message:"course added successully"});});
app.put('/admin/course/id',auth,(req,res)=>{
    const newcourse=req.body;
    const z=courses.find(a=>a.id===newcourse.id);
    if(z){
        Object.assign(courses,newcourse);
        res.json({message:"updated successfuly"})
    }
})
app.listen(port,()=>{
    console.log("ready to serve");
})