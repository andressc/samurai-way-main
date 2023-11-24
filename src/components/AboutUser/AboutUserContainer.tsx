import React, {useContext} from "react"
import {AboutUser} from "./AboutUser"
import {StoreContext} from "../../StoreContext"

export const AboutUserContainer: React.FC = () => {

    const context = useContext(StoreContext)

    return (
        <AboutUser user={context.getState().user.user}/>
    )
}