const mongoose=require('mongoose');
const User= new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    Phone:+{type:Number,required:true}
});
const user=mongoose.model("User",user);
 module.export={
    user
 }