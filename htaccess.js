// htaccess module to access file by link friendly name 
var fs = require('fs');
exports.getLink = function (pathF) {
    var stringPath;
    var ret; 
     return  new Promise(function(resolve,reject){

            fs.readFile('.htaccess', function(err, data) {
                if(err){ console.log("Warning! .htaccess not found!"); resolve(pathF);}
                else
                {
                    var strData=data.toString('utf8');
                    if(strData.lastIndexOf("RewriteEngine on")!=-1)
                    {
                
                        //console.log(' Rewrite EngineOn');
                        var pos;
                        if((pos=strData.lastIndexOf("RewriteRule "+pathF))!=-1)
                        {
                        
                            var startPos = pos+("RewriteRule "+pathF).length+1;
                            pos=strData.indexOf('\n',startPos);
                            stringPath = strData.substring(startPos, pos-1);//WARNING!!!! CHANGED HERE To -1 becouse of windiws other endline coding
                        // console.log("htaccess mdoule working..."+stringPath);
                            ret= stringPath; // wartosc do zwrocenia
                        } else{console.log("htaccess mdoule working..."+pathF);    ret = pathF;}
                    } else console.log('Rewrite Engine OFF');
                
                    if(ret!=undefined){console.log(ret.length);resolve(ret)}; 
                }
              });
            
            })
            promise.then(function(reta){
                return reta;
            })
 
};