const http = require('http');

const server = http.createServer((req, res) => {
    
    if(req.url == "/about"){
        res.end("You are in about page");
    } else if(req.url == "/contact"){
        res.end("You are in contact page");
    } else if (req.url == "/"){
        res.end("Hello Node Application");
    } else {
        res.end("url is not mapped.");
    }
});

server.listen(3000);

