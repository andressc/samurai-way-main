import React from "react"
import {Friends} from "./friends/Friends"
import {Dialogs} from "./dialogs/Dialogs"
import * as S from "./Messages.styled"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {FriendType} from "../friends/Friend"
import {DialogType} from "./dialogs/Dialog"
import {Form} from "../../../../components/Form/Form"

type PropsType = {
    friends: FriendType[]
    dialogs: DialogType[]
    buttonTitle: string
    callback: (value: string) => void
}
export const Messages: React.FC<PropsType> = ({friends, dialogs, buttonTitle , callback}) => {
    return (
        <BlockWrapper title="Messages">
            <S.Messages>
                <Friends friends={friends}/>
                <Dialogs dialogs={dialogs}/>
            </S.Messages>
            <Form callback={callback} buttonTitle={buttonTitle}/>
        </BlockWrapper>
    )
}