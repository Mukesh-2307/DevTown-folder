const { error } = require("console");
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
            res.writeHead(200,{"Content-Type": "text/html"});
            res.write(todos_List.toString());
        }
        else if(method === "POST"){
            // res.writeHead(200,{"content-type": "text/html"});
            // res.write("<h1>you are inside post request</h1>");

            let body = "";
            req.on("error",(err)=>{
                console.log(err);
            }).on("data",(chunk)=>{
                body += chunk;
                // console.log(chunk);
            }).on("end",()=>{
                body = JSON.parse(body);
                let newTodos = todos_List;
                newTodos.push(body.item);
                console.log(newTodos);
                // console.log("data: ",body);
            })
        }
        else if(method === "DELETE"){
            let body = "";
            req.on('error',(err)=>{
                console.log(err);
            }).on("data",(chunk)=>{
                body += chunk;
                // console.log(chunk);
            }).on("end",()=>{
                body = JSON.parse(body);
                let newTodos = todos_List;
                let deletedItem;
                // deletedItem = newTodos.pop[1];
                // deletedItem.pop(body.item);
                deletedItem = body.item;
                for(let i = 0; i < newTodos.length;i++){
                    // we can also use ".find" method to find the element to be deleted 
                    if(newTodos[i] === deletedItem){
                        newTodos.splice(i,1);
                        console.error(`the output of the delete ops ${newTodos}`);
                        break;
                    }
                    else{
                        continue;
                    }
                }
                console.log(deletedItem);
            })
        }
        else {
            res.writeHead(501);
        }
    }
    else{
        res.writeHead(404);
    }
    res.end();
})
.listen(port, ()=>{
    console.log(`NodeJs Server is listening at Port : ${port}`);
});