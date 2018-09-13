// htaccess module to access file by link friendly name 
var fs = require('fs');
exports.getLink = function (pathF) {
    var stringPath;
    var ret; 

    const promise = new Promise(function(resolve,reject){
        


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
                    console.log("htaccess mdoule working..."+stringPath);
                    ret= stringPath;
                }
                else{console.log("htaccess mdoule working..."+pathF);    ret = pathF;}
            } else console.log('Rewrite Engine OFF');
           
            console.log("wyszedlem dalej"+ret);
            if(ret!=undefined) resolve(ret);
              });
  
            
            })
            promise.then(function(reta){
                console.log("wyszedlem dalej3"+reta);
            
                return  reta;

            })
      
};