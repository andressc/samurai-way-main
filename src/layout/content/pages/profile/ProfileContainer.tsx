import {Profile} from "./Profile"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {getProfile, getStatus, ProfileType, savePhoto, setStatus} from "../../../../redux/reducers/profile-reducer"
import {Component, ComponentType} from "react"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {AuthUserType} from "../../../../redux/reducers/auth-reducer"
import {compose} from "redux";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";

class ProfileContainer extends Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId && this.props.authUser.id) userId = this.props.authUser.id
        //if (!userId) this.props.history.push('/login')

        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile user={this.props.user} setStatus={this.props.setStatus} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
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
    savePhoto: (image: File) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<{ userId: string }>

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    user: state.profile,
    authUser: state.auth,
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, setStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

/*
export default withAuthRedirect(connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer)))*/
