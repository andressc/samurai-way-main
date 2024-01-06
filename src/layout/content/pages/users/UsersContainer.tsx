import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {
    followAC,
    setCurrentPageAC, setTotalCountAC,
    setUsersAC,
    unFollowAC,
    UserActionsType,
    UserType
} from "../../../../redux/reducers/users-reducer"
import {Dispatch} from "redux"
import React, {Component} from "react"
import axios from "axios"
import {Users} from "./Users"

export type UserResponseType = {
    items: UserType[];
    totalCount: number;
    error?: any;
}

class UsersContainer extends Component<PropsType> {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        axios.get<UserResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    setCurrentPage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get<UserResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      maxButtons={this.props.maxButtons}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      setCurrentPage={this.setCurrentPage}
        />
    }
}

type MapStatePropsType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    maxButtons: number
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    maxButtons: state.usersPage.maxButtons
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
    },
    setCurrentPage: (page: number) => {
        dispatch(setCurrentPageAC(page))
    },
    setTotalCount: (totalCount: number) => {
        dispatch(setTotalCountAC(totalCount))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
