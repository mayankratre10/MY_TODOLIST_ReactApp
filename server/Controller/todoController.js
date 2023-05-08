const { todoModel } = require('../Model/todoModel');

const getTodos = async (req, res) => {
    try {
        let todos = await todoModel.find({});
        console.log(todos);
        res.setheader("Access-Control-Allow-Origin","true" );
        res.send(todos);
    }
    catch (err) {
        res.json({message:err.message});
    }
}

const addTodos = async (req, res) => {
    try {
        let mytodo = req.body.mytodo;
        await todoModel.create(mytodo);
        // res.setheader("Access-Control-Allow-Origin","true" );
        res.send("ADDED");
    }
    catch (err) {
        console.log(err.message);
    }
}

const deleteTodos = async (req, res) => {
    try {
        let sn = req.body.S_no;
        await todoModel.findOneAndDelete({S_no:sn}).catch((err)=>{console.log(err.message)});
        // res.setheader("Access-Control-Allow-Origin","true" );
    }
    catch (err) {
        console.log(err.message);
    }
}

module.exports={deleteTodos,addTodos,getTodos};