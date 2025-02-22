import taskReducer from "./task";
import productsReducer from "./products";
import loginReducer from "./login";
import cartReducer from "./cart";

import {
    configureStore
} from "@reduxjs/toolkit";
import http_request from "./middleware/api-requests";
import on_error from "./middleware/error";

const store = configureStore({
    reducer: {
        task: taskReducer,
        products: productsReducer,
        login: loginReducer,
        cart: cartReducer,
    },
    middleware:  (gDM) => gDM().concat(http_request, on_error)
});

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export default store;