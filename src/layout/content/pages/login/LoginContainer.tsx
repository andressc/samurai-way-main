import {connect} from "react-redux"
import {AppStateType} from "../../../../redux/redux-store"
import {compose} from "redux"
import {ComponentType} from "react";
import {Login} from "./Login";
import {loginTC} from "../../../../redux/reducers/auth-reducer";
import {LoginPayloadType} from "../../../../api/profile-api";


type MapStatePropsType = {
    authUserId: number | null
    captcha: string | null
}

type MapDispatchPropsType = {
    loginTC: (data: LoginPayloadType) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    authUserId: state.auth.id,
    captcha: state.auth.captcha
})

export const LoginContainer = compose<ComponentType>(
    connect(mapStateToProps, {loginTC}),
)(Login)
