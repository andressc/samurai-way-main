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
            return {...state, users: action.payload.users.map(u => ({...u, buttonDisabled: false}))}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.payload.page}
        case "SET_TOTAL_COUNT":
            return {...state, totalUsersCount: action.payload.totalCount}
        case "SET_IS_FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "SET_IS_DISABLED":
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

const follow = (userId: number) => ({type: "FOLLOW", payload: {userId}} as const)

const unFollow = (userId: number) => ({type: "UNFOLLOW", payload: {userId}} as const)

const setUsers = (users: UserType[]) => ({type: "SET_USERS", payload: {users}} as const)
const setCurrentPage = (page: number) => ({type: "SET_CURRENT_PAGE", payload: {page}} as const)

const setTotalCount = (totalCount: number) => ({type: "SET_TOTAL_COUNT", payload: {totalCount}} as const)

const setIsFetching = (isFetching: boolean) => ({type: "SET_IS_FETCHING", payload: {isFetching}} as const)

const setIsDisabled = (userId: number, isDisabled: boolean) => ({
    type: "SET_IS_DISABLED",
    payload: {userId, isDisabled}
} as const)

export const getUsers = (currentPage: number): AppThunk => (dispatch, getState: () => AppStateType) => {

    const state = getState()

    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersApi.getUsers(currentPage, state.usersPage.pageSize)
        .then(response => {
            dispatch(setUsers(response.items))
            dispatch(setTotalCount(response.totalCount))
            dispatch(setIsFetching(false))
        })
}

export const toggleFollow = (userId: number): AppThunk => (dispatch) => {

    dispatch(setIsDisabled(userId, true))
    usersApi.follow(userId).then(response => {
        if (response.resultCode === 0) dispatch(follow(userId))
        dispatch(setIsDisabled(userId, false))
    })
}

export const toggleUnfollow = (userId: number): AppThunk => (dispatch) => {

    dispatch(setIsDisabled(userId, true))
    usersApi.unFollow(userId).then(response => {
        if (response.resultCode === 0) dispatch(unFollow(userId))
        dispatch(setIsDisabled(userId, false))
    })
}

export default usersReducer