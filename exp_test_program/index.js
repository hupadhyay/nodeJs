const http = require('http');
const fs = require('fs');
const path = require('path');

const express = require('express');

var app = express();

app.use(express.static("static_resource"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "static" + path.sep +"index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, "static" + path.sep +"about.html"))
});

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, "static" + path.sep +"contact.html"))
});

app.get("/error", (req, res) => {
    res.sendFile(path.resolve(__dirname, "static" + path.sep +"error.html"))
});

app.listen(process.env.PORT || 3000, () => {
    console.log("The app starts to listen on port 3000");
});