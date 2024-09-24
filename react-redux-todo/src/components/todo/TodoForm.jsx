import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slice/todoSlice';

function TodoForm() {

    const dispatch = useDispatch();
    const [todo, setTodo] = useState('')

    const formControl = (e)=>{
        e.preventDefault();
        dispatch(addTodo(todo))
        setTodo('')

    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-8 mx-auto">
                <h3 className='text-center py-3'>Create New Todo Item</h3>

                <form 
                className=' d-flex gap-3' 
                onSubmit={formControl}>
                    <input type="text"  className="form-control" 
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    />
                    <button type='submit' className='btn btn-info'>Add Todo</button>
                </form>

            </div>
        </div>
      </div>
    </div>
  )
}

export default TodoForm
