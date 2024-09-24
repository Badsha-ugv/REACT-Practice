import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../slice/CounterSlice";

export default configureStore({
    reducer:{
        counter:CounterSlice,
    }
})