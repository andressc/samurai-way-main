import React from "react"
import {Friends} from "./friends/Friends"
import {Dialogs} from "./dialogs/Dialogs"
import * as S from "./Messages.styled"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {FriendType} from "../friends/Friend"
import {DialogType} from "./dialogs/Dialog"

type PropsType = {
    friends: FriendType[]
    dialogs: DialogType[]
}
export const Messages: React.FC<PropsType> = ({friends, dialogs}) => {
    return (
        <BlockWrapper title="Messages">
            <S.Messages>
                <Friends friends={friends}/>
                <Dialogs dialogs={dialogs}/>
            </S.Messages>
        </BlockWrapper>
    )
}