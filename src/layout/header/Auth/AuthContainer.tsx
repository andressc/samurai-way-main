import {connect} from "react-redux"
import React, {Component} from "react"
import {AuthUserType, getAuthUser, logoutTC} from "../../../redux/reducers/auth-reducer"
import Auth from "./Auth"
import {AppStateType} from "../../../redux/redux-store"
import {NavLink} from "react-router-dom"
import {Button} from "../../../components/Button/Button"
import profileIcon from "../../../assets/icons/profile.svg"

class AuthContainer extends Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUser()
    }

    onclickHandler = () => {
        this.props.logoutTC()
    }

    render() {
        return <>
            {this.props.authUser.id
                ? <Auth profileName={this.props.authUser.login} profilePhoto={this.props.authUser.photo}
                        logoutTC={this.props.logoutTC}/>
                : <NavLink to="/samurai-way-main/login"><Button title="Login" icon={profileIcon}/></NavLink>
            }
        </>
    }
}

type MapStatePropsType = {
    authUser: AuthUserType
}

type MapDispatchPropsType = {
    getAuthUser: () => void
    logoutTC: () => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    authUser: state.auth
})

export default connect(mapStateToProps, {getAuthUser, logoutTC})(AuthContainer)
