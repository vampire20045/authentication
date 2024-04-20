import express from 'express';
const app = express();
const a = 34;
const b = 23;
function fr(req,res){
    res.send("hello world");
}
function add(a, b) {
    return a + b;
}
function login(req,res){
    res.send("login page");
}
function sign(req,res){
    res.send("sign up succesfull");
}
function product(counter){
    var x= counter*counter;
    return x;
}
function pp(req,res){
    var counter = req.query.counter;
   var p=product(counter);
   res.send(p);
}

app.get("/a",fr);

app.get("/", (req, res) => {
    // Call the add function and send the result
    const result = add(a, b);
    res.send(`The result of ${a} + ${b} is ${result}`);
});
app.get("/login",login);
app.get("/signup",sign);
app.post("/sum",pp);

app.listen(port, () => {
    console.log("Server is ready");
});
