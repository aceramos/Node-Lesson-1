var fs = require('fs');


// 'Sync' means that it wont read code after it finnish what it needs to do.. "Block Code"
var readMe = fs.readFileSync('./readMe.txt', 'utf8');
fs.writeFileSync('./writeMe.txt', readMe);

//Non Blocking version
//fs.readFile('readMe.txt', 'utf8', function(err,data){
//    fs.writeFile('writeMe.txt',data);
//});