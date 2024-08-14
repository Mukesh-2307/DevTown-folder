# DevTown-folder
## Server Creation
> npm init > new entry point => server.js

### Then import HTTP through
```
const http = require("http");
```
### assign port number
```
const port = 8081;
```
> [!NOTE]
> You can use whatever port you like; just substitute the 8081 port number for the one you want to use. However, confirm that the preferred port number is open.
### Creating a basic server
```
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write("<h2>Hey your server is running :)</h2>");
    res.end();
})
.listen(port, ()=>{
    console.log(`NodeJs Server is listening at Port : ${port}`);
});
```