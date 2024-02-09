import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid';

const initialState = [
    
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            state.push({id: uniqid(), ...payload, isCompleted: false})
        }

    }

});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;