// htaccess module to access file by link friendly name 
exports.getLink = function (pathF) {
    fs.access('.htaccess', fs.constants.F_OK, (err) => {
        if(!err){ 
            var filesList=[]; // Array for files name
            var i =0; //iterator
            fs.readdirSync('.').forEach(file => { // add all files name to array filesList
              filesList[i]=file;
              i++;
            })
       
           filesList.forEach(returned=>{
               console.log(returned);
           })
        }
        else{ // if .htaccess not found
            return pathF;
        }

    console.log("htaccess mdoule working...");
    return path;
 
};