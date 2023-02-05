const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.send
    res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.get("/exhibitions", (req, res) => {
    res.sendFile(__dirname + "/exhibitions.html");
});

app.get("/security", (req, res) => {
    res.sendFile(__dirname + "/security.html");
});

app.use((req, res) => {
    res.sendFile(__dirname + "/error.html");
});

app.listen(3000, (err) => {
    if (err) return console.log(err);
    console.log("The server is listening on port 3000");
});