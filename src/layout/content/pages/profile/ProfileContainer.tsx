import {Profile} from "./Profile"
import {AppStateType} from "../../../../redux/redux-store"
import {connect} from "react-redux"
import {ProfileType, setProfile} from "../../../../redux/reducers/profile-reducer"
import {Component} from "react"
import axios from "axios"
import {RouteComponentProps, withRouter} from "react-router-dom"
import {AuthUserType} from "../../../../redux/reducers/auth-reducer"

export type ProfileResponseType = {
	userId: number;
	aboutMe: string;
	contacts: ProfileResponseTypeContacts;
	lookingForAJob: boolean;
	lookingForAJobDescription?: string;
	fullName: string;
	photos: ProfileResponseTypePhotos;
}
export type ProfileResponseTypeContacts = {
	facebook: string;
	website: string;
	vk: string;
	twitter: string;
	instagram: string;
	youtube: string;
	github: string;
	mainLink: string;
}

export type ProfileResponseTypePhotos = {
	small: string;
	large: string;
}

class ProfileContainer extends Component<PropsType> {

    componentDidMount() {
        this.getProfile()
    }

	getProfile = () => {

		let userId = this.props.match.params.userId

		if(!userId) userId = "2"

        axios.get<ProfileResponseType>
		(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
				const profile: ProfileType = {
					userId: response.data.userId,
					fullName: response.data.fullName,
					userImg: response.data.photos.small,
					aboutMe: response.data.aboutMe
				}
                this.props.setProfile(profile)
                //this.props.setIsFetching(false)
            })
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
	setProfile: (profile: ProfileType) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<{userId: string}>

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    user: state.profile,
	authUser: state.auth,
})

export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer))