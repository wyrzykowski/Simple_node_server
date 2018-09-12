// htaccess module to access file by link friendly name 
var fs = require('fs');
exports.getLink = function (pathF) {

    fs.access('.htaccess', fs.constants.F_OK, (err) => {
        if(!err){ 
         console.log("no czytam");
        }
        else{ // if error 
         console.log(".access not found")
         return path;
        }
       
    
        });


    console.log("htaccess mdoule working...");
    return path;
 
};