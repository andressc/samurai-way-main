import {applyMiddleware, combineReducers, createStore} from "redux"
import dialogsReducer, {ADD_MESSAGE, DialogActionsType} from "./reducers/dialogs-reducer"
import postsReducer, {ADD_POST, PostActionsType} from "./reducers/posts-reducer"
import profileReducer, {ProfileActionsType} from "./reducers/profile-reducer"
import sidebarReducer from "./reducers/sidebar-reducer"
import usersReducer, {UserActionsType} from "./reducers/users-reducer"
import {composeWithDevTools} from "@redux-devtools/extension"
import authReducer, {AuthUserActionsType} from "./reducers/auth-reducer"
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    postsPage: postsReducer,
    dialogsPage: dialogsReducer,
    profile: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer.plugin({
        post: (state, action) => {
            switch (action.type) {
                case ADD_POST:
                    return undefined;
                default:
                    return state;
            }
        },
        message: (state, action) => {
            switch (action.type) {
                case ADD_MESSAGE:
                    return undefined;
                default:
                    return state;
            }
        }
    })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionsType =
    AuthUserActionsType
    | DialogActionsType
    | PostActionsType
    | ProfileActionsType
    | UserActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))