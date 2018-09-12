// htaccess module to access file by link friendly name 
exports.getLink = function (pathF) {
    fs.access('.htaccess', fs.constants.F_OK, (err) => {
        if(!err){ 
        console.log("working access!");
        }
        else{ // if .htaccess not found
            return pathF;
        }

    console.log("htaccess mdoule working...");
    return path;
 
};