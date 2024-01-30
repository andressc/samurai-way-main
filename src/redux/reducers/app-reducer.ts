export type AppType = {
    isInitialized: boolean
}

let initialState: AppType = {
    isInitialized: false
}

export type AppReducerActionsType = AuthType

const appReducer = (state: AppType = initialState, action: AppReducerActionsType): AppType => {

    switch (action.type) {
        case "SET_INITIALIZE":
            return {...state, isInitialized: action.payload.isInitialized}
        default:
            return state
    }
}

type AuthType = ReturnType<typeof setInitialized>
export const setInitialized = (isInitialized: boolean) => ({type: "SET_INITIALIZE", payload: {isInitialized: isInitialized}} as const)

export default appReducer