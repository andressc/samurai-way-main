import React, {useContext} from "react"
import {StoreContext} from "../../../../StoreContext"
import {Profile} from "./Profile"


export const ProfileContainer: React.FC = () => {

    const context = useContext(StoreContext)

    return (
        <Profile user={context.getState().user.user}/>
    )
}