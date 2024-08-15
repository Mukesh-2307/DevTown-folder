const http = require("http");

const port = 8081;

const todos_List = ["purchase", "code", "learn"];

http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type": "text/html"});
    // res.write("<h2>Hey your server is running :) Again hello</h2>");
    
    const {url, method} = req;
    console.log(method, url);

    if(url === "/todos"){
        if(method === "GET"){
            res.writeHead(200);
            res.write(todos_List.toString());
        }
    }
    res.end();
})
.listen(port, ()=>{
    console.log(`NodeJs Server is listening at Port : ${port}`);
}); 