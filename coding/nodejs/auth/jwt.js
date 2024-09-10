import jwt from 'jsonwebtoken'
const sec='aaaa';
const aryan='aryan';
let ans = jwt.sign(aryan,sec);
console.log(ans);
jwt.verify(ans,aryan,(error,wer)=>{
    if(error){
        console.log("error");
    }
    else{
        console.log(wer);
    }

})
