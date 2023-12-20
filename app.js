const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

// serve your css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    // res.send("Hello world!");
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    console.log(req.body)
    // res.send("Thank you for subscribing");
});