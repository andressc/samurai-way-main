import {usersApi} from "../../api/users-api"
import {AppThunk, AppStateType} from "../redux-store"

export type UserResponseTypeItemsPhotos = {
    small: string | null
    large: string | null
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: UserResponseTypeItemsPhotos
    status: string | null
    followed: boolean
    isFollowed: boolean
    buttonDisabled: boolean
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
    isFetching: false,
}

export type UserActionsType =
    FollowType
    | UnFollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalCountType
    | setIsFetchingType
    | setIsDisabledType

const usersReducer = (state: UsersPageType = initialState, action: UserActionsType): UsersPageType => {

    switch (action.type) {
        case "users/FOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: true} : user)
            }
        case "users/UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {
                    ...user,
                    followed: false
                } : user)
            }
        case "users/SET_USERS":
            return {...state, users: action.payload.users.map(u => ({...u, buttonDisabled: false}))}
        case "users/SET_CURRENT_PAGE":
            return {...state, currentPage: action.payload.page}
        case "users/SET_TOTAL_COUNT":
            return {...state, totalUsersCount: action.payload.totalCount}
        case "users/SET_IS_FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "users/SET_IS_DISABLED":
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {
                    ...user,
                    buttonDisabled: action.payload.isDisabled
                } : user)
            }
        default:
            return state
    }
}

type FollowType = ReturnType<typeof follow>
type UnFollowType = ReturnType<typeof unFollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalCountType = ReturnType<typeof setTotalCount>
type setIsFetchingType = ReturnType<typeof setIsFetching>
type setIsDisabledType = ReturnType<typeof setIsDisabled>

const follow = (userId: number) => ({type: "users/FOLLOW", payload: {userId}} as const)

const unFollow = (userId: number) => ({type: "users/UNFOLLOW", payload: {userId}} as const)

const setUsers = (users: UserType[]) => ({type: "users/SET_USERS", payload: {users}} as const)
const setCurrentPage = (page: number) => ({type: "users/SET_CURRENT_PAGE", payload: {page}} as const)

const setTotalCount = (totalCount: number) => ({type: "users/SET_TOTAL_COUNT", payload: {totalCount}} as const)

const setIsFetching = (isFetching: boolean) => ({type: "users/SET_IS_FETCHING", payload: {isFetching}} as const)

const setIsDisabled = (userId: number, isDisabled: boolean) => ({
    type: "users/SET_IS_DISABLED",
    payload: {userId, isDisabled}
} as const)

export const getUsers = (currentPage: number): AppThunk => async (dispatch, getState: () => AppStateType) => {

    const state = getState()

    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const response = await usersApi.getUsers(currentPage, state.usersPage.pageSize)

    dispatch(setUsers(response.items))
    dispatch(setTotalCount(response.totalCount))
    dispatch(setIsFetching(false))

}

export const toggleFollow = (userId: number): AppThunk => async (dispatch) => {

    dispatch(setIsDisabled(userId, true))
    const response = await usersApi.follow(userId)

    if (response.resultCode === 0) {
        dispatch(follow(userId))
    }

    dispatch(setIsDisabled(userId, false))
}

export const toggleUnfollow = (userId: number): AppThunk => async (dispatch) => {

    dispatch(setIsDisabled(userId, true))
    const response = await usersApi.unFollow(userId)

    if (response.resultCode === 0) {
        dispatch(unFollow(userId))
    }

    dispatch(setIsDisabled(userId, false))
}

export default usersReducer