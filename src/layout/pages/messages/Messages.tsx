import React from "react"
import {Friends} from "./friends/Friends"
import {Dialogs} from "./dialogs/Dialogs"
import {S} from "./Messages_Styles"
import {db} from "../../../db/db"
import {BlockWrapper} from "../../../components/Wrapper/BlockWrapper"

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