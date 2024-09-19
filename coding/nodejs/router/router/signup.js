const express=require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const user=require('../db/admin');
const sec=require('../middleware/auth');
const auth=require('../middleware/auth')
const router=express.Router();
router.post("/admin",async(req,res)=> {
    const {username,password,number}=req.body;
    const admin=await user.findOne({username});
    if(admin){
        res.json({message:"user already exists"});
        console.log("user already exists");}
        else{
            const obj={username:username,password:password};
            const c= new user(obj);
            c.save();
            const token=jwt.sign({username,role:admin},sec,{expiresIn:'1h'});
            res.json({message:"user  successfully",token});
        }

})