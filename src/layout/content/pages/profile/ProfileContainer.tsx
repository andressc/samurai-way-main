import {Profile} from "./Profile"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {ProfileUserType} from "../../../../redux/reducers/profile-reducer"

type MapStatePropsType = {
    user: ProfileUserType
}

export type PropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    user: state.profile.user,
})

export const ProfileContainer = connect(mapStateToProps)(Profile)