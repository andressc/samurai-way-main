import {combineReducers, createStore} from "redux"
import dialogsReducer from "./reducers/dialogs-reducer"
import postsReducer from "./reducers/posts-reducer"
import userReducer from "./reducers/user-reducer"
import sidebarReducer from "./reducers/sidebar-reducer"

const rootReducer = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    user: userReducer,
    sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)