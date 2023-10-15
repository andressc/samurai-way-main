import React from "react"
import {DialogsUser} from "./dialogs-user/DialogsUser"
import {DialogsMessage} from "./dialogs-message/DialogsMessage"
import {S} from "./Messages_Styles"

export const Messages: React.FC = () => {
    return (
        <S.Messages>
            <DialogsUser/>
            <DialogsMessage/>
        </S.Messages>
    )
}