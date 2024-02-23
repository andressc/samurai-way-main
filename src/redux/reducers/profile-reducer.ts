import {AppThunk} from "../redux-store"
import {profileApi, ProfileResponseTypeContacts, UpdateProfilePayloadType} from "../../api/profile-api"
import {stopSubmit} from "redux-form";

export type ProfileActionsType =
    SetProfileType | SetProfileStatusType | UpdateProfilePhotoType

export type ProfileType = {
    userId: number | null
    fullName: string | null
    userImg: string | null
    aboutMe: string | null
    status: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ProfileResponseTypeContacts
}

const initialState: ProfileType = {
    userId: null,
    fullName: null,
    userImg: null,
    aboutMe: null,
    status: "",
    lookingForAJob: false,
    lookingForAJobDescription: "",
    contacts: {
        facebook: "",
        website: "",
        vk: "",
        twitter: "",
        instagram: "",
        youtube: "",
        github: "",
        mainLink: "",
    }
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
        status: state.profile.status,
        lookingForAJob: response.lookingForAJob,
        lookingForAJobDescription: response.lookingForAJobDescription,
        contacts: response.contacts
    }
    dispatch(setProfile(profile))

}

export const savePhoto = (image: File): AppThunk => async (dispatch) => {
    const response = await profileApi.updatePhotoUser(image)

    if (response.resultCode === 0) {
        dispatch(updateProfilePhoto(response.data.photos.large))
        return
    }
}

export const updateProfile = (payload: UpdateProfilePayloadType): AppThunk => async (dispatch, getState) => {
    try {

        const response = await profileApi.updateProfileUser(payload)
        const userId = getState().auth.id

        if (response.resultCode === 0) {
            //dispatch(setProfile({...state.profile, ...payload}))

            if (userId) {
                dispatch(getProfile(userId))
            }

            return true
        }

        //const field = response.messages[0].toLowerCase().split("->")
        //const u = field[1] as typeof field[1]

        dispatch(stopSubmit('edit-profile', {_error: response.messages[0]}))
        //dispatch(stopSubmit('edit-profile', {"contacts": {[u]: response.messages[0]}}))

        return false
    } catch (e) {
        return false
    }
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