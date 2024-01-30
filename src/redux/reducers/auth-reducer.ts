import {AppThunk} from "../redux-store"
import {LoginPayloadType, profileApi} from "../../api/profile-api"
import {stopSubmit} from "redux-form";
import {setInitialized} from "./app-reducer";

export type AuthUserType = {
    id: number | null
    email: string | null
    login: string | null
    photo: string | null
}

let initialState: AuthUserType = {
    id: null,
    email: null,
    login: null,
    photo: null
}

export type AuthUserActionsType = AuthType | LogoutType

const authReducer = (state: AuthUserType = initialState, action: AuthUserActionsType): AuthUserType => {

    switch (action.type) {
        case "SET_AUTH":
            return {...state, ...action.payload.authUser}
        case "LOGOUT":
            return {
                id: null,
                email: null,
                login: null,
                photo: null
            }
        default:
            return state
    }
}

type AuthType = ReturnType<typeof setAuth>
const setAuth = (authUser: AuthUserType) => ({type: "SET_AUTH", payload: {authUser}} as const)

type LogoutType = ReturnType<typeof logout>
const logout = () => ({type: "LOGOUT"} as const)

export const getAuthUser = (): AppThunk => (dispatch) => {

    profileApi.getAuthUser()
        .then(response => {
            if (response.resultCode === 0) dispatch(setAuth(response.data))
        })
        .finally(() => {
                dispatch(setInitialized(true))
            }
        )
}

export const loginTC = (data: LoginPayloadType): AppThunk => (dispatch) => {

    profileApi.login(data)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUser())
                return
            }

            dispatch(stopSubmit('login', {_error: response.messages[0]}))
        })
}

export const logoutTC = (): AppThunk => (dispatch) => {

    profileApi.logout()
        .then(response => {
            if (response.resultCode === 0) dispatch(logout())
        })
}

export default authReducer