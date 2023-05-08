const express = require('express');
const cors = require('cors');
const app=express();
const {deleteTodos,addTodos,getTodos} = require('./Controller/todoController');
const {todoModel} = require('./Model/todoModel');
app.use(cors());
app.use(express.json());

app.get('/',getTodos);
app.post('/',addTodos);
app.post('/delete',deleteTodos)

app.listen(5000,()=>{
    console.log("Server started at port:5000");
});