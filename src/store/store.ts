import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {

    },
})
 
//

export type RootState = ReturnType<typeof store.getState>; // recuperer les informations
export type AppDispatch = typeof store.dispatch; // modifier les informations , et realimenter

export default store;