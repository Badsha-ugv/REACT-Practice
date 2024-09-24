import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../redux/slice/todoSlice';

function TodoForm({newTodo, setNewTodo}) {

    const dispatch = useDispatch();
    const [todo, setTodo] = useState('')

    const formControl = (e)=>{
        e.preventDefault();

        if(newTodo){
          dispatch(updateTodo({todoId:newTodo.id, todoTitle:todo}))
          setTodo('')
        }
        else{
          
          dispatch(addTodo(todo))
          setTodo('')
        }

    }

    useEffect(()=>{
      if(newTodo){
        setTodo(newTodo.title)
      }
      else{
        setTodo('')
      }
    },[newTodo])


  return (
    <div>
      <div className="container">
       
                <h3 className='text-center py-3'>Create New Todo Item</h3>
              <div className='w-50 border p-3 mx-auto '>
              <form 
                className='' 
                onSubmit={formControl}>
                  <div className="d-flex justify-content-center gap-2 ">

                    <input type="text" placeholder='write title..' className="form-control w-75 d-inline" 
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                    />
                    <button type='submit' className='btn btn-info'>{newTodo? 'Update':'Add'} Todo</button>
                    
                    </div>
                </form>

              </div>
                

            </div>
       
    </div>
  )
}

export default TodoForm
