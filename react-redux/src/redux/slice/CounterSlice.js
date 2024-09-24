import { createSlice } from "@reduxjs/toolkit";

export const CountSlice = createSlice({
    name:'Count',
    initialState:{
        value:0,
    },
    reducers:{
        plus:(state)=>{
            state.value = state.value + 1
        },
        minus:(state)=>{
            state.value = state.value -1
        }
    }
})

export const {plus,minus} = CountSlice.actions;
export default  CountSlice.reducer;