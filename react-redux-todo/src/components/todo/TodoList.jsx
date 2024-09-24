import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../../redux/slice/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import TodoForm from "./TodoForm";



function TodoList() {

  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos);
  console.log("this is todos ", todos);

  const [newTodo, setNewTodo] = useState(null)
  const updateForm = (todo)=>{
    setNewTodo(todo)
  }

  return (
    <>
    <TodoForm  newTodo={newTodo} setNewTodo={setNewTodo} />

      <div className="w-50 mt-2 p-1 mx-auto ">
        <h3 className="text-center">Todo List</h3>
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} 
            className="list-group-item d-flex justify-content-between bg-dark text-white">
              {todo.title}
              <div className=" d-flex gap-2">
                <button
                className="btn btn-warning"
                onClick={()=>updateForm(todo)}
                >Update</button>


                <button 
                className="btn btn-danger"
                onClick={()=>dispatch(removeTodo(todo.id))}
                >Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
