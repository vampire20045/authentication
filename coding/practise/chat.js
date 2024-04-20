import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.json());

var arr = [];

function find(arr, value) {
    for (const i in arr) {
        if (arr[i].id === value) {
            return parseInt(i); // Return index as a number
        }
    }
    return -1; // Return -1 if value is not found
}
app.get("/", (req, res) => {
    console.log("GET request");
    var index = find(arr, 4);
    if (index !== -1) {
        res.send(arr[index]);
    } else {
        res.status(404).send("Item not found");
    }
});

app.post("/submit", (req, res) => {
    var id = req.body.id;
    var newItem = {
        "id": id
    };
    arr.push(newItem);
    res.status(201).send("Item added successfully");
});

app.listen(port, () => {
    console.log("Server is ready");
});
