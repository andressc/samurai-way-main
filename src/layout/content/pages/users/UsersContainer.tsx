import {Users} from "./Users"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {followAC, setUsersAC, unFollowAC, UserActionsType, UserType} from "../../../../redux/reducers/users-reducer"
import {Dispatch} from "redux"

type MapStatePropsType = {
    users: UserType[]
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
})

const mapDispatchToProps = (dispatch: Dispatch<UserActionsType>): MapDispatchPropsType => ({
    follow: (userId: number) => {
        dispatch(followAC(userId))
    },
    unFollow: (userId: number) => {
        dispatch(unFollowAC(userId))
    },
    setUsers: (users: UserType[]) => {
        dispatch(setUsersAC(users))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
