import React from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {Friend} from "./Friend"
import {PropsType} from "./FriendsContainer"

export const Friends: React.FC<PropsType> = ({friends}) => {

    const friendsList: JSX.Element[] = friends && friends.map(friend => <Friend key={friend.userId} friend={friend}/>)

    return (
        <BlockWrapper title="Friends">
            {friendsList}
        </BlockWrapper>
    )
}