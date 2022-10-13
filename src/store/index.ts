import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { usersApi } from '../Services/UserServices';
import appStorage from './slice/appStorage';
import fetchUsers from './slice/fetchUsers';



export const store = configureStore({
    reducer: {
        fetchUsers,
        appStorage,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
            .concat(usersApi.middleware)
        // .concat(ordersApi.middleware)
    }
})

setupListeners(store.dispatch);
export default store
// Вывод типов `RootState` и `AppDispatch` из стора.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
