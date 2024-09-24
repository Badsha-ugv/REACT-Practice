import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../../redux/slice/todoSlice";
import { useDispatch } from "react-redux";



function TodoList() {

  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos);
  console.log("this is todos ", todos);

  return (
    <>
      <div className="w-50 mt-2 p-1 mx-auto border">
        <h3 className="text-center">Todo List</h3>
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between">
              {todo.title}
              <div className="">
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
