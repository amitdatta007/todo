import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const initialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            state.tasks.push({ id: uuid(), ...payload, isCompleted: false })
        },
        deleteTask: (state, { payload }) => {
            state.tasks = state.tasks.filter((task) => task.id !== payload)
        }

    }

});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;