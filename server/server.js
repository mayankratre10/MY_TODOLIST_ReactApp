const express = require('express');
const cors = require('cors');
const app=express();
const {deleteTodos,addTodos,getTodos} = require('./Controller/todoController');
const {todoModel} = require('./Model/todoModel');
app.use(cors());
app.use(express.json());

app.get('/get',getTodos);
app.post('/add',addTodos);
app.post('/delete',deleteTodos)

const PORT =process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log("Server started at port:5000");
});