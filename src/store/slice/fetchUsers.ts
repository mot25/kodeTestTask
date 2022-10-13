import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';
import { UsersItemsType } from '../../Services/UserServices';





type InitialStateType = {
    items: UsersItemsType[]
}
const initialState: InitialStateType = {
    items: []
}

export const fetchUsers = createSlice({
    name: 'fetchUsers',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        }
    },

})


export const {
    setItems
} = fetchUsers.actions

export const getUsers = (state: RootState) => state.fetchUsers.items
export default fetchUsers.reducer