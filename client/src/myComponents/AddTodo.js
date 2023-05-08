import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
        const [tittle,settittle] = useState('');
        const [desc,setdesc] = useState('');
        const submit = (e)=>{
            e.preventDefault();
            if(!tittle||!desc){
                alert("Tittle or Description cannot be blank");
            }
            else{
                addTodo(tittle,desc);
                settittle('');
                setdesc('');
            }
            
        }
    return (
            <form className='container my-3 fs-7' onSubmit={submit}>
                <h4>ADD TODO</h4>
                <div className="mb-3">
                    <label htmlFor="tittle" className="form-label">Tittle</label>
                    <input type="text" value={tittle} onChange={(e)=>settittle(e.target.value)} className="form-control" id="tittle" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Describe Your Todo</label>
                    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
    )
}

export default AddTodo
