import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import uiReducer from "./uiReducer";

const store = configureStore({
    reducer:{
        ui: uiReducer,
        cart: cartReducer
    }
})

export default store;