export type UserResponseTypeItemsPhotos = {
    small: string | null;
    large: string | null;
}

export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: string | null,
    photos: UserResponseTypeItemsPhotos;
    status: string | null;
    followed: boolean;
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    maxButtons: number
    isFetching: boolean
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    maxButtons: 11,
    isFetching: true
}

export type UserActionsType =
    FollowType
    | UnFollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalCountType
    | setIsFetchingType

const usersReducer = (state: UsersPageType = initialState, action: UserActionsType): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: true} : user)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {
                    ...user,
                    followed: false
                } : user)
            }
        case "SET_USERS":
            return {...state, users: [...action.payload.users]}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.payload.page}
        case "SET_TOTAL_COUNT":
            return {...state, totalUsersCount: action.payload.totalCount}
        case "SET_IS_FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
}

type FollowType = ReturnType<typeof followAC>
type UnFollowType = ReturnType<typeof unFollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
type SetTotalCountType = ReturnType<typeof setTotalCountAC>
type setIsFetchingType = ReturnType<typeof setIsFetchingAC>

export const followAC = (userId: number) => ({type: "FOLLOW", payload: {userId}} as const)

export const unFollowAC = (userId: number) => ({type: "UNFOLLOW", payload: {userId}} as const)

export const setUsersAC = (users: UserType[]) => ({type: "SET_USERS", payload: {users}} as const)
export const setCurrentPageAC = (page: number) => ({type: "SET_CURRENT_PAGE", payload: {page}} as const)

export const setTotalCountAC = (totalCount: number) => ({type: "SET_TOTAL_COUNT", payload: {totalCount}} as const)

export const setIsFetchingAC = (isFetching: boolean) => ({type: "SET_IS_FETCHING", payload: {isFetching}} as const)

export default usersReducer