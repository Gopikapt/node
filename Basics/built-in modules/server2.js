const http=require('http');
const server=http.createServer(function (req,res){
    res.write("Hellooo");//write a response to the client
    res.end();//end response
});
server.listen(3000);
console.log("Listening on port 3000...");
