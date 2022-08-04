const fs = require('fs')
console.log("Start");
fs.readFile('test.txt','utf-8',function (err,data){
   if(err){
       console.log(err.message)
   }
   else {
       console.log(data)
   }
});
console.log("End")