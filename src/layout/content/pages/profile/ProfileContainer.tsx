import {Profile} from "./Profile"
import {AppState} from "../../../../redux/redux-store"
import {connect} from "react-redux"

const mapStateToProps = (state: AppState) => ({
    user: state.user.user,
})

export const ProfileContainer = connect(mapStateToProps)(Profile)