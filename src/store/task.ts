import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        //  Action functions
        addTask: (state:any, action:any) => {
            state.push({
                id: ++id,
                task: action.payload.task,
                completed: false,
            });
        },
        removeTask: (state, action) => {
            const index = state.findIndex((task:any) => task.id === action.payload.id);
            state.splice(index, 1)
        },
        completedTask: (state:any, action:any) => {
            const index = state.findIndex((task:any) => task.id === action.payload.id);
            state[index].completed = true;
        },
        successActions: (state:any, action:any) => {
            console.log("Action on success",action.payload);
            action.payload.forEach((product:any) => {
                state.push({
                    id: product.id,
                    task: product.name,
                    completed: false,
                });
            });
        },
        errorActions: (state, action) => {
            console.log("Error on success",action.payload);
        }
    }
});

export const {addTask, removeTask, completedTask} = taskSlice.actions;
export default taskSlice.reducer;
