var fs = require('fs');

//fs.unlink('writeMe.txt');
//fs.mkdir('stuff',function(){
//    fs.readFile('./readMe.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/writeMe.txt', data);
//    });
//});


// folder cant be deleted unless it is empty so.. delete the file inside then delete the folder
fs.unlink('./stuff/writeMe.txt', function(){
   fs.rmdir('stuff') 
});