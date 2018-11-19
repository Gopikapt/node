const http=require('http');
const server=http.createServer(function (req,res){
    res.write();
    res.end();
});
server.listen(3000);
console.log("Listening on port 3000...");