import {combineReducers, createStore} from "redux"
import dialogsReducer from "./reducers/dialogs-reducer"
import postsReducer from "./reducers/posts-reducer"
import profileReducer from "./reducers/profile-reducer"
import sidebarReducer from "./reducers/sidebar-reducer"
import usersReducer from "./reducers/users-reducer"
import {composeWithDevTools} from "@redux-devtools/extension"

const rootReducer = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools())