import React from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {db} from "../../../../db/db"
import {Friend} from "./Friend"

export const Friends: React.FC = () => {

    const friendsList: JSX.Element[] = db.friends.map(friend => <Friend key={friend.userId} friend={friend}/>)

    return (
        <BlockWrapper title="Friends">
            {friendsList}
        </BlockWrapper>
    )
}