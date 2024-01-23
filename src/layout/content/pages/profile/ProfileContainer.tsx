import {Profile} from "./Profile"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {getProfile, getStatus, ProfileType, setStatus} from "../../../../redux/reducers/profile-reducer"
import {Component, ComponentType} from "react"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {AuthUserType} from "../../../../redux/reducers/auth-reducer"
import {compose} from "redux";

class ProfileContainer extends Component<PropsType> {

    componentDidMount() {
		let userId = +this.props.match.params.userId
		if(!userId) userId = 30356

		this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile user={this.props.user} setStatus={this.props.setStatus}/>
    }
}

type MapStatePropsType = {
    user: ProfileType
	authUser: AuthUserType
}

type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    setStatus: (status: string) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<{userId: string}>

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    user: state.profile,
	authUser: state.auth,
})


export default compose<ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, setStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

/*
export default withAuthRedirect(connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer)))*/
