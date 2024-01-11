import {AppThunk} from "../redux-store"
import {profileApi} from "../../api/profile-api"

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

export type AuthUserActionsType = AuthType

const authReducer = (state: AuthUserType = initialState, action: AuthUserActionsType): AuthUserType => {

    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state,
                ...action.payload.authUser,
            }
        default:
            return state
    }
}

type AuthType = ReturnType<typeof setAuth>

export const setAuth = (authUser: AuthUserType) => ({type: "SET_AUTH", payload: {authUser}} as const)

export const getAuthUser = (): AppThunk => (dispatch) => {

    profileApi.getAuthUser()
        .then(response => {
            if (response.resultCode === 0) dispatch(setAuth(response.data))
        })
}

export default authReducer