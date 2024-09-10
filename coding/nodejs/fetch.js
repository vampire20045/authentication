function callb(result){
    console.log(result);
};
var se={
    method:"GET"
};
fetch("http://localhost:5000",se).then(callb);