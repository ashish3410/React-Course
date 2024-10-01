import { createSlice,nanoid } from "@reduxjs/toolkit";

export const initialState={
    todos:[
        {
            id:nanoid(),
            text:"ashish",
            completed:false
        },
    ]
}

export const TodoSlicer=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed:false
            }
            if (todo.text){
                state.todos.push(todo)
            }
           
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>todo.id==action.payload.id?text=action.payload:todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id != action.payload)
        },
        toggleTodo:(state,action)=>{
            state.todos.map((todo)=>todo.id==action.payload?!todo.completed:todo)
        }
    }

})

export const {addTodo,removeTodo,updateTodo,toggleTodo}=TodoSlicer.actions
export default TodoSlicer.reducer