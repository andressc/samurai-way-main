import React from "react"
import {BlockWrapper} from "../../../../components/BlockWrapper/BlockWrapper"
import {Friend, FriendType} from "./Friend"

type PropsType = {
    friends: FriendType[]
}
export const Friends: React.FC<PropsType> = ({friends}) => {

    const friendsList: JSX.Element[] = friends && friends.map(friend => <Friend key={friend.userId} friend={friend}/>)

    return (
        <BlockWrapper title="Friends">
            {friendsList}
        </BlockWrapper>
    )
}