const fs=require('fs');
//asynchronous
fs.readdir('./',function(err,files){
    if(err)
    console.log('error',err);
    else
    console.log('result',files);
});