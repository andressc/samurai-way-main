import {Friends} from "./Friends"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {FriendType} from "../../../../redux/reducers/dialogs-reducer"

type MapStatePropsType = {
    friends: FriendType[]
}

export type PropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    friends: state.dialogsPage.friends,
})

export const FriendsContainer = connect(mapStateToProps)(Friends)
