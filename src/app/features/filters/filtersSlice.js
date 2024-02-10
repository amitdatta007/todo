import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
    search: '',
}
const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter: (state, { payload }) => {
            state.filter = payload
        },
        setSearch: (state, { payload }) => {
            state.search = payload
        }
    }

})

export const { setFilter, setSearch } = filtersSlice.actions;

export default filtersSlice.reducer;