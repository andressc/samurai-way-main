import React, {useContext} from "react"
import {Messages} from "./Messages"
import {StoreContext} from "../../../../StoreContext"

export const MessagesContainer: React.FC = () => {

    const context = useContext(StoreContext)

    return (
        <Messages dialogs={context.getState().dialogsPage.dialogs} friends={context.getState().dialogsPage.friends}/>
    )
}