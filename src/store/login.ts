import { createSlice } from "@reduxjs/toolkit";
import { AccessToken, DispatchLogin, FetchLoginAction } from "../shared/types";

const loginSlice = createSlice({
    name: "login",
    initialState: [] as Array<{access_token: string; user_id: string}>,
    reducers: {
        //  Action functions
        postLogin: (state:Array<AccessToken>, action:DispatchLogin) => {
            console.log(`Requesting login...`)
        },
        logout: (state:Array<AccessToken>, action:FetchLoginAction) => {
            state.pop();
        },
        successActions: (state:Array<AccessToken>, action:FetchLoginAction) => {
            state.push(...[action.payload]);
        },
        errorActions: (state:Array<AccessToken>, action:DispatchLogin) => {
            return console.log("Error on success", action.payload);
        }
    }
});

export const {postLogin, logout, successActions, errorActions} = loginSlice.actions;
export default loginSlice.reducer;
