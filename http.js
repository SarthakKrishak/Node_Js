const http = require('http');

const Server = http.createServer(function (req, res) {
    res.end("Hello World");
    switch (req.url) {
        case "/":
            res.end("Home Page")
            break
        case "/about":
            res.end("About page")
            break
    }
})

Server.listen(5000);

