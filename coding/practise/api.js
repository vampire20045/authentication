const url="https://cat-fact.herokuapp.com/facts";
async function aryan(){
    console.log("hello aryan");
    let result= await fetch(url);
    console.log(result); 
    let data= result.json();
    console.log(data[0].text);
}