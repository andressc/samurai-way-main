import {Profile} from "./Profile"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {AuthUserType} from "../../../../redux/reducers/user-reducer"

type MapStatePropsType = {
    user: AuthUserType
}

export type PropsType = MapStatePropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    user: state.user.user,
})

export const ProfileContainer = connect(mapStateToProps)(Profile)