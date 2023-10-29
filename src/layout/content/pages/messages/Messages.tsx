import React from "react"
import {Friends} from "./friends/Friends"
import {Dialogs} from "./dialogs/Dialogs"
import * as S from "./Messages.styled"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {FriendType} from "../friends/Friend"
import {DialogType} from "./dialogs/Dialog"
import {Form} from "../../../../components/Form/Form"
import {ActionType} from "../../../../redux/actionType"
import {addMessageAC} from "../../../../redux/dialogs-reducer"

type PropsType = {
    friends: FriendType[]
    dialogs: DialogType[]
    dispatch: (action: ActionType) => void
}
export const Messages: React.FC<PropsType> = ({friends, dialogs, dispatch}) => {
    return (
        <BlockWrapper title="Messages">
            <S.Messages>
                <Friends friends={friends}/>
                <Dialogs dialogs={dialogs}/>
            </S.Messages>
            <Form dispatch={dispatch} actionCreator={addMessageAC} buttonTitle="Send Message"/>
        </BlockWrapper>
    )
}