import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        id: 1,
        title: "hhhhhhhhhhhhhhh",
        description: 'pppppppppppppppp',
        isCompleted: false,
        piority: 'medium'

    },
    {
        id: 2,
        title: "hhhhhhhhhhhhhhh",
        description: 'pppppppppppppppp',
        isCompleted: false,
        piority: 'medium'
    },
    {
        id: 3,
        title: "hhhhhhhhhhhhhhh",
        description: 'pppppppppppppppp',
        isCompleted: false,
        piority: 'medium'
    },
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

    }

});

export default tasksSlice.reducer;