import { configureStore } from "@reduxjs/toolkit";
import { chatReducers } from "./Slice/Chatslice.js";

export const store = configureStore({
    reducer:{
        chat: chatReducers
    }
})