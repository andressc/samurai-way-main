import {combineReducers, createStore} from "redux"
import dialogsReducer from "./dialogs-reducer"
import postsReducer from "./posts-reducer"
import userReducer from "./user-reducer"
import sidebarReducer from "./sidebar-reducer"

const reducers = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    user: userReducer,
    sidebar: sidebarReducer
})

export type AppStore = typeof store

export const store = createStore(reducers)