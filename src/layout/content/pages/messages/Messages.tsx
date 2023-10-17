import React from "react"
import {Friends} from "./friends/Friends"
import {Dialogs} from "./dialogs/Dialogs"
import * as S from "./Messages.styled"
import {db} from "../../../../db/db"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"

export const Messages: React.FC = () => {
    return (
        <BlockWrapper title="Messages">
            <S.Messages>
                <Friends friends={db.friends}/>
                <Dialogs dialogs={db.dialogs}/>
            </S.Messages>
        </BlockWrapper>
    )
}