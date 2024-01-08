import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalCount,
    setUsers,
    unFollow,
    UserType
} from "../../../../redux/reducers/users-reducer"
import React, {Component} from "react"
import {Users} from "./Users"
import {usersApi} from "../../../../api/users-api"

class UsersContainer extends Component<PropsType> {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setUsers(response.items)
                this.props.setTotalCount(response.totalCount)
                this.props.setIsFetching(false)
            })
    }

    setCurrentPage = (page: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(page)
        usersApi.getUsers(page, this.props.pageSize)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.items)
            })
    }

    follow = (userId: number) => {
        usersApi.follow(userId).then(response => {
            if (response.resultCode === 0) this.props.follow(userId)
        })
    }

    unFollow = (userId: number) => {
        usersApi.unFollow(userId).then(response => {
            if (response.resultCode === 0) this.props.unFollow(userId)
        })
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      follow={this.follow}
                      unFollow={this.unFollow}
                      maxButtons={this.props.maxButtons}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      isFetching={this.props.isFetching}
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
    isFetching: boolean
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    maxButtons: state.usersPage.maxButtons,
    isFetching: state.usersPage.isFetching,
})

/*const mapDispatchToProps = (dispatch: Dispatch<UserActionsType>): MapDispatchPropsType => ({
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
    },
    setIsFetching: (isFetching: boolean) => {
        dispatch(setIsFetchingAC(isFetching))
    }
})*/

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching
})(UsersContainer)
