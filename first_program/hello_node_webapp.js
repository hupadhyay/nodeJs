const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
    
    const about = fs.readFileSync("static/about.html");
    const contact = fs.readFileSync("static/contact.html");
    const home = fs.readFileSync("static/index.html");

    if(req.url == "/about"){
        res.end(about);
    } else if(req.url == "/contact"){
        res.end(contact);
    } else if (req.url == "/"){
        res.end(home);
    } else {
        res.writeHead(404, "Page not found!");
        res.end("url is not mapped.");
    }
});

server.listen(3000);

