const express = require('express');
const bodyParser=require('body-parser');
const cors= require('cors');
const path =require('path');
const app = express();
const mongoose=require('mongoose');
app.use(bodyParser.json());
app.use(express.json());

const user=new mongoose.Schema({
  username:String,
  password:String,
  purchased:[{type: mongoose.Schema.Types.ObjectId,ref:'course'}]});

const admin=new mongoose.Schema({
  username:String,
  password:String
});
const course=new mongoose.Schema({
  title: String,
  dis :String,
  published :Boolean});
const users=mongoose.model('users',user);
const admins=mongoose.model('admins',admin);
const courses=mongoose.model('courses',course);
mongoose.connect('mongodb+srv://aryan98711:2004@cluster0.yay6a.mongodb.net/first1')
const adminauth=async(req,res,next)=>{
const {username,password}=req.body;
const z=await admins.findOne({username,password});
if(z){
  next();
}
else{
  res.json({message:"not exists"});
}}
const userauth=async(req,res,next)=>{
  const {username,password}=req.body;
  const z= await users.findOne({username,password});
  if(z){
    next();

  }
  else{
    res.json({message:"not exists"});
  }}

app.post('/admin/signup', async(req, res) => {
  const {username,password}=req.body;
  const z=await admins.findOne({username});
  if(z){
    res.json({message:"user already exists"});
  }
  else{
    const b={username:username,password:password};
    const newAdmin= new admins(b);
    await newAdmin.save();
    res.json({message:"succefully registered"});
  }
});

app.post('/admin/login', adminauth,(req, res) => {
  res.json({message:"successful",id:admins.id});
  console.log("login succesfully");
  
});

app.post('/admin/courses',adminauth, async(req, res) => {
  const z= new courses(req.body);
  await z.save();
  res.json({message:"course successfully"});


  
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
});

// User routes
app.post('/users/signup', async(req, res) => {
const {username}=req.body;
const z=await users.findOne({username});
if(z){
  console.log("user already exists");
  res.json({message:"user already"});
}
else{
  const y={username:username,password:password};
  const newschema=new users(y);
   await newschema.save();

}
});

app.post('/users/login',userauth,(req, res) => {
  res.json({message:"login successful"});
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {

});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});