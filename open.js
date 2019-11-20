var fs = require("fs");

fs.open('file1', 'a+', (err, fd) => {
    if(err){
        console.log("error occured")
    }else
    console.log("file is opened");


fs.close(fd,(err)=>{
    console.log("file closed");
})

  });