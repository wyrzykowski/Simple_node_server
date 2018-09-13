// htaccess module to access file by link friendly name 
var fs = require('fs');
exports.getLink = function (pathF) {
    var stringPath;
  
    fs.access('.htaccess', fs.constants.F_OK, (err) => {
        if(!err){ 

            fs.readFile('.htaccess', function(err, data) {
            var strData=data.toString('utf8');
            if(strData.lastIndexOf("RewriteEngine on")!=-1)
            {
                //console.log(' Rewrite EngineOn');
                var pos;
                if((pos=strData.lastIndexOf("RewriteRule "+pathF))!=-1)
                {
                  
                    var startPos = pos+("RewriteRule "+pathF).length+1;
                    console.log("startPos" + startPos);
                    pos=strData.indexOf('\n',startPos);
                    console.log("pos" + pos);
                    stringPath = strData.substring(startPos, pos);
                    console.log("wlasciwa:" + stringPath);
                    return "offer.html";
                }
            }
            else console.log('Rewrite Engine OFF');
           
            
              });
      
        }
        else{ // if error 
         console.log(".access not found")
         return pathF;
        }
       
    
        });


    console.log("htaccess mdoule working...");
   // return "offer.html";
};