var http = require('http');
var port=process.env.PORT || 8657

var server=http.createServer((req,res)=> {
    res.write("Hii from NodeJs Server");
    res.end();
})

server.listen(port)
