const mongoose = require('mongoose');

const url = 'mongodb+srv://mayankratre10:fwe2AUChLH9kwur8@cluster0.vz7rpzg.mongodb.net/todolist?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(()=>{
        console.log("Data Base Connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

const todoSchema = mongoose.Schema({
        S_no:{
            type:Number,
            required:true,
        },
        tittle:{
            type:String,
            required:true,
        },
        desc:{
            type:String,
            required:true,
        },
});

const todoModel=  mongoose.model("todoModel", todoSchema);
module.exports = {todoModel};