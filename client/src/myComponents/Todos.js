import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {
  let mystyle = {
    minHeight:"70vh"
  }
  return (
    <div className="container my-3 fs-7" style={mystyle}>
      <h3 >TODO's</h3>
      {
        props.todos.length===0?"You Are Done Today,Congrats":
        props.todos.map((todo)=>{
          return <TodoItem key={todo.S_no} todo={todo} onDelete={props.onDelete} />;
        })
      }
      
    </div>
  )
}

export default Todos
