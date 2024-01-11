import React, {FC} from "react"
import {Friends} from "./friends/Friends"
import {Dialogs} from "./dialogs/Dialogs"
import * as S from "./Messages.styled"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {Form} from "../../../../components/Form/Form"
import {PropsType} from "./MessagesContainer"
import {Redirect} from "react-router-dom"

export const Messages: FC<PropsType> = ({friends, dialogs, buttonTitle, authUserId, callback}) => {

    if(!authUserId) return <Redirect to="/samurai-way-main/login"/>

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