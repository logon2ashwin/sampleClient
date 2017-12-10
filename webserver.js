var express = require('express');
var app = express();

// static webserver
app.use(express.static(__dirname));
app.all("/*", function(req, res, next) {
    res.sendfile("index.html", { root: __dirname });
});

app.listen(80);


