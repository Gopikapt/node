const hp=require('http');
const serv=hp.createServer(function (req,res){
    if(req.url=='/'){
        res.write("HELLOOOO");
        res.end();
    }
    if(req.url=='/users'){
        const fs=require('fs');
        fs.readFile('friends.txt','utf8',function(err,list){
            if(err){
            res.write(err);
            res.end();}
            if(list){
            res.write(list)
            res.end();}
});
    }
}); 
serv.listen(3000);
console.log("Listening on port 3000...");