import {connect} from "react-redux"
import React, {Component} from "react"
import axios from "axios"
import {AuthUserType, setAuth} from "../../../redux/reducers/auth-reducer"
import Auth from "./Auth"
import {AppStateType} from "../../../redux/redux-store"
import {NavLink} from "react-router-dom"
import {Button} from "../../../components/Button/Button"
import profileIcon from "../../../assets/icons/profile.svg"
import {ProfileResponseType} from "../../content/pages/profile/ProfileContainer"

export type AuthUserResponseType = {
    data: AuthUserType;
    resultCode: number;
    messages?: string[];
}

class AuthContainer extends Component<PropsType> {

    componentDidMount() {
        this.getAuthUser()
    }

    getAuthUser = () => {
        axios.get<AuthUserResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                return axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)
                //if(response.data.resultCode === 0) this.props.setAuth(response.data.data)
            })
            .then(response => {
                const authUser = {
                    id: response.data.userId,
                    email: null,
                    login: response.data.fullName,
                    photo: response.data.photos.small
                }
                this.props.setAuth(authUser)
            })
    }

    render() {
        return <>
            {this.props.authUser.id
                ? <Auth profileName={this.props.authUser.login} profilePhoto={this.props.authUser.photo}/>
                : <NavLink to="/samurai-way-main/login"><Button title="Login" icon={profileIcon}/></NavLink>
            }
        </>
    }
}

type MapStatePropsType = {
    authUser: AuthUserType
}

type MapDispatchPropsType = {
    setAuth: (authUser: AuthUserType) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    authUser: state.auth
})

export default connect(mapStateToProps, {setAuth})(AuthContainer)
