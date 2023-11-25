import {Users} from "./Users"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {FriendType} from "../../../../redux/reducers/dialogs-reducer"

type MapStatePropsType = {
    users: FriendType[]
}

export type PropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.users.users,
})

export const UsersContainer = connect(mapStateToProps)(Users)
