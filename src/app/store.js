import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import filtersSlice from "./features/filters/filtersSlice";

const store = configureStore({
    reducer: {
        tasks: tasksSlice,
        filters: filtersSlice,
    }
});

export default store;