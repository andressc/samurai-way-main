import React, {useContext} from "react"
import {Friends} from "./Friends"
import {StoreContext} from "../../../../StoreContext"

export const FriendsContainer: React.FC = () => {

    const context = useContext(StoreContext)

    return (
        <Friends friends={context.getState().dialogsPage.friends}/>
    )
}