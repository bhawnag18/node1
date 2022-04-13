const http = require("http");
// creating the server
http.createServer(function(request, response){
    
    let obj = {
        name:"bhawna",
        age: 22}
    response.write("helllo world");
    response.write(JSON.stringify(obj));
    // closing the server
    response.end();
}).listen(3000);
