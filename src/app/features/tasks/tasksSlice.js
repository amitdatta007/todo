import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, isCompleted: false, ...payload });
            } else {
                const lastElement = state.tasks.at(-1);
                state.tasks.push({ id: lastElement.id + 1, status: 'pending', ...payload })
            }
        },
        deleteTask: (state, { payload }) => {
            state.tasks = state.tasks.filter((task) => task.id !== payload)
        },
        changeStatus: (state, { payload }) => {
            const target = state.tasks.find((task) => task.id === payload);
            target.isCompleted = true;
        },
        editTask: (state, { payload }) => {
            const filteredTask = state.tasks.filter((task) => task.id !== payload.id);
            filteredTask.push(payload);
            state.tasks = filteredTask;
        }

    }

});

export const { addTask, deleteTask, changeStatus, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;