import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 4000;
app.use(bodyParser.json());

function add(req, res) {
    var d = req.body.counter;
    if (d == 100) {
        var obj = {
            "name": "aryan",
            "age": "20",
        };
        res.send(obj);
    } else {
        res.status(400).send("you have entered a large number");
    }
}
app.get("/", add);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
