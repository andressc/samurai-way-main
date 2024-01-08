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

export default profileReducer