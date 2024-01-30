import {connect} from "react-redux"
import React, {Component} from "react"
import {AuthUserType, logoutTC} from "../../../redux/reducers/auth-reducer"
import Auth from "./Auth"
import {AppStateType} from "../../../redux/redux-store"
import {NavLink} from "react-router-dom"
import {Button} from "../../../components/Button/Button"
import profileIcon from "../../../assets/icons/profile.svg"

class AuthContainer extends Component<PropsType> {

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
    logoutTC: () => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    authUser: state.auth
})

export default connect(mapStateToProps, {logoutTC})(AuthContainer)
