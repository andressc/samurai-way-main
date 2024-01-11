import {AppThunk} from "../redux-store"
import {profileApi} from "../../api/profile-api"

export type ProfileActionsType =
    SetProfileType

export type ProfileType = {
    userId: number | null
    fullName: string | null
    userImg: string | null
    aboutMe: string | null
}

const initialState: ProfileType = {
    userId: null,
    fullName: null,
    userImg: null,
    aboutMe: null
}
const profileReducer = (state: ProfileType = initialState, action: ProfileActionsType): ProfileType => {
    switch (action.type) {
        case "SET_PROFILE":
            return {...state, ...action.payload}
        default:
            return state
    }
}

type SetProfileType = ReturnType<typeof setProfile>

export const setProfile = (profile: ProfileType) => ({type: "SET_PROFILE", payload: profile} as const)

export const getProfile = (userId: number): AppThunk => (dispatch) => {

    profileApi.getProfile(userId)
        .then(response => {
            const profile: ProfileType = {
                userId: response.userId,
                fullName: response.fullName,
                userImg: response.photos.small,
                aboutMe: response.aboutMe
            }
            dispatch(setProfile(profile))
        })
}

export default profileReducer