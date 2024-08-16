const express = require("express");

// initialization 
const app = express();
app.use(express.json());

const port = 8081;

const todos_List = ["learn", "code", "develop"];

// our route : http://localhost:8081/

// for get method
app.get("/todos", (req, res) => {
    res.status(200).send(todos_List);
});

// for post method
app.post("/todos", (req, res) => {
    let newTodos = req.body.name;
    todos_List.push(newTodos);
    res.status(200).send({ message: "item added successfully" });
});

// for delete method
app.delete("/todos", (req, res) => {
    let deleteItem = req.body.name;
    todos_List.find((ele, index) => {
        if (ele === deleteItem) {
            todos_List.splice(index, 1);
            res.status(200).send({ message: "item deleted successfully" });
        }
    });
});

app.listen(port, () => {
    console.log(`NodeJs Server is listening on port ${port}`);
});
