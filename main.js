var http = require('http');
var fs = require('fs');
var path = 'index.html';
http.createServer(function (req, res) {

if(req.url!='/' &&  req.url!='') { // test tutaj
path = req.url;console.log(typeof path);path=path.substr(1, path.length);}

fs.access(path, fs.constants.F_OK, (err) => {
 if(!err){ 

 fs.readFile(path, function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);


    res.end()
 
    });
}
else{
    path='404.html';
    fs.readFile(path, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
    
    
        res.end()
    });
}
path='index.html';//to refresh path othervise will be still other than home page

});
}).listen(80);

