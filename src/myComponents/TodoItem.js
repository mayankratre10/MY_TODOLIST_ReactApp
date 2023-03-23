import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div className='my-3'>
      <h4>{todo.tittle}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick ={()=>{return onDelete(todo)}}>Delete</button>
      <hr />
    </div>
  )
}

export default TodoItem
