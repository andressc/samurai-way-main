import {Redirect} from "react-router-dom"
import React, {ComponentType, FC} from "react"
import {AppStateType} from "../redux/redux-store"
import {connect} from "react-redux"

type MapStatePropsType = {
    authUserId: number | null
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    authUserId: state.auth.id
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent: FC<MapStatePropsType> = (props) => {

        let {authUserId, ...restProps} = props

        if (!authUserId) return <Redirect to="/login"/>

        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}