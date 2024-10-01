import { configureStore } from "@reduxjs/toolkit";
import Reducer from '../features/todo/TodoSlicer';
export const store=configureStore({
    reducer:Reducer
})