import { createSlice } from '@reduxjs/toolkit';

import { Endpoints } from '../../Constant/constant';
import { RootState } from './..';

type InitStateType = {
    sortMode: undefined | 1 | 2,
    search: string,
    filterDepartament: Endpoints
}

const initialState: InitStateType = {
    sortMode: undefined,
    search: '',
    filterDepartament: Endpoints.ALL
}

export const appStorage = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setSortMode: (state, action) => {
            state.sortMode = action.payload
        },
        setFilterDepartament: (state, action) => {
            state.filterDepartament = action.payload
        },
    }
})


export const {
    setSearch,
    setSortMode,
    setFilterDepartament,
} = appStorage.actions

export const getSearch = (state: RootState) => state.appStorage.search
export const getSortMode = (state: RootState) => state.appStorage.sortMode
export const getFilterDepartament = (state: RootState) => state.appStorage.filterDepartament
export default appStorage.reducer