import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todos: [{id:1, title: "Hello world"}]
    },
    /* This code block defines the reducers for the `todoSlice`. */
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id : nanoid(),
                title : action.payload
            }
            state.todos.push(newTodo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id != action.payload)
        },
        updateTodo:(state,action)=>{
            const {todoId, todoTitle} = action.payload
            const todo = state.todos.find((todo) => todo.id === todoId)

            if (todo){
                todo.title = todoTitle
            }

        }
    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;
