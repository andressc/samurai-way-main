import {connect} from "react-redux"
import {AppStateType} from "../../../../redux/redux-store"
import {compose} from "redux"
import {ComponentType} from "react";
import {Login} from "./Login";
import {AuthUserType, loginTC} from "../../../../redux/reducers/auth-reducer";
import {LoginPayloadType} from "../../../../api/profile-api";
import {withLoginRedirect} from "../../../../hoc/withLoginRedirect";


type MapStatePropsType = {
    authUser: AuthUserType
}

type MapDispatchPropsType = {
    loginTC: (data: LoginPayloadType) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    authUser: state.auth
})

export const LoginContainer = compose<ComponentType>(
    connect(mapStateToProps, {loginTC}),
    withLoginRedirect
)(Login)

/*
export const MessagesContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)*/
