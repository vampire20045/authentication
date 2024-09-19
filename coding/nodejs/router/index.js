const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const Signup=require('./router/signup');
const app=express();
app.use(express.json());
app.use('/',Signup);
app.use(cors());
mongoose.connect('mongodb+srv://aryan98711:2004@cluster0.bb6ep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/disaster management');
app.listen(9000,(req,res)=>{
    res.send("server is running on server");
})