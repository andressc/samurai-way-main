import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {
    getUsers,
    toggleFollow,
    toggleUnfollow,
    UserType
} from "../../../../redux/reducers/users-reducer"
import React, {Component, ComponentType} from "react"
import {Users} from "./Users"
import {compose} from "redux";
import {
    getCurrentPage, getIsFetching,
    getMaxButtons,
    getPageSize,
    getTotalUsersCount, getUsersState,
} from "../../../../selectors/users-selectors";
import {getAuthUserId} from "../../../../selectors/auth-selectors";

class UsersContainer extends Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage)
    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      follow={this.props.toggleFollow}
                      unFollow={this.props.toggleUnfollow}
                      maxButtons={this.props.maxButtons}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      isFetching={this.props.isFetching}
                      setCurrentPage={this.props.getUsers}
                      authUserId = {this.props.authUserId}
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
    authUserId: number | null
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number) => void
    toggleFollow: (userId: number) => void
    toggleUnfollow: (userId: number) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

/*const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    maxButtons: state.usersPage.maxButtons,
    isFetching: state.usersPage.isFetching,
    authUserId: state.auth.id
})*/

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: getUsersState(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    maxButtons: getMaxButtons(state),
    isFetching: getIsFetching(state),
    authUserId: getAuthUserId(state)
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
    },
    setUsersTC: (currentPage: number, pageSize: number) => {
        dispatch(setUsersTC(currentPage, pageSize))
    }
})*/

export default compose<ComponentType>(
    connect(mapStateToProps, {
        getUsers,
        toggleFollow,
        toggleUnfollow
    }),
)(UsersContainer)

/*export default connect(mapStateToProps, {
    getUsers,
    toggleFollow,
    toggleUnfollow
})(UsersContainer)*/
