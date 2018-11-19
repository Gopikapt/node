const http=require('http');
const server=http.createServer(function (req,res){
    if (req.url=='/'){
        res.write("HELLOOOO");
        res.end();
    }
    if (req.url=='/users'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
})
server.listen(3000);
console.log("Listening on port 3000...");
