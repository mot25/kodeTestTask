import { RootState } from './../index';
import { createSlice } from '@reduxjs/toolkit';
import { Endpoints } from "../../Constant/constant";

type InitStateType = {
    sortMode: undefined,
    search: string,
    filterDepartament: Endpoints
}

const initialState = {
    sortMode: undefined,
    search: '',
    filterDepartament: Endpoints
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