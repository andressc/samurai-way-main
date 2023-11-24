import {Friends} from "./Friends"
import {AppState} from "../../../../redux/redux-store"
import {connect} from "react-redux"

const mapStateToProps = (state: AppState) => ({
    friends: state.dialogsPage.friends,
})

export const FriendsContainer = connect(mapStateToProps)(Friends)
