const file=require('fs')
file.writeFile('work.txt','node_js beginning ',function(err){
    if(err){
    console.log(err);
    }
    console.log('loaded')
});