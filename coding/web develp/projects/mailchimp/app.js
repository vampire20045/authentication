import express from "express";
import bodyParser from "body-parser";
import request from "request";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

let g = false;

app.use((req, res, next) => {
    const x = req.body["email"];
    const y = req.body["pass"];
    if (x === "aryangupta@gmail.com") {
        g = true;
    }
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/sign.html");
});

app.post("/submit", (req, res) => {
    const x = req.body["email"];
    const y = req.body["pass"];
    var data = {
        members: {
            email_address: x,
            status: "subscribe"
        }
    };
    var jsonData = JSON.stringify(data); // Corrected

    var option = { // Corrected variable name to option
        url: "https://us21.api.mailchimp.com/3.0/lists/cba957e04b",
        method: "POST",
        headers: {
            "Authorization": "aryan ec741e503f36a625a5d0b71e2bdb1539-us21" // Corrected API key format
        },
        body: jsonData
    };

    request(option, (error, response, body) => { // Corrected variable name to option
        if (error) {
            console.log(error);
            res.sendFile( __dirname + "/failure.html");
        } else {
            console.log(response.statusCode);
            if(response.statusCode==200){
              res.sendFile(__dirname + "/succes.html");
            }
            else{
              res.sendFile(__dirname + "/failure.html");
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//d41f0c32bf8e1092c460730a3e89e832
