import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "./characters/characterSlice"; // reducer pour les personnages
const store = configureStore({
    reducer: {
        Characters: characterReducer, // reducer pour les personnages
    },
})
 
export type RootState = ReturnType<typeof store.getState>; // recuperer les informations
export type AppDispatch = typeof store.dispatch; // modifier les informations , et realimenter

export default store;