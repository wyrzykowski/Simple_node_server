// HTTP node's Server
var http = require('http');
var htaccessMod = require('./htaccess.js');
var fs = require('fs');
var path = 'index.html';
http.createServer(function (req, res) {


if(req.url!='/' &&  req.url!='') { // jesli nie sama domena to nadal index.html
    path = req.url;
    path=path.substr(1, path.length);// substr to cut "/" from path string
    var promise = new Promise(function(resolve,reject){ // promise, i have to get link until open html file
        path=htaccessMod.getLink(path);
       // console.log("zwrocilem:"+path);
        if(path!=undefined)
        {
       // console.log("zwrocilem:"+path);
        resolve(htaccessMod.getLink(path));

        }
       
    });
} else{
    var promise = new Promise(function(resolve,reject){
        path='index.html';//if it is start page (just domain in req url) 
        resolve(path);
        });
}

promise.then(function(path){
console.log("in main path is: "+path);

fs.access(path, fs.constants.F_OK, (err) => {
    if(!err){ 
       
     fs.readFile(path, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
    }
    else{ // if error 
        console.log("error:"+err)
        path='404.html';
        fs.readFile(path, function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end()
        });
    }
    

    });
});
}).listen(80); // listening on 80 port

