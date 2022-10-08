import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '..';
import { BaseApi, Endpoints } from '../../Constant/constant';
import { UserServices, UsersItemsType } from '../../Services/UserServices';
import { Api } from '../../Utilts/Api';

type UsersResponseType = {
    items: UsersItemsType[];
}



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
        setItems: (state, action: PayloadAction<UsersItemsType[]>) => {
            state.items = action.payload
        }
    },

})


// export const {
//     setItems
// } = fetchUsers.actions

export const getUsers = (state: RootState) => state.fetchUsers
export default fetchUsers.reducer