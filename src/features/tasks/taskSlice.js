import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    filter: 'all'
}

const taskSlice =  createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAdded: {
            reducer(state, action) {
                state.tasks.push(action.payload);
            },
            prepare(text, category) {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        category,
                        completed: false
                    }
                };
            },
        },
        taskToggled(state, action) {
            const task = state.tasks.find(task => task.id === action.payload);
            if(task) {
                task.completed = !task.completed;
            }
        },
        taskDeleted(state, action) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        setFilter(state, action) {
            state.filter = action.payload;
        }
    }
});

export const {taskAdded, taskDeleted, setFilter, taskToggled} = taskSlice.actions;
export default taskSlice.reducer;