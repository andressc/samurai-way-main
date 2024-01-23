import {Profile} from "./Profile"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {getProfile, ProfileType} from "../../../../redux/reducers/profile-reducer"
import {Component, ComponentType} from "react"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {AuthUserType} from "../../../../redux/reducers/auth-reducer"
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect"
import {compose} from "redux";

class ProfileContainer extends Component<PropsType> {

    componentDidMount() {
		let userId = +this.props.match.params.userId
		if(!userId) userId = 2

		this.props.getProfile(userId)
    }

    render() {
        return <Profile user={this.props.user}/>
    }
}

type MapStatePropsType = {
    user: ProfileType
	authUser: AuthUserType
}

type MapDispatchPropsType = {
    getProfile: (userId: number) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<{userId: string}>

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    user: state.profile,
	authUser: state.auth,
})


export default compose<ComponentType>(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

/*
export default withAuthRedirect(connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer)))*/
