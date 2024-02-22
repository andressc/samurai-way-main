import {AppThunk} from "../redux-store"
import {profileApi} from "../../api/profile-api"

export type ProfileActionsType =
    SetProfileType | SetProfileStatusType | UpdateProfilePhotoType

export type ProfileType = {
    userId: number | null
    fullName: string | null
    userImg: string | null
    aboutMe: string | null
    status: string
}

const initialState: ProfileType = {
    userId: null,
    fullName: null,
    userImg: null,
    aboutMe: null,
    status: ""
}
export const profileReducer = (state: ProfileType = initialState, action: ProfileActionsType): ProfileType => {
    switch (action.type) {
        case "profile/SET_PROFILE":
            return {...state, ...action.payload}
        case "profile/SET_PROFILE_STATUS":
            return {...state, status: action.payload.status}
        case "profile/UPDATE_PROFILE_PHOTO":
            return {...state, userImg: action.payload.image}
        default:
            return state
    }
}
type SetProfileType = ReturnType<typeof setProfile>

export const setProfile = (profile: ProfileType) => ({type: "profile/SET_PROFILE", payload: profile} as const)

type SetProfileStatusType = ReturnType<typeof setProfileStatus>
export const setProfileStatus = (status: string) => ({type: "profile/SET_PROFILE_STATUS", payload: {status}} as const)

type UpdateProfilePhotoType = ReturnType<typeof updateProfilePhoto>
export const updateProfilePhoto = (image: string) => ({type: "profile/UPDATE_PROFILE_PHOTO", payload: {image}} as const)

export const getProfile = (userId: number): AppThunk => async (dispatch, getState) => {

    const response = await profileApi.getProfile(userId)

    const state = getState()

    const profile: ProfileType = {
        userId: response.userId,
        fullName: response.fullName,
        userImg: response.photos.large,
        aboutMe: response.aboutMe,
        status: state.profile.status
    }
    dispatch(setProfile(profile))

}

export const savePhoto = (image: File): AppThunk => async (dispatch) => {
    const response = await profileApi.updatePhotoUser(image)
    dispatch(updateProfilePhoto(response.data.photos.large))
}

export const getStatus = (userId: number): AppThunk => async (dispatch) => {
    const response = await profileApi.getStatusUser(userId)
    dispatch(setProfileStatus(response))
}

export const setStatus = (status: string): AppThunk => async (dispatch) => {
    const response = await profileApi.updateStatusUser(status)

    if (response.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}

export default profileReducer