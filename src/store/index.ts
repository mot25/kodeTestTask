import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import fetchUsers from './slice/fetchUsers';


// import 
const store = configureStore({
    reducer: {
        fetchUsers
    }
})

setupListeners(store.dispatch);
export default store
// Вывод типов `RootState` и `AppDispatch` из стора.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
