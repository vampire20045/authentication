const jwt=require('jsonwebtoken');
const sec="Aryan";
const auth=(req,res,next)=>{
    const authen=require.headers.authorization;
    if(auth){
    const token=authen.split(" ")[1];
    jwt.sign(token,sec,(error,data)=>{
        if(error){
            return res.sendStatus(403);

        }
        req.user=data;
        next();
    })}
    else{
        res.sendStatus(401);
    }
    
};
module.export={
    auth,
    sec
}