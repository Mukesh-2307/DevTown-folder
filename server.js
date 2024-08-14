const http = require("http");

const port = 8081;

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write("<h2>Hey your server is running :)</h2>");
    res.end();
})
.listen(port, ()=>{
    console.log(`NodeJs Server is listening at Port : ${port}`);
});